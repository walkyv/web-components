// Execute this script in the target branch to release to npm!

const log = require('./log');
const exec = require('./exec');
const path = require('path');
const readline = require('readline');
const semver = require('semver');
const parentPkg = require('../build/package.json');
const branchName = exec('git rev-parse --abbrev-ref HEAD', true);
const currentVersion = parentPkg.version;
const stdin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const syncRemote = (branchName, nextVersion) => {
  exec(`git push origin ${branchName}`);

  if (nextVersion) {
    exec(`git push --tags`);
    log.secondary(`TravisCI will now release to npm on the tagged commit ${nextVersion} for the pearson-ux account.`);
  }
};
const exitFailure = (message) => {
  log.primaryError(message);
  process.exit(1);
};

if (branchName !== 'master' && branchName.toLowerCase().charAt(0) !== 'v') {
    exitFailure('You must be on the master branch in order to execute a release.');
}

// *** Releaser provides the target SEMVER-compliant version ***
stdin.question(`Next version (current is ${currentVersion})? `, (nextVersion) => {

  if (!semver.valid(nextVersion)) {
    exitFailure(`Version '${nextVersion}' is not valid: requires a semver-compliant version. See http://semver.org/`);
  }

  if (!semver.gt(nextVersion, currentVersion)) {
    exitFailure(`Version '${nextVersion}' is not valid: it must be greater than the current version.`);
  }

  if (nextVersion.startsWith('v')) {
    nextVersion = nextVersion.slice(1);
  }

  // Order of operations:
  // 1. Bump the version update in package.json and npm-shrinkwrap.json
  // 2. The 'version' custom npm script (defined in package.json) executes changelog generation and adding to commit
  // 3. Locally commit and tag
  exec(`gulp build`);
  exec(`npm version ${nextVersion}`);
  exec(`cd ./build && npm version ${nextVersion}`);
  exec(`git add . && cd ../`);
  exec(`git commit -m "releasing ${nextVersion}"`);
  exec(`cd ./build && npm publish`);
  exec('gulp publish')
  // push commit and tag on target release branch
  syncRemote(branchName, nextVersion);

  stdin.close();
});

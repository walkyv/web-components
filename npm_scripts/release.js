// Execute this script in the target branch to release to npm!

const log = require('./log');
const exec = require('./exec');
const path = require('path');
const readline = require('readline');
const semver = require('semver');
const mainParentPkg = require('./package.json');
const mainCurrentVersion = mainParentPkg.version;
const branchName = exec('git rev-parse --abbrev-ref HEAD', true);

const stdin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
require('dotenv').config();
const syncRemote = (branchName, nextVersion, component) => {
  exec(`git push origin ${branchName}`);

  if (nextVersion) {
    exec(`git tag ${component}-${nextVersion}`);
    exec(`git push origin ${component}-${nextVersion}`);
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

stdin.question(`Please enter the folder name of the component you want to release `, (component) => {
  const parentPkg = require(`../${component}/package.json`),
    currentVersion = parentPkg.version;

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


    exec(`cd ./${component} && gulp build`);
    exec(`cd ./${component} && npm version ${nextVersion}`);
    exec(`git add .`);
    exec(`git commit -m "releasing ${nextVersion}"`);
    exec(`cd ./${component} && npm publish`);
    // exec('gulp publish')
    stdin.question(`Ready to build the main WC file.  Please enter the new version you would like published: (current is ${mainCurrentVersion})? `, (nextMainVersion) => {
      exec(`gulp build`);
      syncRemote(branchName, nextVersion, component);
      stdin.close();
    });

  });
});
// *** Releaser provides the target SEMVER-compliant version ***
// stdin.question(`Next version (current is ${currentVersion})? `, (nextVersion) => {
//   if (!semver.valid(nextVersion)) {
//     exitFailure(`Version '${nextVersion}' is not valid: requires a semver-compliant version. See http://semver.org/`);
//   }
//   if (!semver.gt(nextVersion, currentVersion)) {
//     exitFailure(`Version '${nextVersion}' is not valid: it must be greater than the current version.`);
//   }
//   if (nextVersion.startsWith('v')) {
//     nextVersion = nextVersion.slice(1);
//   }
//   // Order of operations:
//   // 1. Bump the version update in package.json and npm-shrinkwrap.json
//   // 2. The 'version' custom npm script (defined in package.json) executes changelog generation and adding to commit
//   // 3. Locally commit and tag
//   exec(`gulp build`);
//   exec(`npm version ${nextVersion}`);
//   exec(`cd ./build && npm version ${nextVersion}`);
//   exec(`git add . && cd ../`);
//   exec(`git commit -m "releasing ${nextVersion}"`);
//   exec(`cd ./build && npm publish`);
//   exec('gulp publish')
//   // push commit and tag on target release branch
//   syncRemote(branchName, nextVersion);
//
//   stdin.close();
// });

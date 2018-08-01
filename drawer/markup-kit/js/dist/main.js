'use strict';

(function () {
  // do something
  var drawer = document.getElementById('drawer'),
      button = document.getElementById('openDrawer'),
      mainContent = document.getElementById('main'),
      closeButton = document.querySelector('.close');

  function closeDrawer() {
    drawer.classList.remove('slideInRight');
    drawer.classList.add('slideOutRight');
    drawer.setAttribute('aria-hidden', true);
    mainContent.setAttribute('aria-hidden', closed);

    setTimeout(function (event) {
      drawer.classList.remove('open');
      drawer.classList.remove('slideOutRight');
      drawer.classList.add('closed');
      button.removeAttribute('disabled');
      button.focus();
    }, 1100);
  }

  button.addEventListener('click', function (event) {
    drawer.classList.remove('closed');
    drawer.classList.add('open');
    drawer.classList.remove('slideOutRight');
    drawer.classList.add('slideInRight');
    drawer.setAttribute('aria-hidden', false);
    mainContent.setAttribute('aria-hidden', true);
    button.setAttribute('disabled', true);
    closeButton.setAttribute('disabled', true);
    closeButton.focus();
    setTimeout(function (event) {
      closeButton.removeAttribute('disabled');
      closeButton.focus();
    }, 1100);
  });

  closeButton.addEventListener('click', function (event) {
    closeDrawer();
  });

  document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
      if (closeButton.hasAttribute('disabled') === false) {
        closeDrawer();
      }
    }
  });
})();
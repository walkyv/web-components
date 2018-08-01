'use strict';
(function() {
  // do something
  const drawer = document.getElementById('drawer'),
    button = document.getElementById('openDrawer'),
    mainContent = document.getElementById('main'),
    closeButton = document.querySelector('.close');

  function closeDrawer() {
    drawer.classList.remove('slideInRight');
    drawer.classList.add('slideOutRight');
    drawer.setAttribute('aria-hidden', true);
    mainContent.setAttribute('aria-hidden', closed);

    setTimeout(event => {
      drawer.classList.remove('open');
      drawer.classList.remove('slideOutRight');
      drawer.classList.add('closed');
      button.removeAttribute('disabled');
      button.focus();
    },1100)

  }

  button.addEventListener('click', event => {
    drawer.classList.remove('closed');
    drawer.classList.add('open');
    drawer.classList.remove('slideOutRight');
    drawer.classList.add('slideInRight');
    drawer.setAttribute('aria-hidden', false);
    mainContent.setAttribute('aria-hidden', true);
    button.setAttribute('disabled', true);
    closeButton.setAttribute('disabled', true);
    closeButton.focus();
    setTimeout( event => {
      closeButton.removeAttribute('disabled');
      closeButton.focus();
    },1100)
  });

  closeButton.addEventListener('click', event => {
    closeDrawer();
  });

  document.addEventListener('keyup', event=> {
    if (event.code === 'Escape') {
      if (closeButton.hasAttribute('disabled') === false) {
        closeDrawer();
      }
    }
  })
})();

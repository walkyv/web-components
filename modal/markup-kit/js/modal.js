'use strict';
(function() {
  let modal = document.getElementById('modal');
  const modalButton = document.getElementById('trigger-modal'),
    body = document.getElementsByTagName('body')[0],
    overlay = document.getElementById('modalOverlay'),
    modalBody = modal.querySelector('.modal-body'),
    main = document.getElementById('main'),
    buttons = modal.querySelectorAll('button'),
    title = modal.querySelector('#dialog-heading'),
    totalButtons = buttons.length - 1,
    firstButton = buttons[0],
    lastButton = buttons[totalButtons],
    isScroll = modal.getAttribute('data-scroll'),
    isSticky = modal.getAttribute('data-sticky'),
    viewPortHeight = window.innerHeight;

  function closeModal() {
    modalButton.removeAttribute('disabled');
    main.setAttribute('aria-hidden', 'false');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    modal.classList.remove('sticky');
    modal.classList.remove('modal-scroll');
    body.classList.remove('hide-overflow');
    modalButton.focus();

    if (overlay.tagName === 'BUTTON') {
      overlay.setAttribute('disabled', 'true');
    } else if (isScroll === 'true') {
      modal = document.querySelector('.modal-container');
      modal.classList.add('hidden');
    }
  }

  modalButton.addEventListener('click', event => {
    let modal = document.getElementById('modal');
    const thisButton = event.currentTarget,
      buttonDisabled = thisButton.getAttribute('disabled');

    if (buttonDisabled === null) {
      thisButton.setAttribute('disabled', true);
      main.setAttribute('aria-hidden', 'true');
      overlay.removeAttribute('disabled');
    }

    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    modalBody.scrollIntoView(true);

    if (isScroll === 'true') {
      modal = document.querySelector('.modal-container');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.scrollIntoView();
      }, 1);
    } else if (isSticky === 'true') {
      modal.style.height = viewPortHeight - 100 + 'px';
      body.classList.add('hide-overflow');
      modalBody.classList.add('modal-scroll');
      modal.classList.add('sticky');
      setTimeout(event => {
        modal.style.transform = 'translate(-50%, -50%)';
        modalBody.scrollTop = 0;
      }, 100);
    }

    if (firstButton !== undefined) {
      firstButton.focus();
    }

    if (overlay.tagName === 'BUTTON') {
      title.focus();
    }
  });

  if (overlay.tagName === 'BUTTON') {
    title.addEventListener('blur', () => {
      overlay.focus();
    });
    overlay.addEventListener('blur', () => {
      title.focus();
    });
  }

  if (lastButton !== undefined) {
    lastButton.addEventListener('blur', () => {
      firstButton.focus();
    });

    lastButton.addEventListener('click', () => {
      closeModal();
    });
  }

  overlay.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keyup', event => {
    if (event.keyCode === '27') {
      if (main.getAttribute('aria-hidden') === 'true') {
        closeModal();
      }
    }
  });
})();

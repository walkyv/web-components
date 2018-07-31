'use strict';
class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // shadow dom
    const shadow = this.attachShadow({
        mode: 'open'
      }),

      currentDoc = document.querySelector('link[href$="index.html"]').import;
    let template = currentDoc.querySelector('#template');
    const clone = document.importNode(template.content, true);

    shadow.appendChild(clone);
    // set attributes
    const titleText = this.getAttribute('modalTitleText'),
      successBtnText = this.getAttribute('successButtonText'),
      cancelBtnText = this.getAttribute('cancelButtonText'),
      referenceId = this.getAttribute('buttonReferenceId'),
      title = shadow.querySelector('#dialog-heading'),
      showFooter = this.getAttribute('showFooter'),
      showClose = this.getAttribute('showClose');


    // create elements
    // create the footer is attribute is set to true
    if (showFooter === 'true') {
      const actionsTemplate = currentDoc.querySelector('#actions'),
        actionsClone = document.importNode(actionsTemplate.content, true),
        actionsEntryPoint = shadow.querySelector('.modal-body');

      actionsEntryPoint.parentNode.insertBefore(actionsClone, actionsEntryPoint.nextSibling);

      const cancelButton = shadow.querySelector('#cancelButton'),
        saveButton = shadow.querySelector('#successButton');

      if (cancelBtnText !== null) {
        cancelButton.innerHTML = cancelBtnText;
      } else {
        cancelButton.innerHTML = "Cancel"
      }

      if (successBtnText !== null) {
        saveButton.innerHTML = successBtnText;
      } else {
        saveButton.innerHTML = "Save"
      }
    }

    const overlayButtonTemplate = currentDoc.querySelector('#overlayDiv'),
      overlayButtonClone = document.importNode(overlayButtonTemplate.content, true),
      overlayEntryPoint = shadow.querySelector('#modalPlaceholder');

    overlayEntryPoint.parentNode.insertBefore(overlayButtonClone, overlayEntryPoint.nextElementSibling)
    overlayEntryPoint.remove();

    if (titleText !== null) {
      title.innerHTML = titleText;
    } else {
      title.innerHTML = "Modal Title"
    }

    // functionality
    let modal = shadow.querySelector('.modal'),
      firstButton;
    const modalButton = document.querySelector('#' + referenceId),
      modalContent = document.querySelector('pearson-modal'),
      modalButtons = modalContent.querySelectorAll('button, input, select, a'),
      body = document.getElementsByTagName('body')[0],
      overlay = shadow.querySelector('#modalOverlay'),
      main = document.getElementById('main'),
      buttons = shadow.querySelectorAll('button'),
      totalButtons = buttons.length - 1,
      lastButton = buttons[totalButtons],
      cancelButton = shadow.querySelector('.modal-cancel'),
      successButton = shadow.querySelector('.modal-success'),
      closeButtons = shadow.querySelectorAll('.modal-close');
      if (modalButtons[0]) {
        firstButton = modalButtons[0]
      } else {
        firstButton = buttons[0];
      }


    function setModalPosition () {
      setTimeout(() => {
        const modalPosition = modal.getBoundingClientRect();
        window.scrollTo(0, 0);
        (modalPosition.top)
        if (modalPosition.top <= 0) {
          modal.style.top = '50px';
          modal.style.transform = 'translate(-50%)';
          modal.style.marginBottom = '50px';
        }
      },100);
    }

    function closeModal() {
      modalButton.removeAttribute('disabled');
      main.setAttribute('aria-hidden', 'false');
      body.classList.remove('hide-overflow');

      overlay.classList.remove('fadeIn');
      overlay.classList.add('fadeOut');

      modal.classList.remove('slideInDown');
      modal.classList.add('slideOutDown');

      setTimeout(event => {
        overlay.classList.add('hidden');
        overlay.classList.remove('fadeOut')
      },900);

      setTimeout(event => {
        modal.classList.add('hidden');
        modal.classList.remove('slideOutDown')
        modalButton.focus();
      },400);


    }

    // for modals that are not programatically created
    // when the modal trigger is clicked show modal
    modalButton.addEventListener('click', event => {
      (modalButtons);
      setModalPosition();

      let modal = shadow.querySelector('#modal');
      const thisButton = event.currentTarget,
        buttonDisabled = thisButton.getAttribute('disabled');

      if (buttonDisabled === null) {
        thisButton.setAttribute('disabled', true);
        main.setAttribute('aria-hidden', 'true');
        overlay.removeAttribute('disabled')
      }

      overlay.classList.remove('hidden');
      overlay.classList.remove('fadeOut');
      overlay.classList.add('fadeIn');

      setTimeout(event=> {
        modal.classList.remove('slideOutDown');
        modal.classList.remove('hidden');
        modal.classList.add('slideInDown');
        if (firstButton !== undefined) {
          firstButton.focus();
        }
      },250)

    });


    // add event listener to the close button
    if (closeButtons !== null) {
      closeButtons.forEach(button => {
        (button);
        button.addEventListener('click', event => {
          closeModal();
          setTimeout( event => {
            this.dispatchEvent(new Event('close', {bubbles: true, composed: true}));
          },500)
        })
      });
    }

    if (successButton !== null) {
      successButton.addEventListener('click', event => {
        closeModal();
        setTimeout( event => {
          this.dispatchEvent(new Event('success', {bubbles: true, composed: true}));
        },500)
      })
    }

    if (cancelButton !== null) {
      cancelButton.addEventListener('click', event => {
        closeModal();
        setTimeout( event => {
          this.dispatchEvent(new Event('cancel', {bubbles: true, composed: true}));
        },500)
      })
    }

    // focus trap
    if (lastButton !== undefined) {
      lastButton.addEventListener('blur', () => {
        firstButton.focus();
      });
    }

    // add keyboard accessibility
    shadow.addEventListener('keyup', event => {
      if (event.keyCode == '27') {
        if (main.getAttribute('aria-hidden') === 'true') {
          closeModal();
          setTimeout( event => {
            this.dispatchEvent(new Event('close', {bubbles: true, composed: true}));
          },500)
        }
      }
    });

    // sets the positioning for modals that are programmatically created and have scrolling content
    setModalPosition()

  }
}
customElements.define('pearson-modal', Modal);

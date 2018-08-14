'use strict';

const FOCUSABLE_ELEMENTS = `
    a[href]:not([tabindex^="-"]):not([inert]),
    area[href]:not([tabindex^="-"]):not([inert]),
    input:not([disabled]):not([inert]),
    select:not([disabled]):not([inert]),
    textarea:not([disabled]):not([inert]),
    button:not([disabled]):not([inert]),
    iframe:not([tabindex^="-"]):not([inert]),
    audio:not([tabindex^="-"]):not([inert]),
    video:not([tabindex^="-"]):not([inert]),
    [contenteditable]:not([tabindex^="-"]):not([inert]),
    [tabindex]:not([tabindex^="-"]):not([inert])`,
  TAB_KEY = 9,
  ESCAPE_KEY = 27;

class Modal extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.modal = null;

    this.maintainFocus = null;
    this.bindKeyPress = null;
  }

  connectedCallback() {
    this.maintainFocus = this.maintainFocus.bind(this);
    this.bindKeyPress = this.bindKeyPress.bind(this);

    // shadow dom

    const currentDoc = document.querySelector('link[href$="index.html"]')
      .import;
    let template = currentDoc.querySelector('#template');
    const clone = document.importNode(template.content, true);

    this.shadowRoot.appendChild(clone);
    // set attributes
    const titleText = this.getAttribute('modalTitleText'),
      successBtnText = this.getAttribute('successButtonText'),
      cancelBtnText = this.getAttribute('cancelButtonText'),
      referenceId = this.getAttribute('buttonReferenceId'),
      title = this.shadowRoot.querySelector('#dialog-heading'),
      showFooter = this.getAttribute('showFooter'),
      showClose = this.getAttribute('showClose');

    // create elements
    // create the footer is attribute is set to true
    if (showFooter === 'true') {
      const actionsTemplate = currentDoc.querySelector('#actions'),
        actionsClone = document.importNode(actionsTemplate.content, true),
        actionsEntryPoint = this.shadowRoot.querySelector('.modal-body');

      actionsEntryPoint.parentNode.insertBefore(
        actionsClone,
        actionsEntryPoint.nextSibling
      );

      const cancelButton = this.shadowRoot.querySelector('#cancelButton'),
        saveButton = this.shadowRoot.querySelector('#successButton');

      if (cancelBtnText !== null) {
        cancelButton.innerHTML = cancelBtnText;
      } else {
        cancelButton.innerHTML = 'Cancel';
      }

      if (successBtnText !== null) {
        saveButton.innerHTML = successBtnText;
      } else {
        saveButton.innerHTML = 'Save';
      }
    }

    const overlayButtonTemplate = currentDoc.querySelector('#overlayDiv'),
      overlayButtonClone = document.importNode(
        overlayButtonTemplate.content,
        true
      ),
      overlayEntryPoint = this.shadowRoot.querySelector('#modalPlaceholder');

    overlayEntryPoint.parentNode.insertBefore(
      overlayButtonClone,
      overlayEntryPoint.nextElementSibling
    );
    overlayEntryPoint.remove();

    if (titleText !== null) {
      title.innerHTML = titleText;
    } else {
      title.innerHTML = 'Modal Title';
    }

    // functionality
    this.modal = this.shadowRoot.querySelector('.modal');
    this.modalBtn = document.querySelector('#' + referenceId);
    this.modalContent = document.querySelector('pearson-modal');

    this.body = document.getElementsByTagName('body')[0];
    this.overlay = this.shadowRoot.querySelector('#modalOverlay');
    this.main = document.getElementById('main');
    this.cancelButton = this.shadowRoot.querySelector('.modal-cancel');
    this.successButton = this.shadowRoot.querySelector('.modal-success');
    this.closeButtons = this.shadowRoot.querySelectorAll('.modal-close');

    function setModalPosition() {
      setTimeout(() => {
        const modalPosition = this.modal.getBoundingClientRect();
        window.scrollTo(0, 0);
        if (modalPosition.top <= 0) {
          this.modal.style.top = '50px';
          this.modal.style.transform = 'translate(-50%)';
          this.modal.style.marginBottom = '50px';
        }
      }, 100);
    }

    // for modals that are not programatically created
    // when the modal trigger is clicked show modal
    this.modalBtn.addEventListener('click', event => {
      // setModalPosition();

      this.modal = this.shadowRoot.querySelector('#modal');
      const thisButton = event.currentTarget,
        buttonDisabled = thisButton.getAttribute('disabled');

      if (buttonDisabled === null) {
        thisButton.setAttribute('disabled', true);
        this.main.setAttribute('aria-hidden', 'true');
        this.overlay.removeAttribute('disabled');
      }

      this.overlay.classList.remove('hidden');
      this.overlay.classList.remove('fadeOut');
      this.overlay.classList.add('fadeIn');

      this.modal.classList.remove('hidden');
      this.modal.classList.remove('slideOutDown');
      this.modal.classList.add('slideInDown');
      setTimeout(event => {
        if (this.firstButton !== undefined) {
          this.firstButton.focus();
        }
      }, 250);
    });

    // add event listener to the close button
    if (this.closeButtons !== null) {
      this.closeButtons.forEach(button => {
        button;
        button.addEventListener('click', event => {
          this.closeModal();
          setTimeout(event => {
            this.dispatchEvent(
              new Event('close', { bubbles: true, composed: true })
            );
          }, 500);
        });
      });
    }

    if (this.successButton !== null) {
      this.successButton.addEventListener('click', event => {
        this.closeModal();
        setTimeout(event => {
          this.dispatchEvent(
            new Event('success', { bubbles: true, composed: true })
          );
        }, 500);
      });
    }

    if (this.cancelButton !== null) {
      this.cancelButton.addEventListener('click', event => {
        this.closeModal();
        setTimeout(event => {
          this.dispatchEvent(
            new Event('cancel', { bubbles: true, composed: true })
          );
        }, 500);
      });
    }

    // focus trap
    if (this.lastButton !== undefined) {
      this.lastButton.addEventListener('blur', () => {
        this.firstButton.focus();
      });
    }

    // add keyboard accessibility
    this.shadowRoot.addEventListener('keyup', event => {
      if (event.keyCode === '27') {
        if (this.main.getAttribute('aria-hidden') === 'true') {
          this.closeModal();
          setTimeout(event => {
            this.dispatchEvent(
              new Event('close', { bubbles: true, composed: true })
            );
          }, 500);
        }
      }
    });

    // sets the positioning for modals that are programmatically created and have scrolling content
    // setModalPosition();
  }

  closeModal() {
    this.modalBtn.removeAttribute('disabled');
    this.main.setAttribute('aria-hidden', 'false');
    this.body.classList.remove('hide-overflow');

    this.overlay.classList.remove('fadeIn');
    this.overlay.classList.add('fadeOut');

    this.modal.classList.remove('slideInDown');
    this.modal.classList.add('slideOutDown');

    setTimeout(event => {
      this.overlay.classList.add('hidden');
      this.overlay.classList.remove('fadeOut');
    }, 800);

    setTimeout(event => {
      this.modal.classList.add('hidden');
      this.modal.classList.remove('slideOutDown');
    }, 400);

    setTimeout(event => {
      this.modalBtn.focus();
    }, 801);
  }

  getFocusableChildren(node) {
    const filter = Array.prototype.filter,
      focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function(child) {
      return !!(
        child.offsetWidth ||
        child.offsetHeight ||
        child.getClientRects().length
      );
    });
  }

  setFocusToFirstChild(node) {
    const focusableChildren = this.getFocusableChildren(node),
      focusableChild =
        node.querySelector('[autofocus]') || focusableChildren[0];

    if (focusableChild) {
      focusableChild.focus();
    }
  }

  maintainFocus(e) {
    if (
      this.main.getAttribute('aria-hidden') === 'true' &&
      !this.modal.contains(e.target)
    ) {
      this.setFocusToFirstChild(this.modal);
    }
  }
  bindKeyPress(e) {
    if (this.main.getAttribute('aria-hidden') === 'true') {
      if (e.which === ESCAPE_KEY) {
        this.closeModal();
      }
      if (e.which === TAB_KEY) {
        this.trapTabKey(this.modal, e);
      }
    }
  }
  trapTabKey(node, e) {
    const focusableChildren = this.getFocusableChildren(node),
      focusedItemIdx = focusableChildren.indexOf(document.activeElement),
      lastFocusableIdx = focusableChildren.length - 1;

    if (e.target.getAttribute('tabindex') === '-1') {
      e.preventDefault();
      return false;
    }

    if (e.shiftKey && focusedItemIdx === 0) {
      focusableChildren[lastFocusableIdx].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
      focusableChildren[0].focus();
      e.preventDefault();
    }
  }
}
customElements.define('pearson-modal', Modal);

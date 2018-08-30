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

function getDeepActiveElement() {
  let a = document.activeElement;
  while (a && a.shadowRoot && a.shadowRoot.activeElement) {
    a = a.shadowRoot.activeElement;
  }
  return a;
}

function getFocusableChildren(node) {
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

function setFocusToFirstChild(node) {
  const focusableChildren = getFocusableChildren(node),
    focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];

  if (focusableChild) {
    focusableChild.focus();
  }
}

function trapTabKey(e, ...nodes) {
  const focusableChildren = nodes.reduce(
      (acc, n) => acc.concat(getFocusableChildren(n)),
      []
    ),
    focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
    lastFocusableIdx = focusableChildren.length - 1;

  if (e.shiftKey && focusedItemIdx === 0) {
    focusableChildren[lastFocusableIdx].focus();
    e.preventDefault();
  }

  if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
    focusableChildren[0].focus();
    e.preventDefault();
  }
}

class Modal extends HTMLElement {
  static get observedAttributes() {
    return ['footer'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.bindKeyPress = this.bindKeyPress.bind(this);
    this.maintainFocus = this.maintainFocus.bind(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {

    // if `footer` is changing, but
    // this.modal has not been defined yet,
    // bail out.
    if (name === 'footer' && !this.modal) return;
    if (!this.footer) {
      const actions = this.modal.querySelector('.actions');
      actions.remove();
    }
    if (this.footer) {
      this.renderfooter(this.modal);
    }
  }

  connectedCallback() {
    // Get component attributes
    const titleText = this.getAttribute('titleText'),
      triggerId = this.getAttribute('triggerId'),
      footer = this.hasAttribute('footer');

    // Clone content for shadow DOM
    const currentDoc = document.querySelector('link[href$="index.html"]')
      .import;
    const template = currentDoc.querySelector('#template');
    const clone = document.importNode(template.content, true);

    // Create elements

    // Target the body of the modal

    // create the footer
    if (footer) {
      this.renderfooter(clone);
    }

    const overlayButtonTemplate = currentDoc.querySelector('#overlayDiv'),
      overlayButtonClone = document.importNode(
        overlayButtonTemplate.content,
        true
      ),
      overlayEntryPoint = clone.querySelector('#modalPlaceholder');

    overlayEntryPoint.parentNode.insertBefore(
      overlayButtonClone,
      overlayEntryPoint.nextElementSibling
    );
    overlayEntryPoint.remove();

    const title = clone.querySelector('#dialogHeading');
    if (titleText !== null) {
      title.innerHTML = titleText;
    } else {
      title.innerHTML = 'Modal Title';
    }

    // functionality
    this.body = document.querySelector('body');
    this.main = document.querySelector('main');
    this.triggerBtn = document.querySelector('#' + triggerId);

    this.modal = clone.querySelector('#modal');
    this.eventBtns = clone.querySelectorAll('[data-event]');
    this.overlay = clone.querySelector('#modalOverlay');

    // When the modal trigger is clicked, open modal
    this.triggerBtn.addEventListener('click', this.openModal);

    this.eventBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        const eventType = e.target.dataset.event;
        this.closeModal(eventType);
      });
    });

    // sets the positioning for modals that are programmatically created and have scrolling content
    this.setPosition();

    this.shadowRoot.appendChild(clone);

    document.addEventListener('keydown', this.bindKeyPress);
    document.body.addEventListener('focus', this.maintainFocus, true);
  }


  disconnectedCallback() {
    document.removeEventListener('keydown', this.bindKeyPress);
    document.body.removeEventListener('focus', this.maintainFocus);
  }

  get footer() {
    return this.hasAttribute('footer');
  }

  set footer(value) {
    const isfooterShown = Boolean(value);

    if (isfooterShown) {
      this.setAttribute('footer', '');
    } else {
      this.removeAttribute('footer');
    }
  }

  openModal(e) {
    // unhide it on open, to prevent FOUC
    this.style.display = "block"

    const thisButton = e.currentTarget,
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
    this.open = true;

    setTimeout(() => {
      this.maintainFocus();
    }, 250);
  }

  closeModal(eventName) {
    this.triggerBtn.removeAttribute('disabled');
    this.main.setAttribute('aria-hidden', 'false');
    this.body.classList.remove('hide-overflow');

    this.overlay.classList.remove('fadeIn');
    this.overlay.classList.add('fadeOut');

    this.modal.classList.remove('slideInDown');
    this.modal.classList.add('slideOutDown');

    setTimeout(() => {
      this.modal.classList.add('hidden');
      this.modal.classList.remove('slideOutDown');
    }, 400);

    setTimeout(() => {
      this.dispatchEvent(
        new Event(eventName, { bubbles: true, composed: true })
      );
    }, 500);

    setTimeout(() => {
      this.overlay.classList.add('hidden');
      this.overlay.classList.remove('fadeOut');
    }, 800);

    setTimeout(() => {
      this.triggerBtn.focus();
    }, 801);

    this.open = false;
  }

  maintainFocus() {
    // if the modal is not open, stop the function
    if (!this.open) return;

    /**
     * The DOM we want to trap focus in. If the consumer passed in
     * focusable children, it's the Light DOM; else, it's the Shadow DOM.
     */
    const targetDOM =
      getFocusableChildren(this).length > 0 ? this : this.modal;

    // if neither the Light DOM nor the Shadow DOM within the modal contain
    // the active element, set focus back into the targetDOM.
    if (
      !this.contains(getDeepActiveElement()) &&
      !this.modal.contains(getDeepActiveElement())
    ) {
      setFocusToFirstChild(targetDOM);
    }
  }
  bindKeyPress(e) {
    if (this.open && e.which === ESCAPE_KEY) {
      this.closeModal('cancel');
    }
    if (this.open && e.which === TAB_KEY) {
      trapTabKey(e, this, this.modal);
    }
  }

  setPosition() {
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
  renderfooter(parentNode) {
    const successBtnText = this.getAttribute('successBtnText'),
          cancelBtnText = this.getAttribute('cancelBtnText'),
          hideCancel = this.getAttribute('hideCancel'),
          hideSuccess = this.getAttribute('hideSuccess');

    const currentDoc = document.querySelector('link[href$="index.html"]')
      .import;

    const selector = hideCancel !== null ? '#actions-noCancel' : hideSuccess !== null ? '#actions-noSuccess' : '#actions',
          actionsTemplate = currentDoc.querySelector(selector),
          actionsClone = document.importNode(actionsTemplate.content, true),
          cancelButton = actionsClone.querySelector('#cancelButton'),
          saveButton = actionsClone.querySelector('#successButton');

    const modalBody = parentNode.querySelector('#dialogDescription');

    if (cancelBtnText !== null) {
      cancelButton.innerHTML = cancelBtnText;
    }

    if (successBtnText !== null) {
      saveButton.innerHTML = successBtnText;
    }

    modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);
  }
}

customElements.define('pearson-modal', Modal);

(function(w, doc) {
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
    ESCAPE_KEY = 27,
    ICON_CLOSE_24 = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="close-24" viewBox="0 0 24 24"
        class="pe-icon-close-24"
        aria-hidden="true"
        focusable="false"
        style="width:24px;height:24px;"
      >
        <path
          d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"
        ></path>
      </svg>
  `,
    template = doc.createElement('template'),
    overlayTemplate = doc.createElement('template'),
    actionsTemplate = doc.createElement('template');

  function getDeepActiveElement() {
    let a = doc.activeElement;
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
      focusableChild =
        node.querySelector('[autofocus]') || focusableChildren[0];
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
      if (focusableChildren[lastFocusableIdx !== undefined]){
        focusableChildren[lastFocusableIdx].focus();
        e.preventDefault();
      }
    }

    if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
      if (focusableChildren[0] !== undefined) {
        focusableChildren[0].focus();
        e.preventDefault();
      }
    }
  }


  template.innerHTML = `
<style>
@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.fadeIn,.fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}
.hidden{display:none}.hide-overflow{overflow:hidden}#modalOverlay{width:100%;height:100%;z-index:3;background-color:rgba(37,37,37,.6);position:fixed;top:0;left:0;margin:0;padding:0}[role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}button.close[aria-label="Close Dialog"]{position:absolute;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.close img{height:24px;width:24px}.pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif;height:auto}.pe-modal-container.scroll{height:-webkit-calc(100% - 100px);height:calc(100% - 100px)}@media (max-width:767px){.modal{width:440px}}.pe-modal-container h2{margin:0 0 20px;padding-left:40px;padding-top:40px;padding-right:40px}.pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.pe-modal-container h2{font-size:20px}}.pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;overflow:scroll;height:-webkit-calc(100% - 200px);height:calc(100% - 200px)}.pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (max-width:767px){.pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.pe-modal-container .actions button:last-child{margin:.5em 0}}.modal-container{position:absolute;width:100%;top:0;height:100%}.modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}.elements .gr-btn{border-radius:3px;background-color:#e9e9e9;border:1px solid #c7c7c7;color:#252525}.elements .gr-btn:hover{background-color:#d9d9d9}.elements .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.elements .gr-btn.primary:hover{background:#005a70;border:1px solid #005a70}.elements .gr-btn.icon-btn-18{background-color:transparent;border:0}
.deep-encapsulation .gr-h2{font-size:20px;line-height:1.5;font-weight:400;margin-top:0}.deep-encapsulation .gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;padding:8px 24px;font-size:16px!important;cursor:pointer;border-radius:22px;position:relative;margin:12px}.deep-encapsulation .gr-btn:hover{color:#252525;border:1px solid #252525}.deep-encapsulation .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.deep-encapsulation .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .gr-btn.primary:hover{color:#fff;background-color:#035f79}.deep-encapsulation .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.deep-encapsulation .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.deep-encapsulation .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.deep-encapsulation .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.deep-encapsulation .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.deep-encapsulation .slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.deep-encapsulation .fadeIn,.deep-encapsulation .fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}.deep-encapsulation .hidden{display:none}.deep-encapsulation .hide-overflow{overflow:hidden}.deep-encapsulation #modalOverlay{width:100%;height:100%;z-index:3;background-color:rgba(37,37,37,.6);position:fixed;top:0;left:0;margin:0;padding:0}.deep-encapsulation [role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.deep-encapsulation button.close[aria-label="Close Dialog"]{position:absolute;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.deep-encapsulation .close img{height:24px;width:24px}.deep-encapsulation .pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif;height:auto}.deep-encapsulation .pe-modal-container.scroll{height:-webkit-calc(100% - 100px);height:calc(100% - 100px)}@media (max-width:767px){.deep-encapsulation .modal{width:440px}}.deep-encapsulation .pe-modal-container h2{margin:0 0 20px;padding-left:40px;padding-top:40px;padding-right:40px}.deep-encapsulation .pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.deep-encapsulation .pe-modal-container h2{font-size:20px}}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;overflow:scroll;height:-webkit-calc(100% - 200px);height:calc(100% - 200px)}.deep-encapsulation .pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (max-width:767px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions button:last-child{margin:.5em 0}}.deep-encapsulation .modal-container{position:absolute;width:100%;top:0;height:100%}.deep-encapsulation .modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}.deep-encapsulation .elements .gr-btn{border-radius:3px;background-color:#e9e9e9;border:1px solid #c7c7c7;color:#252525}.deep-encapsulation .elements .gr-btn:hover{background-color:#d9d9d9}.deep-encapsulation .elements .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .elements .gr-btn.primary:hover{background:#005a70;border:1px solid #005a70}.deep-encapsulation .elements .gr-btn.icon-btn-18{background-color:transparent;border:0}
</style>

  <!-- Encapsulated styles for modal-->
	<div class="deep-encapsulation">
		<div class="hidden" id="modalPlaceholder"></div>
		<div class="pe-modal-container hidden animated slideInDown" id="modal" role="dialog" aria-labelledby="dialogHeading" aria-describedby="dialogDescription" aria-modal="true">
			<h2 id="dialogHeading" class="gr-h2"></h2>
			<div class="modal-body" id="dialogDescription">
				<slot></slot>
			</div>
			<button id="closeButton" class="gr-btn icon-btn-18 close modal-close" aria-label="Close Dialog" data-event="cancel">
				${ICON_CLOSE_24}
			</button>
		</div>
	</div>
  `;

  overlayTemplate.innerHTML = `
  <div class="hidden modal-close animated fadeIn" id="modalOverlay" data-event="cancel" style="opacity:.6"></div>
  `;

  actionsTemplate.innerHTML = `
  <div class="actions">
		<button id="successButton" class="modal-success gr-btn primary" data-event="success">Save</button>
		<button id="cancelButton" class="modal-cancel gr-btn" data-event="cancel">Cancel</button>
	</div>
  `;

  class Modal extends HTMLElement {
    static get observedAttributes() {
      return ['footer', 'elements', 'triggerid', 'titletext', 'successbtntext', 'cancelbtntext', 'hidecancel', 'hidesuccess'];
    }
    get hideCancel () {
      return this.hasAttribute('hidecancel');
    }
    get hideSuccess() {
      return this.hasAttribute('hideSuccess');
    }
    get triggerId () {
      return this.getAttribute('triggerid');
    }
    get titleText () {
      return this.getAttribute('titletext');
    }
    get successBtnText () {
      return this.getAttribute('successbtntext');
    }
    get cancelBtnText () {
      return this.getAttribute('cancelbtntext');
    }
    get elements() {
      return this.getAttribute('elements');
    }
    get footer () {
      return this.hasAttribute('footer');
    }

    set openState (bool) {
      this.setAttribute('open', bool)
    }

    set footer(value) {
      const isfooterShown = Boolean(value);
      if (isfooterShown) {
        this.setAttribute('footer', '');
      } else {
        this.removeAttribute('footer');
      }
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.bindKeyPress = this.bindKeyPress.bind(this);
      this.maintainFocus = this.maintainFocus.bind(this);

    }

    connectedCallback() {
      const clone = template.content.cloneNode(true),
        overlayClone = overlayTemplate.content.cloneNode(true),
        overlayEntryPoint = clone.querySelector('#modalPlaceholder'),
        title = clone.querySelector('#dialogHeading');

      this.modal = clone.querySelector('#modal');
      this.body = doc.querySelector('body');
      this.main = doc.querySelector('main');
      this.triggerBtn = doc.querySelector('#'+ this.triggerId);

      overlayEntryPoint.parentNode.insertBefore(
        overlayClone,
        overlayEntryPoint.nextElementSibling
      );

      overlayEntryPoint.remove();



      if (this.footer) {
        this.renderfooter(clone);
      }

      if (this.titleText !== null) {
        title.innerHTML = this.titleText
      } else {
        title.innerHTML = 'Modal Title';
      }

      this.triggerBtn.addEventListener('click', this.openModal);
      const eventBtns = clone.querySelectorAll('[data-event]');

      eventBtns.forEach(btn => {
        btn.addEventListener('click', e => {
          const eventType = e.target.dataset.event;
          this.closeModal(eventType);
        });
      });

      this.modal.addEventListener('animationend', event => {
        event.stopImmediatePropagation();
        if (event.animationName === 'slideInDown') {
          this.maintainFocus();
          this.modal.classList.remove('slideInDown');
        }
        if (event.animationName === 'slideOutDown') {
          const overlay = this.shadowRoot.querySelector('#modalOverlay');
          this.triggerBtn.focus();
          this.modal.classList.add('hidden');
          this.modal.classList.remove('slideOutDown');
          overlay.classList.add('hidden');
          overlay.classList.remove('fadeOut');
          this.triggerBtn.focus();
        }
      });

      doc.addEventListener('keydown', this.bindKeyPress);
      doc.body.addEventListener('focus', this.maintainFocus, true);
      this.shadowRoot.appendChild(clone);
    }

    attributeChangedCallback(name) {
      if (name === 'footer' && !this.modal) return;
      if (!this.footer) {
        const actions = this.modal.querySelector('.actions');
        actions.remove();
      }
      if (this.footer) {
        this.renderfooter(this.modal);
      }
    }

    disconnectedCallback() {
      doc.removeEventListener('keydown', this.bindKeyPress);
      doc.body.removeEventListener('focus', this.maintainFocus);
    }

    openModal(e) {
      const thisButton = e.currentTarget,
        buttonDisabled = thisButton.getAttribute('disabled'),
        overlay = this.shadowRoot.querySelector('#modalOverlay');

      this.openState = true;
      this.setPosition();

      doc.body.style.overflow = 'hidden';
      this.style.display = 'block';

      if (this.elements === 'v1') {
        this.modal.classList.add('elements')
      }

      if (buttonDisabled === null) {
        thisButton.setAttribute('disabled', true);
        this.main.setAttribute('aria-hidden', 'true');
      }

      overlay.classList.remove('hidden', 'fadeOut');
      overlay.classList.add('fadeIn');

      this.modal.classList.remove('hidden', 'slideOutDown');
      this.modal.classList.add('slideInDown');
    }

    closeModal(eventName) {
      const overlay = this.shadowRoot.querySelector('#modalOverlay');
      document.body.style.overflow = 'auto';

      this.triggerBtn.removeAttribute('disabled');
      this.main.setAttribute('aria-hidden', 'false');

      this.body.classList.remove('hide-overflow');
      overlay.classList.remove('fadeIn');

      overlay.classList.add('fadeOut');
      this.modal.classList.add('slideOutDown');

      if (this.modal.classList.contains('scroll')) {
        this.modal.classList.remove('scroll');
      }

      setTimeout(() => {
        this.dispatchEvent(
          new Event(eventName, { bubbles: true, composed: true })
        );
      }, 500);
      this.openState = false
    }

    maintainFocus() {
      const open = this.getAttribute('open');
      // if the modal is not open, stop the function
      if (!open) return;
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
      const open = this.getAttribute('open');
      if (open && e.which === ESCAPE_KEY) {
        this.closeModal('cancel');
      }
      if (open && e.which === TAB_KEY) {
        trapTabKey(e, this, this.modal);
      }
    }

    setPosition() {
      const modalBody = this.shadowRoot.querySelector('.pe-modal-container');
      this.modal.style.top = window.pageYOffset + 50 + 'px';
      this.modal.style.transform = 'translate(-50%)';
      this.modal.style.marginBottom = '50px';

      this.modal.addEventListener('animationstart', event => {
        const modalPosition = this.modal.getBoundingClientRect();
        if (modalPosition.height > window.innerHeight) {
          modalBody.classList.add('scroll');
        }
      });
    }

    renderfooter(parentNode) {
      const actionsClone = actionsTemplate.content.cloneNode(true),
        cancelBtn = actionsClone.querySelector('#cancelButton'),
        successBtn = actionsClone.querySelector('#successButton');

      if (parentNode) {
        const modalBody = parentNode.querySelector('#dialogDescription');
        modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);
      }
      if (this.cancelBtnText !== null) {
        cancelBtn.innerHTML = this.cancelBtnText;
      }
      if (this.successBtnText !== null) {
        successBtn.innerHTML = this.successBtnText;
      }
      if (this.hideCancel) cancelBtn.remove();
      if (this.hideSuccess) successBtn.remove();
    }
  }

  customElements.define('pearson-modal', Modal);
})(window, document);

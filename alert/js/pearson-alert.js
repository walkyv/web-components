(function(w, doc) {
  'use strict';

  const template = doc.createElement('template');

  const ICON_CLOSE_24 = `
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
  `;

  const ICON_CHECK_18 = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="success-icon" viewBox="0 0 18 18"
    class="pe-variant-icon pe-icon-check-18
    aria-hidden="true"
    focusable="false"
    style="width:18px;height:18px;"
  >
    <path
      d="M5.7176,18 C5.4406,18 5.1736,17.885 4.9846,17.68 L0.2666,12.589 C-0.1084,12.184 -0.0854,11.551 0.3206,11.176 C0.7246,10.799 1.3566,10.823 1.7336,11.229 L5.6126,15.415 L16.1826,0.424 C16.5016,-0.028 17.1246,-0.135 17.5756,0.183 C18.0276,0.501 18.1356,1.125 17.8176,1.576 L6.5346,17.576 C6.3616,17.823 6.0846,17.978 5.7836,17.998 C5.7616,17.999 5.7396,18 5.7176,18"
    ></path>
  </svg>
`;

  const ICON_WARNING_18 = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="error-icon" viewBox="0 0 18 18"
    class="pe-variant-icon pe-icon-warning-18
    aria-hidden="true"
    focusable="false"
    style="width:18px;height:18px;"
  >
    <path
      d="M9.9999375,12.4775 C9.9999375,12.7525 9.7749375,12.9775 9.4999375,12.9775 L8.4999375,12.9775 C8.2249375,12.9775 7.9999375,12.7525 7.9999375,12.4775 L7.9999375,7.4775 C7.9999375,7.2025 8.2249375,6.9775 8.4999375,6.9775 L9.4999375,6.9775 C9.7749375,6.9775 9.9999375,7.2025 9.9999375,7.4775 L9.9999375,12.4775 Z M9.9999375,15.4775 C9.9999375,15.7525 9.7749375,15.9775 9.4999375,15.9775 L8.4999375,15.9775 C8.2249375,15.9775 7.9999375,15.7525 7.9999375,15.4775 L7.9999375,14.4775 C7.9999375,14.2025 8.2249375,13.9775 8.4999375,13.9775 L9.4999375,13.9775 C9.7749375,13.9775 9.9999375,14.2025 9.9999375,14.4775 L9.9999375,15.4775 Z M17.9469375,17.2535 L9.4469375,0.2535 C9.2769375,-0.0845 8.7229375,-0.0845 8.5529375,0.2535 L0.0529375,17.2535 C-0.0240625,17.4095 -0.0170625,17.5925 0.0739375,17.7405 C0.1659375,17.8875 0.3269375,17.9775 0.4999375,17.9775 L17.4999375,17.9775 C17.6729375,17.9775 17.8339375,17.8875 17.9259375,17.7405 C18.0169375,17.5925 18.0239375,17.4095 17.9469375,17.2535 L17.9469375,17.2535 Z"
    ></path>
  </svg>
  `;

  template.innerHTML = `
    <link href="../css/style.css" rel="stylesheet" />
    <div class="content-container">
    ${ICON_CHECK_18} ${ICON_WARNING_18}
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <button
      data-action="close-alert"
      class="pe-icon--btn"
      aria-label="Close Lorem ipsum dolor sit amet."
    >
      ${ICON_CLOSE_24}
    </button>
  `;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  const FOCUSABLE_ELEMENTS = `a:not([disabled]), button:not([disabled])`;

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

  function constrainToParentWidth(el) {
    const parent = el.parentElement;
    const parentWidth = parent.getBoundingClientRect().width;
    const parentComputedStyle = w.getComputedStyle(parent);
    const parentPaddingWidth =
      parseInt(
        parentComputedStyle.getPropertyValue('padding-left').match(/\d+/)[0],
        10
      ) +
      parseInt(
        parentComputedStyle.getPropertyValue('padding-right').match(/\d+/)[0],
        10
      );

    const parentBorderWidth =
      parseInt(
        parentComputedStyle
          .getPropertyValue('border-left-width')
          .match(/\d+/)[0],
        10
      ) +
      parseInt(
        parentComputedStyle
          .getPropertyValue('border-right-width')
          .match(/\d+/)[0],
        10
      );

    const elMinWidth = parseInt(
      w
        .getComputedStyle(el)
        .getPropertyValue('min-width')
        .match(/\d+/)[0],
      10
    );

    // The width should be equal to the parent's width,
    // minus the padding and border
    let nextElWidth = parentWidth - (parentPaddingWidth + parentBorderWidth);

    if (nextElWidth > w.innerWidth) {
      nextElWidth = w.innerWidth;
    }

    // If that number is less than the min-width,
    if (nextElWidth < elMinWidth) {
      //  use min-width instead
      nextElWidth = elMinWidth;
    }

    el.style.width = nextElWidth + 'px';
  }

  function ensureAttrs(node, attrs) {
    for (var attrName in attrs) {
      var requiredVal = attrs[attrName];
      if (
        !node.hasAttribute(attrName) ||
        node.getAttribute(attrName) !== requiredVal
      ) {
        node.setAttribute(attrName, requiredVal);
      }
    }
  }

  class Alert extends HTMLElement {
    get animated() {
      return (
        this.hasAttribute('animated') &&
        w.matchMedia('(prefers-reduced-motion: reduce)')
      );
    }

    get level() {
      return this.getAttribute('level');
    }

    get type() {
      return this.getAttribute('type');
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.contentContainer = clone.querySelector('.content-container');
      this.closeBtn = clone.querySelector('button[data-action="close-alert"]');
      this.returnNode =
        doc.querySelector(`#${this.getAttribute('returnNode')}`) ||
        doc.querySelector(`#${this.getAttribute('returnnode')}`) ||
        doc.activeElement;

      this.shadowRoot.appendChild(clone);

      this.onCloseClick = this.onCloseClick.bind(this);
      this.onSlotChange = this.onSlotChange.bind(this);
    }

    connectedCallback() {
      const slot = this.shadowRoot.querySelector('slot');

      const a11yAttrs = {};

      if (this.level === 'global') {
        a11yAttrs.role = 'dialog';
        a11yAttrs['aria-labelledby'] = 'alertTitle',
        a11yAttrs['aria-describedby'] = 'alertDescription alertLink';

        this.openingAnimation = 'slideInDown';
        this.closingAnimation = 'slideOutDown';
      }
      if (this.level === 'inline') {
        constrainToParentWidth(this);

        a11yAttrs.role = this.type === 'error' ? 'alert' : 'status';
        a11yAttrs['aria-live'] = this.type === 'error' ? 'assertive' : 'polite';

        this.openingAnimation = 'fadeIn';
        this.closingAnimation = 'fadeOut';
      }

      ensureAttrs(this, a11yAttrs);

      this.classList.add(this.openingAnimation);

      slot.addEventListener('slotchange', this.onSlotChange);
      this.closeBtn.addEventListener('click', this.onCloseClick);

      if (this.animated) {
        this.addEventListener('animationend', this.onAnimationEnd);
      } else if (this.level === 'global') {
        setFocusToFirstChild(this);
      }
    }
    disconnectedCallback() {
      this.returnNode.focus();
    }

    onCloseClick() {
      this.classList.add(this.closingAnimation);

      this.dispatchEvent(
        new Event('dismiss', {
          bubbles: true
        })
      );

      if (!this.animated) {
        this.remove();
      }
    }

    onSlotChange(e) {
      const contentNodes = e.target.assignedNodes();
      let node;
      for (node of contentNodes) {
        if (node.id === 'alertTitle') {
          break;
        }
      }
      this.closeBtn.setAttribute(
        'aria-label',
        'Close ' + (node ? node.textContent : 'Alert')
      );
    }

    onAnimationEnd(e) {
      if (
        this.level === 'global' &&
        e.animationName === this.openingAnimation
      ) {
        setFocusToFirstChild(this);
      }
      if (e.animationName === this.closingAnimation) {
        this.remove();
      }
    }
  }

  customElements.define('pearson-alert', Alert);
})(window, document);

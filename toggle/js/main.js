(function(w, doc) {
  'use strict';

  const currentDoc = doc.querySelector('link[href$="index.html"]').import,
    template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-toggle');

  const KEYCODE = {
    ENTER: 13,
    SPACE: 32
  };

  class Toggle extends HTMLElement {
    static get observedAttributes() {
      return ['on', 'disabled'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      this.shadowRoot.appendChild(clone);

      this._onToggleClick = this._onToggleClick.bind(this);
      this._onToggleKeyUp = this._onToggleKeyUp.bind(this);

      this._onLabelClick = this._onLabelClick.bind(this);
    }

    connectedCallback() {
      // Add attributes required for a11y
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'switch');
      }
      if (!this.hasAttribute('tabindex') && !this.disabled) {
        this.setAttribute('tabindex', 0);
      }

      // Lazily upgrade properties to make sure
      // observed attributes are handled properly
      this._upgradeProperty('on');
      this._upgradeProperty('disabled');

      // Bind listeners to the toggle
      this.addEventListener('click', this._onToggleClick);
      this.addEventListener('keyup', this._onToggleKeyUp);

      // If the consumer did not set an `aria-label`,
      // We need to find an external one
      if (!this.hasAttribute('aria-label')) {
        this.labelNode = this._findLabelNode();

        // If the external label does not have an ID, we must
        // ensure that it has one
        if (!this.labelNode.id) this.labelNode.id = this.id + '_label';

        // This toggle must be labelled by the external label node
        this.setAttribute('aria-labelledby', this.labelNode.id);

        // We listen for the external label to be clicked
        this.labelNode.addEventListener('click', this._onLabelClick);
      }
    }

    _onToggleClick(e) {
      e.stopPropagation();
      this._toggleOn();
    }

    _onToggleKeyUp(e) {
      if (e.altKey) {
        return;
      }

      if (e.keyCode === KEYCODE.SPACE || e.keyCode === KEYCODE.ENTER) {
        e.preventDefault();
        this._toggleOn();
      }
    }

    _upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        let value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }

    _toggleOn() {
      if (this.disabled) return;

      this.on = !this.on;

      // The toggle should emit a change event
      // for the benefit of consumers
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            on: this.on
          },
          bubbles: true
        })
      );
    }

    // Helper function for finding external label node
    _findLabelNode() {
      if (this.parentElement.tagName === 'LABEL') {
        return this.parentElement;
      }
      const scope = this.getRootNode();
      return scope.querySelector(`label[for="${this.id}"]`);
    }

    // When this label is clicked, we want to
    // click on this toggle and focus on it
    _onLabelClick(e) {
      e.preventDefault();

      if (this.disabled) return;

      this.click();
      this.focus();
    }

    get on() {
      return this.hasAttribute('on');
    }

    set on(value) {
      const ison = Boolean(value);
      if (ison) {
        this.setAttribute('on', '');
      } else {
        this.removeAttribute('on');
      }
    }

    get disabled() {
      return this.hasAttribute('disabled');
    }

    set disabled(value) {
      const isDisabled = Boolean(value);
      if (isDisabled) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    get name() {
      return this.getAttribute('name');
    }

    get value() {
      return this.getAttribute('value');
    }

    attributeChangedCallback(name, oldValue, newValue) {
      const isTruthy = newValue !== null;
      if (name === 'on') {
        this.setAttribute('aria-on', isTruthy);
      }
      if (name === 'disabled') {
        this.setAttribute('aria-disabled', isTruthy);
        if (isTruthy) {
          this.removeAttribute('tabindex');
          this.blur();
        } else {
          this.setAttribute('tabindex', '0');
        }
      }
    }

    disconnectedCallback() {
      this.removeEventListener('click', this._onToggleClick);
      this.removeEventListener('keyup', this._onToggleKeyUp);

      if (this.labelNode) {
        this.labelNode.removeEventListener('click', this._onLabelClick);
      }
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

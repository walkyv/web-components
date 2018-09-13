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
      return ['checked', 'disabled'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      this.shadowRoot.appendChild(clone);

      this._onBtnClick = this._onBtnClick.bind(this);
      this._onBtnKeyUp = this._onBtnKeyUp.bind(this);

      this._onLabelClick = this._onLabelClick.bind(this);
    }

    connectedCallback() {
      // Add attributes required for a11y
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'switch');
      }
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', 0);
      }

      // Lazily upgrade properties to make sure
      // observed attributes are handled properly
      this._upgradeProperty('checked');
      this._upgradeProperty('disabled');

      // Bind listeners to the toggle
      this.addEventListener('click', this._onBtnClick);
      this.addEventListener('keyup', this._onBtnKeyUp);

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

    _onBtnClick(e) {
      e.stopPropagation();
      this._toggleChecked();
    }

    _onBtnKeyUp(e) {
      if (e.altKey) {
        return;
      }

      if (e.keyCode === KEYCODE.SPACE || e.keyCode === KEYCODE.ENTER) {
        e.preventDefault();
        this._toggleChecked();
      }
    }

    _upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        let value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }

    _toggleChecked() {
      this.checked = !this.checked;

      // The toggle should emit a change event
      // for the benefit of consumers
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            checked: this.checked
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
    _onLabelClick() {
      this.click();
      this.focus();
    }

    get checked() {
      return this.hasAttribute('checked');
    }

    set checked(value) {
      const isChecked = Boolean(value);
      if (isChecked) {
        this.setAttribute('checked', '');
      } else {
        this.removeAttribute('checked');
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

    attributeChangedCallback(name, oldValue, newValue) {
      const isTruthy = newValue !== null;
      if (name === 'checked') {
        this.setAttribute('aria-checked', isTruthy);
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
      this.removeEventListener('click', this._onBtnClick);
      this.removeEventListener('keyup', this._onBtnKeyUp);

      if (this.labelNode) {
        this.labelNode.removeEventListener('click', this._onLabelClick);
      }
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

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

      this.label = this._findLabel();

      this._handleClick = this._handleClick.bind(this);
      this._handleKeyUp = this._handleKeyUp.bind(this);

      this._handleLabelClick = this._handleLabelClick.bind(this);
    }

    connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'switch');
      }
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', 0);
      }

      this._upgradeProperty('checked');
      
      this.addEventListener('click', this._handleClick);
      this.addEventListener('keyup', this._handleKeyUp);

      if (this.label && !this.label.id) this.label.id = this.id + '_label';


      this.setAttribute('aria-labelledby', this.label.id);
      
      this.label.addEventListener('click', this._handleLabelClick);
    }

    _handleClick() {
      this._toggleChecked();
    }

    _handleKeyUp(e) {
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

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            checked: this.checked
          },
          bubbles: true
        })
      );
    }

    _findLabel() {
      const scope = this.getRootNode();
      return scope.querySelector(`label[for="${this.id}"]`);
    }

    _handleLabelClick(e) {
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
      this.removeEventListener('click', this._handleClick);
      this.removeEventListener('keyup', this._handleKeyUp);

      this.label.removeEventListener('click', this._handleLabelClick);
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

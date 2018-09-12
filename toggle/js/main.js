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
      return ['checked'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      this.shadowRoot.appendChild(clone);

      this._handleClick = this._handleClick.bind(this);
      this._handleKeyUp = this._handleKeyUp.bind(this);
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

    get checked() {
      return this.hasAttribute('checked');
    }

    set checked(value) {
      if (value) {
        this.setAttribute('checked', '');
      } else {
        this.removeAttribute('checked');
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'checked') {
        const isChecked = newValue !== null;
        this.setAttribute('aria-checked', isChecked);
      }
    }

    disconnectedCallback() {
      this.removeEventListener('click');
      this.removeEventListener('keyup');
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

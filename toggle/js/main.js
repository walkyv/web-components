(function(w, doc) {
  'use strict';
  
  const currentDoc = doc.querySelector('link[href$="index.html"]').import,
    template = currentDoc.querySelector('#template');
  
  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-toggle');
  
  let peToggleCounter = 0;
  
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
    }

    connectedCallback() {
      this._upgradeProperty('checked');
      this._upgradeProperty('value');
      this._upgradeProperty('labelhidden');

      this.addEventListener('click', this._handleClick);
      
    }

    _handleClick() {
      this.checked = !this.checked;
    }

    _upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        let value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
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

    get value() {
      return this.value;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'checked') {
        const isChecked = newValue !== null;
        this.setAttribute('aria-checked', isChecked);
      }
    }

    disconnectedCallback() {
      this.removeEventListener('click');
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

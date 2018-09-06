(function(w, doc) {
  'use strict';

  let peToggleCounter = 0;

  class Toggle extends HTMLElement {
    static get observedAttributes() {
      return ['checked'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const currentDoc = doc.querySelector('link[href$="index.html"]').import,
        template = currentDoc.querySelector('#template'),
        clone = doc.importNode(template.content, true);

      this.button = clone.querySelector('button');
      this.label = clone.querySelector('label');

      this.shadowRoot.appendChild(clone);

      this._handleClick = this._handleClick.bind(this);
    }

    connectedCallback() {
      this._upgradeProperty('checked');
      this._upgradeProperty('labelhidden');
      
      this._setControlReference();
      this._renderLabel();

      this.button.addEventListener('click', this._handleClick);
      
    }

    _handleClick() {
      this.checked = !this.checked;
    }

    _setControlReference() {
      if (!this.id) {
        this.id = `pe-toggle-${peToggleCounter++}`;
      }
      this.button.id = this.id + '_button';
      this.label.id = this.id + '_label';

      this.button.setAttribute('aria-labelledby', this.label.id);
      this.label.setAttribute('for', this.button.id);
    }

    _renderLabel(){
      if (this.hasAttribute('labelhidden')) {
        this.label.classList.toggle('visuallyhidden');
      }

      if (this.hasAttribute('labelText')) {
        this.label.textContent = this.getAttribute('labelText');
      }
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

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'checked') {
        const isChecked = newValue !== null;
        this.button.setAttribute('aria-checked', isChecked);
      }
    }

    disconnectedCallback() {
      this.button.removeEventListener('click');
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

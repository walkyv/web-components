(function(w, doc) {
  'use strict';

  let peToggleCounter = 0;

  class Toggle extends HTMLElement {
    static get observedAttributes() {
      return ['checked', 'labelhidden'];
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

      this.handleClick = this.handleClick.bind(this);
      this._updateLabel = this._updateLabel.bind(this);
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
      if (name === 'labelhidden') {
        this.label.classList.toggle('visuallyhidden');
      }
    }

    handleClick() {
      this.checked = !this.checked;
    }

    connectedCallback() {
      this.button.addEventListener('click', this.handleClick);
      this._updateLabel();
    }
    _updateLabel() {
      if (!this.id) {
        this.id = `pe-toggle-${peToggleCounter++}`;
      }
      this.button.id = this.id + '_button';
      this.label.id = this.id + '_label';

      this.button.setAttribute('aria-labelledby', this.label.id);
      this.label.setAttribute('for', this.button.id);
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

(function(w, doc) {
  'use strict';

  // Any helper functions that do not need to be part of the class
  // can be declared here

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
      
      this.shadowRoot.appendChild(clone);
      
      this.handleClick = this.handleClick.bind(this);
    }

    get checked(){
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
      const isChecked = newValue !== null;
      
      this.button.setAttribute('aria-checked', isChecked);
    }

    handleClick(){
      this.checked = !this.checked;
    }

    connectedCallback() {
      this.button.addEventListener('click', this.handleClick);
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

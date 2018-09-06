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
    }

    connectedCallback() {
      const currentDoc = doc.querySelector('link[href$="index.html"]').import,
        template = currentDoc.querySelector('#template'),
        clone = doc.importNode(template.content, true);

      // Attach clone after all DOM updates are done
      this.shadowRoot.appendChild(clone);
    }
    get checked(){
      return this.shadowRoot.querySelector('button').hasAttribute('checked');
    }

    set checked(value) {
      if(value === true) {
        this.shadowRoot.querySelector('button').setAttribute('aria-checked', true);
      }
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

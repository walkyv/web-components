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
      this.handleClick = this.handleClick.bind(this);
    }

    get checked(){
      return this.shadowRoot.querySelector('button').getAttribute('aria-checked') === 'true';
    }

    set checked(value) {
      this.shadowRoot.querySelector('button').setAttribute('aria-checked', value);
    }

    handleClick(){
      this.checked = !this.checked;
    }

    connectedCallback() {
      const currentDoc = doc.querySelector('link[href$="index.html"]').import,
        template = currentDoc.querySelector('#template'),
        clone = doc.importNode(template.content, true);

      clone.querySelector('button').addEventListener('click', this.handleClick);

      // Attach clone after all DOM updates are done
      this.shadowRoot.appendChild(clone);
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);

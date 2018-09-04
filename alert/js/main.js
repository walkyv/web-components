(function(w, doc) {
  'use strict';
  class Example extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // shadow dom
      const currentDoc = document.querySelector('link[href$="index.html"]')
        .import;
      const template = currentDoc.querySelector('#template');
      const clone = document.importNode(template.content, true);

      this.shadowRoot.appendChild(clone);
    }
  }
  customElements.define('example-component', Example);
})(window, document);

(function(w, doc) {
  'use strict';

  // Any helper functions that do not need to be part of the class
  // can be declared here

  class Toggle extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const currentDoc = doc.querySelector('link[href$="index.html"]'),
        template = currentDoc.querySelector('#template'),
        clone = doc.importNode(template.content, true);


      // Attach clone after all DOM updates are done
      this.shadowRoot.appendChild(clone);
    }
  }
  customElements.define('pearson-toggle', Toggle);
})(window, document);

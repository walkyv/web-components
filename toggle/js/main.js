(function(w, doc) {
  'use strict';

  // Any helper functions that do not need to be part of the class
  // can be declared here

  class Example extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const currentDoc = doc.querySelector('link[href$="index.html"]'),
        template = currentDoc.querySelector('#template'),
        clone = doc.importNode(template.content, true);

      // Get attributes set on component
      const titleText = this.getAttribute('title');

      // find relevant DOM nodes
      const titleContainer = clone.getElementById('titleText');

      titleContainer.innerHTML = titleText;

      // Attach clone after all DOM updates are done
      this.shadowRoot.appendChild(clone);
    }
  }
  customElements.define('example-component', Example);
})(window, document);

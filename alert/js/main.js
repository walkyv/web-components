(function(w, doc) {
  'use strict';

  const currentDoc = document.querySelector('link[href$="index.html"]').import;
  const template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'example-component');

  class Example extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = document.importNode(template.content.cloneNode(true), true);

      this.shadowRoot.appendChild(clone);
    }
  }
  customElements.define('example-component', Example);
})(window, document);

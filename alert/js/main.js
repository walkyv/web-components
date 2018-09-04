(function(w, doc) {
  'use strict';
  class Example extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      // shadow dom
      const shadow = this.attachShadow({
          mode: 'open'
        }),
        currentDoc = document.querySelector('link[href$="index.html"]').import;
      let template = currentDoc.querySelector('#template');
      const clone = document.importNode(template.content, true);

      shadow.appendChild(clone);
      // set attributes

      const titleText = this.getAttribute('title'),
        titleContainer = shadow.getElementById('titleText');

      titleContainer.innerHTML = titleText;
    }
  }
  customElements.define('example-component', Example);
})(window, document);

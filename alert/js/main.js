(function(w, doc) {
  'use strict';

  const currentDoc = doc.querySelector('link[href$="index.html"]').import;
  const template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  class Alert extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      this.closeBtn = clone.querySelector('button[data-action="close-alert"]');

      this.shadowRoot.appendChild(clone);

      this.close = this.close.bind(this);
    }

    connectedCallback(){
      this.closeBtn.addEventListener('click', this.close);
    }

    disconnectedCallback(){
      this.closeBtn.removeEventListener('click', this.close);
    }

    close() {
      this.remove();
    }
  }


  customElements.define('pearson-alert', Alert);
})(window, document);

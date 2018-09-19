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

      this.alert = clone.querySelector('#peAlert');
      this.contentContainer = clone.querySelector('#contentContainer');
      this.content = clone.querySelector('#content');
      this.closeBtn = clone.querySelector('button[data-action="close-alert"]');

      this.shadowRoot.appendChild(clone);

      this.close = this.close.bind(this);
    }

    connectedCallback() {
      
      if (this.isAnimated) {
        this.alert.classList.toggle('animated');
      }

      if (this.severity === 'error') {
        this.contentContainer.setAttribute('role', 'alert');
        this.contentContainer.setAttribute('aria-live', 'assertive');
      } else {
        this.contentContainer.setAttribute('role', 'status');
        this.contentContainer.setAttribute('aria-live', 'polite');
      }

      this.alert.classList.add('alert-' + this.type);

      if (this.type === 'global') {
        this.alert.classList.add('slideInDown');
      }
      if (this.type === 'inline') {
        this.alert.classList.add('fadeIn');
      }

      this.content.setAttribute('aria-hidden', 'false');
      this.closeBtn.addEventListener('click', this.close);
      
      if (this.severity === 'important') {
        setTimeout(() => {
          this.closeBtn.focus();
        }, 10);
      }
    }

    disconnectedCallback() {
      const returnNode = this._findReturnNode();

      this.closeBtn.removeEventListener('click', this.close);
      returnNode.focus();
    }

    close() {
      if (this.type === 'global') {
        this.alert.classList.add('slideOutDown');
      }
      if (this.type === 'inline') {
        this.alert.classList.add('fadeOut');
      }
      setTimeout(() => {
        this.remove();
      }, 200);
    }

    _findReturnNode(){
      return doc.querySelector(this.getAttribute('returnNode'));
    }

    get isAnimated() {
      return this.hasAttribute('animated');
    }

    get type() {
      return this.getAttribute('type');
    }

    get severity() {
      return this.getAttribute('severity');
    }
  }

  customElements.define('pearson-alert', Alert);
})(window, document);

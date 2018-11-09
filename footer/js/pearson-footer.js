'use strict';

class Footer extends HTMLElement {
  static get observedAttributes() {
    return ['type'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const currentDoc = document.querySelector('link[href$="footer.html"]').import;
    const template = currentDoc.querySelector('#template');
    const clone = document.importNode(template.content, true);

    this._renderFooter(clone);
  }

  _renderFooter(parentNode){
    let nobranding = true,
        footerLinks, textNode,
        liNode = document.createElement("LI"),
        aNode = document.createElement("A");

    const urlArray = this.getAttribute('url').split(','),
          textArray = this.getAttribute('text').split(',');
    const arrayLength = urlArray.length<textArray.length?urlArray.length:textArray.length;

    const footerBody = parentNode.querySelector('.pe-footer'); 

    if (this.hasAttribute('type')) {
      const footerType = this.getAttribute('type');  

      switch(footerType) {
        case 'glp':
          footerBody.classList.add('pe-footer--glp');
          break;
        case 'lightText':
          footerBody.classList.add('pe-footer--light');
          break;
        case 'branding':
          nobranding = false;
          break;
        default:
          return;
      }
    }

    const currentDoc = document.querySelector('link[href$="footer.html"]').import;
    const selector = nobranding?'#noBranding':'withBranding';
    const innerTemplate = currentDoc.querySelector(selector);
    footerBody.appendChild(innerTemplate);

    footerLinks = footerBody.querySelector('ul');
    aNode.setAttribute('target', '_blank');
    for (let i = 0; i < arrayLength; i ++) {
      textNode = document.createTextNode(textArray[i]);
      aNode.appendChild(textNode);
      aNode.setAttribute('href', urlArray[i]);
      liNode.appendChild(aNode);
      footerLinks.appendChild(liNode);
    }
  }
}

customElements.define('pearson-footer', Footer);
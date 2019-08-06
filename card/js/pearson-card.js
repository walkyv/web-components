(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template'),
    modular = doc.createElement('template'),
    stacked = doc.createElement('template');

  template.innerHTML = ` 
    <style>
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}pearson-alert{font-size:16px;max-width:580px}pearson-alert .alert-title{font-size:14px;margin:0;display:inline;top:0}pearson-uploader .alert-title{top:0!important}pearson-alert .alert-text{margin:0;display:inline}pearson-footer{left:50%;margin-left:-50%;right:50%;margin-right:-50%}pearson-tabs{font-size:14px}pearson-progress-bar{grid-column:1/5}@media (min-width:591px){pearson-progress-bar{grid-column:1/9}}@media (min-width:887px){pearson-progress-bar{grid-column:1/13}}pearson-tabs{grid-column:1/5}@media (min-width:591px){pearson-tabs{grid-column:1/9}}@media (min-width:887px){pearson-tabs{grid-column:1/13}}pearson-cards{grid-column:span 4}@media (min-width:887px){pearson-cards{grid-column:span 3}}pearson-cards.stacked{grid-column-start:1;grid-column-end:13}.card-container{width:100%;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);grid-column:span 4}@media (min-width:887px){.card-container{grid-column:span 3}}.card-container.stacked{grid-column-start:1;grid-column-end:13}.card{border-radius:4px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);background:#fff;padding:16px}
		</style>
		<div class="card-container">
			<div class="card">
			    <slot></slot>
			</div>
		</div>  
`;
  modular.innerHTML = `
    <style>
    :host {
      grid-column: span 4;
    }
    @media(min-width:887px) {
      :host {
        grid-column: span 3;
      }
    }
    </style>
  `;

  stacked.innerHTML = `
    <style>
    :host {
      grid-column-start: 1;
      grid-column-end: 13
    }
    </style>
  `;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-card');
  class Card extends HTMLElement {
    static get observedAttributes() {
      return ['stacked'];
    }

    get isStacked() {
      return (
        this.hasAttribute('stacked') && this.getAttribute('stacked') !== 'false'
      );
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.shadowRoot.appendChild(clone);
    }
    connectedCallback() {
      if (!this.isStacked) {
        const modularLayout = modular.content.cloneNode(true);
        this.shadowRoot.appendChild(modularLayout);
      }
    }

    attributeChangedCallback() {
      if (this.isStacked) {
        const stackedLayout = stacked.content.cloneNode(true);
        this.shadowRoot.appendChild(stackedLayout);
      } else {
        const modularLayout = modular.content.cloneNode(true);
        this.shadowRoot.appendChild(modularLayout);
      }
    }
  }
  customElements.define('pearson-card', Card);
})(window, document);

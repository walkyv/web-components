(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template'),
    modular = doc.createElement('template'),
    stacked = doc.createElement('template');

  template.innerHTML = ` 
    <style>
:host{
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host template{display:none}:host [hidden]{display:none}:host pearson-alert{font-size:16px;max-width:580px}:host pearson-alert .alert-title{font-size:14px;margin:0;display:inline;top:0}:host pearson-uploader .alert-title{top:0!important}:host pearson-alert .alert-text{margin:0;display:inline}:host pearson-footer{left:50%;margin-left:-50%;right:50%;margin-right:-50%}:host pearson-tabs{font-size:14px}:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1/5}@media (min-width:591px){:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:8;grid-column:1/9}}@media (min-width:887px){:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:12;grid-column:1/13}}:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1/5}@media (min-width:591px){:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:8;grid-column:1/9}}@media (min-width:887px){:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:12;grid-column:1/13}}:host pearson-cards{-ms-grid-column-span:4;grid-column:span 4}@media (min-width:887px){:host pearson-cards{-ms-grid-column-span:3;grid-column:span 3}}:host pearson-cards.stacked{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}:host .card-container{width:100%;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);-ms-grid-column-span:4;grid-column:span 4}@media (min-width:887px){:host .card-container{-ms-grid-column-span:3;grid-column:span 3}}:host .card-container.stacked{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}:host .card{border-radius:4px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);background:#fff;padding:16px}
		</style>
		<div class="card-container">
			<div class="card">
			    <slot></slot>
			</div>
		</div>  
`;
  modular.innerHTML = `
    <style>
        :host{display: -ms-grid; -ms-grid-column-span:4;grid-column:span 4}@media (min-width:887px){:host{-ms-grid-column-span:3;grid-column:span 3}}
    </style>
  `;

  stacked.innerHTML = `
    <style>
        :host{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}
    </style>
  `;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-card');
  class Card extends HTMLElement {
    static get observedAttributes() {
      return ['stacked'];
    }

    get isStacked () {
      return this.hasAttribute('stacked');
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
        this.shadowRoot.appendChild(modularLayout)
      }
    }

    attributeChangedCallback() {
      if (this.isStacked) {
        const stackedLayout = stacked.content.cloneNode(true);
        this.shadowRoot.appendChild(stackedLayout)
      } else {
        const modularLayout = modular.content.cloneNode(true);
        this.shadowRoot.appendChild(modularLayout)
      }
    }
  }
  customElements.define('pearson-card', Card);
})(window, document);

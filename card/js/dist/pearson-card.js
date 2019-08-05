var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      modular = doc.createElement('template'),
      stacked = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host template{display:none}:host [hidden]{display:none}:host pearson-alert{font-size:16px;max-width:580px}:host pearson-alert .alert-title{font-size:14px;margin:0;display:inline;top:0}:host pearson-uploader .alert-title{top:0!important}:host pearson-alert .alert-text{margin:0;display:inline}:host pearson-footer{left:50%;margin-left:-50%;right:50%;margin-right:-50%}:host pearson-tabs{font-size:14px}:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1/5}@media (min-width:591px){:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:8;grid-column:1/9}}@media (min-width:887px){:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:12;grid-column:1/13}}:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1/5}@media (min-width:591px){:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:8;grid-column:1/9}}@media (min-width:887px){:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:12;grid-column:1/13}}:host pearson-cards{-ms-grid-column-span:4;grid-column:span 4}@media (min-width:887px){:host pearson-cards{-ms-grid-column-span:3;grid-column:span 3}}:host pearson-cards.stacked{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}:host .card-container{width:100%;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);-ms-grid-column-span:4;grid-column:span 4}@media (min-width:887px){:host .card-container{-ms-grid-column-span:3;grid-column:span 3}}:host .card-container.stacked{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}:host .card{border-radius:4px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);background:#fff;padding:16px}\n\t\t</style>\n\t\t<div class="card-container">\n\t\t\t<div class="card">\n\t\t\t    <slot></slot>\n\t\t\t</div>\n\t\t</div>  \n';
  modular.innerHTML = '\n    <style>\n        :host{display: -ms-grid; -ms-grid-column-span:4;grid-column:span 4}@media (min-width:887px){:host{-ms-grid-column-span:3;grid-column:span 3}}\n    </style>\n  ';

  stacked.innerHTML = '\n    <style>\n        :host{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}\n    </style>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-card');

  var Card = function (_HTMLElement) {
    _inherits(Card, _HTMLElement);

    _createClass(Card, [{
      key: 'isStacked',
      get: function get() {
        return this.hasAttribute('stacked');
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['stacked'];
      }
    }]);

    function Card() {
      _classCallCheck(this, Card);

      var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);
      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(Card, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.isStacked) {
          var modularLayout = modular.content.cloneNode(true);
          this.shadowRoot.appendChild(modularLayout);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback() {
        if (this.isStacked) {
          var stackedLayout = stacked.content.cloneNode(true);
          this.shadowRoot.appendChild(stackedLayout);
        } else {
          var modularLayout = modular.content.cloneNode(true);
          this.shadowRoot.appendChild(modularLayout);
        }
      }
    }]);

    return Card;
  }(HTMLElement);

  customElements.define('pearson-card', Card);
})(window, document);
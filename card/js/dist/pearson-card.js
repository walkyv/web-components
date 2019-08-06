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

  template.innerHTML = ' \n    <style>\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}pearson-alert{font-size:16px;max-width:580px}pearson-alert .alert-title{font-size:14px;margin:0;display:inline;top:0}pearson-uploader .alert-title{top:0!important}pearson-alert .alert-text{margin:0;display:inline}pearson-footer{left:50%;margin-left:-50%;right:50%;margin-right:-50%}pearson-tabs{font-size:14px}pearson-progress-bar{grid-column:1/5}@media (min-width:591px){pearson-progress-bar{grid-column:1/9}}@media (min-width:887px){pearson-progress-bar{grid-column:1/13}}pearson-tabs{grid-column:1/5}@media (min-width:591px){pearson-tabs{grid-column:1/9}}@media (min-width:887px){pearson-tabs{grid-column:1/13}}pearson-cards{grid-column:span 4}@media (min-width:887px){pearson-cards{grid-column:span 3}}pearson-cards.stacked{grid-column-start:1;grid-column-end:13}.card-container{width:100%;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);grid-column:span 4}@media (min-width:887px){.card-container{grid-column:span 3}}.card-container.stacked{grid-column-start:1;grid-column-end:13}.card{border-radius:4px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);background:#fff;padding:16px}\n\t\t</style>\n\t\t<div class="card-container">\n\t\t\t<div class="card">\n\t\t\t    <slot></slot>\n\t\t\t</div>\n\t\t</div>  \n';
  modular.innerHTML = '\n    <style>\n    :host {\n      grid-column: span 4;\n    }\n    @media(min-width:887px) {\n      :host {\n        grid-column: span 3;\n      }\n    }\n    </style>\n  ';

  stacked.innerHTML = '\n    <style>\n    :host {\n      grid-column-start: 1;\n      grid-column-end: 13\n    }\n    </style>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-card');

  var Card = function (_HTMLElement) {
    _inherits(Card, _HTMLElement);

    _createClass(Card, [{
      key: 'isStacked',
      get: function get() {
        return this.hasAttribute('stacked') && this.getAttribute('stacked') !== 'false';
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
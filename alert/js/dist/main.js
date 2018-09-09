'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var currentDoc = document.querySelector('link[href$="index.html"]').import;
  var template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'example-component');

  var Example = function (_HTMLElement) {
    _inherits(Example, _HTMLElement);

    function Example() {
      _classCallCheck(this, Example);

      var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = document.importNode(template.content.cloneNode(true), true);

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    return Example;
  }(HTMLElement);

  customElements.define('example-component', Example);
})(window, document);
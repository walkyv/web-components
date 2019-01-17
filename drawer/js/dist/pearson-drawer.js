var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  var ICONS_REMOVE_SM_24 = '\n    <svg\n      class="pe-icon--remove-sm-24"\n      aria-hidden="true"\n      focusable="false"\n      style="width:24px;height:24px;"\n    >\n      <path d="M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z"/>\n    </svg>\n  ';

  // Other markup should be written after the closing tag.

  template.innerHTML = ' \n    <style>\n.drawer{visibility:hidden;position:fixed;top:0;bottom:0;right:-320px;width:320px;border:1px solid #d9d9d9;-webkit-box-shadow:0 0 5px 0 #c7c7c7;box-shadow:0 0 5px 0 #c7c7c7;overflow-y:scroll;-webkit-overflow-scrolling:touch}.drawer.open{visibility:visible;right:0}.panel{display:none}.panel.active{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.drawer-header,.panel.active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.drawer-header{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:25px 15px 20px 30px}.drawer-header:focus{outline:none}.drawer-header .pe-title{margin-bottom:0}.divider{margin:0 20px;border-bottom:1px solid #d9d9d9;height:1px}.drawer-content{padding:25px 30px 30px;position:relative;height:100%}.drawer-content:focus{outline:none}.drawer-content button{color:inherit;cursor:pointer;text-align:left;background:none;padding:0;border:0;position:relative}.drawer-content button.pe-link--btn{text-decoration:none}.drawer-content dd{margin-left:0;margin-bottom:25px}.panel button>*{pointer-events:none}.panel button.back{border:0;cursor:pointer;background:none;height:25px;width:44px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:auto}.panel button.back svg{margin-right:.5em}.panel button.back h3{margin:0}.panel button.close{position:absolute;top:15px;right:15px;border:0;cursor:pointer;background:none;height:44px;width:44px}.pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}svg:not(:root){overflow:hidden}@-webkit-keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@-webkit-keyframes slideOutRight{0%{right:0}to{right:-320px;visibility:hidden}}@keyframes slideOutRight{0%{right:0}to{right:-320px;visibility:hidden}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}.animated{-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}\n    </style>\n    <slot></slot>\n    <button\n      type="button"\n      class="pe-icon--btn close"\n      data-action="close"\n      aria-label="Close Help Topics"\n    >\n    ' + ICONS_REMOVE_SM_24 + '\n    </button>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-drawer');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Drawer = function (_HTMLElement) {
    _inherits(Drawer, _HTMLElement);

    function Drawer() {
      _classCallCheck(this, Drawer);

      var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.shadowRoot.appendChild(clone);

      return _this;
    }

    _createClass(Drawer, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        /** Any changes to what the component renders should be done here. */

      }
    }, {
      key: 'diconnectedCallback',
      value: function diconnectedCallback() {}
    }]);

    return Drawer;
  }(HTMLElement);

  customElements.define('pearson-drawer', Drawer);
})(window, document);
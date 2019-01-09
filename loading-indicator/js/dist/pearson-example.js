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

  // Other markup should be written after the closing tag.

  template.innerHTML = ' \n    <style>\n    @-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}@keyframes fadein{0%{opacity:0}to{opacity:1}}.pe-loadingSpinner{width:25px;height:25px;position:relative}.pe-loadingSpinner-container1>div,.pe-loadingSpinner-container2>div{width:4px;height:4px;background-color:#19a6a4;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.6s ease-in-out infinite;animation:bouncedelay 1.6s ease-in-out infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.pe-loadingSpinner .pe-loadingSpinner-container{position:absolute;width:100%;height:100%}.pe-loadingSpinner-container2{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.pe-loadingSpinner-container2 .circle1{-webkit-animation-delay:-1.4s;animation-delay:-1.4s}.pe-loadingSpinner-container1 .circle2{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.pe-loadingSpinner-container2 .circle2{-webkit-animation-delay:-1s;animation-delay:-1s}.pe-loadingSpinner-container1 .circle3{-webkit-animation-delay:-.8s;animation-delay:-.8s}.pe-loadingSpinner-container2 .circle3{-webkit-animation-delay:-.6s;animation-delay:-.6s}.pe-loadingSpinner-container1 .circle4{-webkit-animation-delay:-.4s;animation-delay:-.4s}.pe-loadingSpinner-container2 .circle4{-webkit-animation-delay:-.2s;animation-delay:-.2s}.loading-indicator-wrapper{border-radius:5px;margin:auto;width:200px;padding:30px 20px 20px;background-color:#252525;border:1px solid #252525}.loading-indicator{color:#fff;margin:auto;width:50%;background-color:#252525}.loading-text{padding-left:30px;display:block;margin:auto;width:50%;position:relative;top:-20px}#loaded-content main{-webkit-animation:fadein 2s;animation:fadein 2s}\n    </style>\n    <div class="loading-indicator-wrapper" id="spinner-icon" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading Indicator" aria-label="Loading">\n\t\t\t<div class="loading-indicator">\n\t\t\t\t<div class="pe-loadingSpinner">\n\t\t\t\t\t<div class="pe-loadingSpinner-container pe-loadingSpinner-container1">\n\t\t\t\t\t\t<div class="circle1"></div>\n\t\t\t\t\t\t<div class="circle2"></div>\n\t\t\t\t\t\t<div class="circle3"></div>\n\t\t\t\t\t\t<div class="circle4"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="pe-loadingSpinner-container pe-loadingSpinner-container2">\n\t\t\t\t\t\t<div class="circle1"></div>\n\t\t\t\t\t\t<div class="circle2"></div>\n\t\t\t\t\t\t<div class="circle3"></div>\n\t\t\t\t\t\t<div class="circle4"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<span class="loading-text" id="loading-text">Loading...</span>\n\t\t\t</div>\n\t\t</div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-example');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Example = function (_HTMLElement) {
    _inherits(Example, _HTMLElement);

    function Example() {
      _classCallCheck(this, Example);

      var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      /** If we need references to the children of the component,
       * we can create them here. If they are created elsewhere,
       * they will not be available our lifecycle methods.
       */

      _this.heading = clone.querySelector('#title');
      _this.button = clone.querySelector('#button');

      /** After all this, we can append our clone to the shadowRoot */
      _this.shadowRoot.appendChild(clone);

      /** We should also bind any event listeners to `this` so their
       * references do not get lost.
       */
      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
    }

    _createClass(Example, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        /** Any changes to what the component renders should be done here. */

        // Get the attributes set by the consumer
        var titleText = this.getAttribute('title');
        var buttonText = this.getAttribute('buttonText');

        this.heading.textContent = titleText;
        this.button.textContent = buttonText;

        /** Event listeners should also be bound here. */
        this.button.addEventListener('click', this.handleClick);
      }
    }, {
      key: 'diconnectedCallback',
      value: function diconnectedCallback() {
        this.button.removeEventListener('click', this.handleClick);
      }
    }, {
      key: 'handleClick',
      value: function handleClick() {
        this.shadowRoot.appendChild(doc.createTextNode('Shadow button clicked!'));
      }
    }]);

    return Example;
  }(HTMLElement);

  customElements.define('pearson-example', Example);
})(window, document);
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

  template.innerHTML = ' \n    <style>\n    .pe-tabbed-navigation{position:relative;height:41px}.pe-tabbed-navigation.light{background:#f5f5f5;border-bottom:1px solid #e9e9e9}.pe-tabbed-navigation.dark{background:#005a70;border-bottom:1px solid #005a70}.pe-tabbed-navigation .tab-action{background:none;border:0;border-bottom:3px solid transparent}.pe-tabbed-navigation ul.tab-list{padding:0;margin:0}.pe-tabbed-navigation ul.tab-list>li{list-style-type:none;display:inline-block}.pe-tabbed-navigation li.tab-item.active .tab-action{border-bottom:3px solid transparent;color:#252525}.pe-tabbed-navigation li.tab-item:hover:not(.active) .tab-action,.pe-tabbed-navigation li.tab-item:hover:not(li) .tab-action{border-bottom:3px solid #c7c7c7;color:#252525}.pe-tabbed-navigation .tab-action{padding:.5em 0;margin:.5em 1em;text-decoration:none;cursor:pointer;display:block;color:#6a7070}.pe-tabbed-navigation div{padding:.5em 0;margin:.5em 1em}.pe-tabbed-navigation div button{color:#6a7070}.pe-tabbed-navigation.dark{background-color:#005a70}.pe-tabbed-navigation.dark .tab-action{color:#d9d9d9}.pe-tabbed-navigation.dark li.tab-item.active .tab-action{color:#fff}.pe-tabbed-navigation.dark li.tab-item:hover:not(.active) .tab-action{border-bottom:3px solid #d9d9d9;color:#fff}.pe-tabbed-navigation.dark div button{color:#d9d9d9}.pe-tabbed-navigation .tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:.5em 1em;bottom:-8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.pe-tab-panels{padding:1em}.hidden{display:none}\n    </style>\n    <slot name="tabs"></slot>\n    <slot name="panels"></slot>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Tabs = function (_HTMLElement) {
    _inherits(Tabs, _HTMLElement);

    function Tabs() {
      _classCallCheck(this, Tabs);

      var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

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

    _createClass(Tabs, [{
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

    return Tabs;
  }(HTMLElement);

  customElements.define('pearson-tabs', Tabs);
})(window, document);
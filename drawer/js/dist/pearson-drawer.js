var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

  var ICONS_CHEVRON_BACK_18 = '\n    <svg\n      class="pe-icon--chevron-back-18"\n      aria-hidden="true"\n      focusable="false"\n      style="width:18px;height:18px;"\n    >\n      <path\n        d="M13.749,17.6606035 C14.112,17.2486035 14.076,16.6116035 13.662,16.2436035 L5.509,8.9996035 L13.662,1.7566035 C14.077,1.3896035 14.113,0.752603504 13.749,0.339603504 C13.383,-0.0763964961 12.751,-0.115396496 12.338,0.252603504 L3.338,8.2476035 C3.123,8.4376035 3,8.7126035 3,8.9996035 C3,9.2876035 3.123,9.5616035 3.338,9.7526035 L12.338,17.7476035 C12.751,18.1156035 13.383,18.0766035 13.749,17.6606035"\n      />\n    </svg>\n  ';

  var ICONS_REMOVE_SM_24 = '\n    <svg\n      class="pe-icon--remove-sm-24"\n      aria-hidden="true"\n      focusable="false"\n      style="width:24px;height:24px;"\n    >\n      <path d="M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z"/>\n    </svg>\n  ';

  // Other markup should be written after the closing tag.

  template.innerHTML = ' \n    <style>\n:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;color:#252525;visibility:hidden;position:fixed;padding:25px 20px 20px;top:0;bottom:0;right:-320px;width:320px;border:1px solid #d9d9d9;-webkit-box-shadow:0 0 5px 0 #c7c7c7;box-shadow:0 0 5px 0 #c7c7c7;overflow-y:scroll}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host([open]){visibility:visible;right:0}:host button.close{position:absolute;top:15px;right:15px;border:0;cursor:pointer;background:none;height:44px;width:44px}::slotted(.title){margin:0 0 20px}::slotted(.title:focus){-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.panel.active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.content,.header{padding-left:10px;padding-right:10px}.header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #d9d9d9}.content{position:relative;height:100%;margin-top:25px}.content dd{margin-left:0;margin-bottom:25px}.panel{display:none}.panel button>*{pointer-events:none}.panel button.back{border:0;cursor:pointer;background:none;height:25px;width:44px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:auto}.panel button.back svg{margin-right:.5em}.panel button.back h3{margin:0}.pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.pe-icon--btn:focus{outline:0}.pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-4px;left:-4px;z-index:1}svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:#6a7070}svg:not(:root){overflow:hidden}@-webkit-keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@-webkit-keyframes slideOutRight{0%{right:0}to{right:-320px;visibility:hidden}}@keyframes slideOutRight{0%{right:0}to{right:-320px;visibility:hidden}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}.animated{-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}\n    </style>\n    <div class="header">\n      <slot name="title"></slot>\n    </div>\n    <div class="content">\n      <slot name="content"></slot>\n    </div>\n    <button\n      type="button"\n      class="pe-icon--btn close"\n      data-action="close"\n      aria-label=""\n    >\n      ' + ICONS_REMOVE_SM_24 + '\n    </button>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-drawer');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Drawer = function (_HTMLElement) {
    _inherits(Drawer, _HTMLElement);

    _createClass(Drawer, [{
      key: 'open',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(newValue) {
        var isOpen = Boolean(newValue);

        if (isOpen) {
          this.setAttribute('open', '');
        } else {
          this.removeAttribute('open');
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open'];
      }
    }]);

    function Drawer() {
      _classCallCheck(this, Drawer);

      var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.closeBtn = clone.querySelector('button[data-action="close"]');

      _this.shadowRoot.appendChild(clone);

      // TODO: find trigger using provided title of drawer
      _this.trigger = doc.querySelector('button');

      _this.decorateTitle = _this.decorateTitle.bind(_this);
      _this.bindWindowClick = _this.bindWindowClick.bind(_this);
      return _this;
    }

    _createClass(Drawer, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var isOpen = newValue !== null;
        // TODO: Logic for adding, removing animation classes
        // (focus will happen here if not animated)
        if (isOpen && this.titleNode) {
          this.titleNode.focus();
        } else {
          this.trigger.focus();
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var _shadowRoot$querySele = this.shadowRoot.querySelectorAll('slot'),
            _shadowRoot$querySele2 = _slicedToArray(_shadowRoot$querySele, 2),
            titleSlot = _shadowRoot$querySele2[0],
            contentSlot = _shadowRoot$querySele2[1];

        titleSlot.addEventListener('slotchange', this.decorateTitle);

        this.closeBtn.addEventListener('click', function () {
          return _this2.open = false;
        });

        w.addEventListener('click', this.bindWindowClick, true);
      }
    }, {
      key: 'diconnectedCallback',
      value: function diconnectedCallback() {
        w.removeEventListener(this.bindWindowClick);
      }

      /**
       * Decorates the title of the drawer with tabindex.
       * @param {Event} e An Event object
       */

    }, {
      key: 'decorateTitle',
      value: function decorateTitle(e) {
        this.titleNode = e.target.assignedNodes()[0];

        this.titleNode.setAttribute('tabindex', '-1');
        this.closeBtn.setAttribute('aria-label', 'Close ' + this.titleNode.textContent.trim());
      }
    }, {
      key: 'bindWindowClick',
      value: function bindWindowClick(e) {
        if (e.target === this || this.contains(e.target)) return;

        if (this.open) {
          this.open = false;
        }
      }
    }]);

    return Drawer;
  }(HTMLElement);

  customElements.define('pearson-drawer', Drawer);
})(window, document);
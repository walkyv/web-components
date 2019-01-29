var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n    :host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.tabs-wrapper{position:relative;height:41px}.tabs,ul{list-style-type:none;padding:0;margin:0}.tab,li{display:inline-block}.tab-button{color:#6a7070;cursor:pointer;display:block;margin:.5em 1em;padding:.5em 0;text-decoration:none;background:none;border:0;border-bottom:3px solid transparent}.tab-button.active{color:#252525}.tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:.5em 1em;bottom:-8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.pe-tab-panels{padding:1em}.hidden{display:none}.pe-label{font-size:1rem;line-height:1.28571rem}\n    </style>\n    <div id="tabs-wrapper" class="tabs-wrapper">\n      <slot name="tabs"></slot>\n      <div id="slider" class="tab-slider"></div>\n    </div>\n    <slot name="panels"></slot>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  /**
   * Get position and size data of an element.
   * @param {HTMLEkement} el An element whose coordinates we want to get.
   */
  function getPosition(el) {
    return el.getBoundingClientRect();
  }

  var Tabs = function (_HTMLElement) {
    _inherits(Tabs, _HTMLElement);

    _createClass(Tabs, [{
      key: 'activeIdx',
      get: function get() {
        return parseInt(this.getAttribute('activeIdx'), 10);
      },
      set: function set(idx) {
        return this.setAttribute('activeIdx', idx);
      }
    }, {
      key: 'activeTab',
      get: function get() {
        return this.tabs[this.activeIdx];
      }
    }], [{
      key: 'observedattributes',
      get: function get() {
        return ['activeidx', 'activeIdx'];
      }
    }]);

    function Tabs() {
      _classCallCheck(this, Tabs);

      var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.tabsWrapper = clone.querySelector('#tabs-wrapper');
      _this.slider = clone.querySelector('#slider');

      _this.shadowRoot.appendChild(clone);

      _this.decorateTabs = _this.decorateTabs.bind(_this);

      _this.onTabSlotChange = _this.onTabSlotChange.bind(_this);
      _this.onPanelSlotChange = _this.onPanelSlotChange.bind(_this);
      return _this;
    }

    _createClass(Tabs, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _shadowRoot$querySele = this.shadowRoot.querySelectorAll('slot'),
            _shadowRoot$querySele2 = _slicedToArray(_shadowRoot$querySele, 2),
            tabSlot = _shadowRoot$querySele2[0],
            panelSlot = _shadowRoot$querySele2[1];

        if (!this.hasAttribute('activeIdx')) {
          this.setAttribute('activeIdx', '0');
        }

        tabSlot.addEventListener('slotchange', this.onTabSlotChange);
        panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
      }
    }, {
      key: 'diconnectedCallback',
      value: function diconnectedCallback() {}
    }, {
      key: 'decorateTabs',
      value: function decorateTabs(child, idx) {
        var textContent = child.textContent;


        var classList = 'pe-label tab-button';

        if (idx === this.activeIdx) {
          classList += ' active';
        }

        child.role = 'none';
        child.innerHTML = '\n        <button\n          id="tab-' + idx + '-btn"\n          class="' + classList + '"\n          role="tab"\n          tabindex="-1"\n          aria-selected="false"\n          aria-controls="tab-' + idx + '" \n          data-tab="' + idx + '"\n        >\n        ' + textContent + '\n        </button>\n      ';
      }
    }, {
      key: 'positionSlider',
      value: function positionSlider() {
        console.log(this.activeTab);
      }
    }, {
      key: 'onTabSlotChange',
      value: function onTabSlotChange(e) {
        this.tabList = e.target.assignedNodes()[0];
        if (!this.tabList) return;

        Array.prototype.forEach.call(this.tabList.children, this.decorateTabs);

        this.tabs = this.tabList.children;

        this.tabsWrapper.insertBefore(this.tabList, this.slider);
        this.positionSlider();

        e.target.remove();
      }
    }, {
      key: 'onPanelSlotChange',
      value: function onPanelSlotChange(e) {
        this.panels = e.target.assignedNodes()[1];
      }
    }]);

    return Tabs;
  }(HTMLElement);

  customElements.define('pearson-tabs', Tabs);
})(window, document);
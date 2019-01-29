var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n    :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(.panels){padding:1em}.tabs-wrapper{position:relative;height:41px}.tabs,ul{list-style-type:none;padding:0;margin:0}.tab,li{display:inline-block}.tab-button{color:#6a7070;cursor:pointer;display:block;margin:.5em 1em;padding:.5em 0;text-decoration:none;background:none;border:0;border-bottom:3px solid transparent}.tab-button.active{color:#252525}.tab-button:not(.active):hover{color:#252525;border-bottom-color:#c7c7c7}.tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:.5em 1em;bottom:-8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.hidden{display:none}.pe-label{font-size:1rem;line-height:1.28571rem}\n    </style>\n    <div id="tabs-wrapper" class="tabs-wrapper">\n      <slot name="tabs"></slot>\n      <div id="slider" class="tab-slider"></div>\n    </div>\n    <slot name="panels"></slot>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  var forEach = Array.prototype.forEach;
  var indexOf = Array.prototype.indexOf;

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
    }, {
      key: 'activePanel',
      get: function get() {
        return this.panels[this.activeIdx];
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['activeidx', 'activeIdx'];
      }
    }]);

    function Tabs() {
      _classCallCheck(this, Tabs);

      var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      // These are both assigned in a slotChange
      _this.tabList = null;
      _this.tabs = null;
      _this.panels = null;

      _this.tabsWrapper = clone.querySelector('#tabs-wrapper');
      _this.slider = clone.querySelector('#slider');

      _this.shadowRoot.appendChild(clone);

      _this.onTabSlotChange = _this.onTabSlotChange.bind(_this);
      _this.onPanelSlotChange = _this.onPanelSlotChange.bind(_this);

      // TODO: make named listener
      _this.shadowRoot.addEventListener('click', function (e) {
        if (!e.target.matches('button[id^="tab"]')) return;

        _this.activeIdx = indexOf.call(_this.tabs, e.target);
      });

      // TODO: make named listener
      _this.shadowRoot.addEventListener('keydown', function (e) {
        if (!e.target.matches('button[id^="tab"]')) return;

        var idxMap = {
          ArrowLeft: _this.activeIdx - 1,
          ArrowRight: _this.activeIdx + 1
        };

        var nextIdx = e.key in idxMap ? idxMap[e.key] : null;

        if (_this.tabs[nextIdx]) {
          e.preventDefault();
          _this.activeIdx = nextIdx;
        }
      }, true);
      return _this;
    }

    _createClass(Tabs, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (!this.tabs || !this.panels) return;

        if (name === 'activeIdx' || name === 'activeidx') {
          this.positionSlider();
          this.setActiveTab();
        }
      }
    }, {
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
      key: 'initTabs',
      value: function initTabs() {
        var _this2 = this;

        forEach.call(this.tabList.children, function (child, idx) {
          var textContent = child.textContent;


          var classList = 'pe-label tab-button';
          var ariaSelected = '';

          if (idx === _this2.activeIdx) {
            classList += ' active';
            ariaSelected = 'aria-selected';
          }

          child.role = 'none';
          child.innerHTML = '\n          <button\n            id="tab-' + idx + '-btn"\n            class="' + classList + '"\n            role="tab"\n            tabindex="-1"\n            aria-controls="panel-' + idx + '" \n            ' + ariaSelected + '\n          >\n          ' + textContent + '\n          </button>\n        ';
        });
      }
    }, {
      key: 'setActiveTab',
      value: function setActiveTab() {
        var _this3 = this;

        forEach.call(this.tabs, function (tab, idx) {
          var panel = _this3.panels[idx];

          if (idx !== _this3.activeIdx) {
            tab.classList.remove('active');
            tab.removeAttribute('aria-selected');
            panel.hidden = true;
          } else {
            tab.classList.add('active');
            tab.setAttribute('aria-selected', '');
            panel.hidden = false;
          }
        });

        this.activeTab.focus();
      }
    }, {
      key: 'initPanels',
      value: function initPanels() {
        var _this4 = this;

        forEach.call(this.panels, function (panel, idx) {
          panel.id = 'panel-' + idx;
          panel.hidden = panel !== _this4.activePanel;
        });
      }
    }, {
      key: 'positionSlider',
      value: function positionSlider() {
        var _activeTab$getBoundin = this.activeTab.getBoundingClientRect(),
            left = _activeTab$getBoundin.left,
            width = _activeTab$getBoundin.width;

        // 14px is the approx. padding of the button


        this.slider.style.left = left - 14 + 'px';
        this.slider.style.width = width + 'px';
      }
    }, {
      key: 'onTabSlotChange',
      value: function onTabSlotChange(e) {
        this.tabList = e.target.assignedNodes()[0];
        if (!this.tabList) return;

        this.initTabs();

        this.tabs = this.tabList.querySelectorAll('button[id^="tab"]');

        this.tabsWrapper.insertBefore(this.tabList, this.slider);
        this.positionSlider();
      }
    }, {
      key: 'onPanelSlotChange',
      value: function onPanelSlotChange(e) {
        this.panels = e.target.assignedNodes()[0].querySelectorAll('[data-panel]');

        if (!this.panels) return;

        this.initPanels();
      }
    }]);

    return Tabs;
  }(HTMLElement);

  customElements.define('pearson-tabs', Tabs);
})(window, document);
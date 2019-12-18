var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  var ICON_CLOSE_24 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="close-24" viewBox="0 0 24 24"\n    class="pe-icon-close-24"\n    aria-hidden="true"\n    focusable="false"\n    style="width:24px;height:24px;"\n  >\n    <path\n      d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"\n    ></path>\n  </svg>\n  ';

  var ICON_CHECK_18 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="success-icon" viewBox="0 0 18 18"\n    class="pe-variant-icon pe-icon-check-18\n    aria-hidden="true"\n    focusable="false"\n    style="width:18px;height:18px;"\n  >\n    <path\n      d="M5.7176,18 C5.4406,18 5.1736,17.885 4.9846,17.68 L0.2666,12.589 C-0.1084,12.184 -0.0854,11.551 0.3206,11.176 C0.7246,10.799 1.3566,10.823 1.7336,11.229 L5.6126,15.415 L16.1826,0.424 C16.5016,-0.028 17.1246,-0.135 17.5756,0.183 C18.0276,0.501 18.1356,1.125 17.8176,1.576 L6.5346,17.576 C6.3616,17.823 6.0846,17.978 5.7836,17.998 C5.7616,17.999 5.7396,18 5.7176,18"\n    ></path>\n  </svg>\n';

  var ICON_WARNING_18 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="error-icon" viewBox="0 0 18 18"\n    class="pe-variant-icon pe-icon-warning-18\n    aria-hidden="true"\n    focusable="false"\n    style="width:18px;height:18px;"\n  >\n    <path\n      d="M9.9999375,12.4775 C9.9999375,12.7525 9.7749375,12.9775 9.4999375,12.9775 L8.4999375,12.9775 C8.2249375,12.9775 7.9999375,12.7525 7.9999375,12.4775 L7.9999375,7.4775 C7.9999375,7.2025 8.2249375,6.9775 8.4999375,6.9775 L9.4999375,6.9775 C9.7749375,6.9775 9.9999375,7.2025 9.9999375,7.4775 L9.9999375,12.4775 Z M9.9999375,15.4775 C9.9999375,15.7525 9.7749375,15.9775 9.4999375,15.9775 L8.4999375,15.9775 C8.2249375,15.9775 7.9999375,15.7525 7.9999375,15.4775 L7.9999375,14.4775 C7.9999375,14.2025 8.2249375,13.9775 8.4999375,13.9775 L9.4999375,13.9775 C9.7749375,13.9775 9.9999375,14.2025 9.9999375,14.4775 L9.9999375,15.4775 Z M17.9469375,17.2535 L9.4469375,0.2535 C9.2769375,-0.0845 8.7229375,-0.0845 8.5529375,0.2535 L0.0529375,17.2535 C-0.0240625,17.4095 -0.0170625,17.5925 0.0739375,17.7405 C0.1659375,17.8875 0.3269375,17.9775 0.4999375,17.9775 L17.4999375,17.9775 C17.6729375,17.9775 17.8339375,17.8875 17.9259375,17.7405 C18.0169375,17.5925 18.0239375,17.4095 17.9469375,17.2535 L17.9469375,17.2535 Z"\n    ></path>\n  </svg>\n  ';

  template.innerHTML = '\n<style>\n:host{display:block;position:fixed;top:0;left:0;max-width:580px;z-index:1000;padding:20px 28px;margin:36px 24px;font:14px/22px Open Sans,Calibri,Tahoma,sans-serif;background-color:#fff;color:#252525;border:1px solid #c7c7c7;border-left:3px solid transparent;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.16);box-shadow:0 1px 1px 0 rgba(0,0,0,.16);visibility:hidden;opacity:0}:host([type=error]){border-left-color:#db0020}:host([type=info]),:host([type=success]){border-left-color:#19a6a4}:host([level=inline]){position:absolute;top:unset;left:unset;max-width:100vw;margin:0}*{-webkit-box-sizing:inherit;box-sizing:inherit}.content-container{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}::slotted(h2),::slotted(h3),::slotted(p){display:inline;font:14px/22px Open Sans,Calibri,Tahoma,sans-serif;margin:0;font-weight:600}::slotted(h2){margin-right:4px}::slotted(p){font-weight:400}::slotted(a){color:#047a9c;text-decoration:none}::slotted(a:focus),::slotted(a:hover){color:#005a70}::slotted(a:focus){outline:2px solid #0b73da;outline-offset:4px}.pe-icon--btn{position:absolute;width:48px;height:48px;background:none;border:none;color:inherit;cursor:pointer;padding:0;top:5px;right:5px}.pe-icon--btn svg{height:24px;width:24px}.pe-icon--btn:focus{outline:0;border:2px solid #0b73da;border-radius:4px}.pe-icon--btn::-moz-focus-inner{border:none;padding:0}svg{vertical-align:top;fill:#6a7070;pointer-events:none}svg[class*=check]{fill:#19a6a4}svg[class*=warning]{fill:#db0020}:host([type=error]) svg[class*=warning],:host([type=success]) svg[class*=check]{display:block}.pe-variant-icon{-webkit-box-flex:0;-webkit-flex:0 0 18px;-ms-flex:0 0 18px;flex:0 0 18px;margin-right:12px;display:none}.content{display:inline-block}@media (min-width:480px){:host([level=global]){width:440px}}@media (min-width:768px){:host{margin:32px;padding:24px 36px 24px 28px}:host([level=global]){width:580px}:host([level=inline]){min-width:440px}.pe-icon--btn{padding:8px}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host(.fadeIn),:host(.slideInDown){opacity:1;visibility:visible}:host(.fadeOut),:host(.slideOutDown){opacity:0;visibility:hidden}:host([animated].slideInDown){-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host([animated].slideOutDown){-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host([animated].fadeIn){-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host([animated].fadeOut){-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}@media (prefers-reduced-motion){:host([animated]){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] :host(.animated){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}</style>\n    <div class="content-container">\n    ' + ICON_CHECK_18 + ' ' + ICON_WARNING_18 + '\n      <div class="content">\n        <slot></slot>\n      </div>\n    </div>\n    <button\n      data-action="close-alert"\n      class="pe-icon--btn"\n      aria-label="Close Lorem ipsum dolor sit amet."\n    >\n      ' + ICON_CLOSE_24 + '\n    </button>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  var FOCUSABLE_ELEMENTS = 'a:not([disabled]), button:not([disabled])';

  function getFocusableChildren(node) {
    var filter = Array.prototype.filter,
        focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  function setFocusToFirstChild(node) {
    var focusableChildren = getFocusableChildren(node),
        focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];
    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function constrainToParentWidth(el) {
    var parent = el.parentElement;
    var parentWidth = parent.getBoundingClientRect().width;
    var parentComputedStyle = w.getComputedStyle(parent);
    var parentPaddingWidth = parseInt(parentComputedStyle.getPropertyValue('padding-left').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('padding-right').match(/\d+/)[0], 10);

    var parentBorderWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('border-right-width').match(/\d+/)[0], 10);

    var elMinWidth = parseInt(w.getComputedStyle(el).getPropertyValue('min-width').match(/\d+/)[0], 10);

    // The width should be equal to the parent's width,
    // minus the padding and border
    var nextElWidth = parentWidth - (parentPaddingWidth + parentBorderWidth);

    if (nextElWidth > w.innerWidth) {
      nextElWidth = w.innerWidth;
    }

    // If that number is less than the min-width,
    if (nextElWidth < elMinWidth) {
      //  use min-width instead
      nextElWidth = elMinWidth;
    }

    el.style.width = nextElWidth + 'px';
  }

  function ensureAttrs(node, attrs) {
    for (var attrName in attrs) {
      var requiredVal = attrs[attrName];
      if (!node.hasAttribute(attrName) || node.getAttribute(attrName) !== requiredVal) {
        node.setAttribute(attrName, requiredVal);
      }
    }
  }

  var Alert = function (_HTMLElement) {
    _inherits(Alert, _HTMLElement);

    _createClass(Alert, [{
      key: 'animated',
      get: function get() {
        return this.hasAttribute('animated') && w.matchMedia('(prefers-reduced-motion: reduce)');
      }
    }, {
      key: 'level',
      get: function get() {
        return this.getAttribute('level');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }]);

    function Alert() {
      _classCallCheck(this, Alert);

      var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.contentContainer = clone.querySelector('.content-container');
      _this.closeBtn = clone.querySelector('button[data-action="close-alert"]');
      _this.returnNode = doc.querySelector('#' + _this.getAttribute('returnNode')) || doc.querySelector('#' + _this.getAttribute('returnnode')) || doc.activeElement;

      _this.shadowRoot.appendChild(clone);

      _this.onCloseClick = _this.onCloseClick.bind(_this);
      _this.onSlotChange = _this.onSlotChange.bind(_this);
      return _this;
    }

    _createClass(Alert, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var slot = this.shadowRoot.querySelector('slot');

        var a11yAttrs = {};

        if (this.level === 'global') {
          a11yAttrs.role = 'dialog';
          a11yAttrs['aria-labelledby'] = 'alertTitle', a11yAttrs['aria-describedby'] = 'alertDescription alertLink';

          this.openingAnimation = 'slideInDown';
          this.closingAnimation = 'slideOutDown';
        }
        if (this.level === 'inline') {
          constrainToParentWidth(this);

          a11yAttrs.role = this.type === 'error' ? 'alert' : 'status';
          a11yAttrs['aria-live'] = this.type === 'error' ? 'assertive' : 'polite';

          this.openingAnimation = 'fadeIn';
          this.closingAnimation = 'fadeOut';
        }

        ensureAttrs(this, a11yAttrs);

        this.classList.add(this.openingAnimation);

        slot.addEventListener('slotchange', this.onSlotChange);
        this.closeBtn.addEventListener('click', this.onCloseClick);

        if (this.animated) {
          this.addEventListener('animationend', this.onAnimationEnd);
        } else if (this.level === 'global') {
          setFocusToFirstChild(this);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.returnNode.focus();
      }
    }, {
      key: 'onCloseClick',
      value: function onCloseClick() {
        this.classList.add(this.closingAnimation);

        this.dispatchEvent(new Event('dismiss', {
          bubbles: true
        }));

        if (!this.animated) {
          this.remove();
        }
      }
    }, {
      key: 'onSlotChange',
      value: function onSlotChange(e) {
        var contentNodes = e.target.assignedNodes();
        var node = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = contentNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            node = _step.value;

            if (node.id === 'alertTitle') {
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.closeBtn.setAttribute('aria-label', 'Close ' + (node ? node.textContent : 'Alert'));
      }
    }, {
      key: 'onAnimationEnd',
      value: function onAnimationEnd(e) {
        if (this.level === 'global' && e.animationName === this.openingAnimation) {
          setFocusToFirstChild(this);
        }
        if (e.animationName === this.closingAnimation) {
          this.remove();
        }
      }
    }]);

    return Alert;
  }(HTMLElement);

  customElements.define('pearson-alert', Alert);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global moment */
(function (w, doc) {
  'use strict';

  var template = doc.createElement('template'),
      timeItem = doc.createElement('template'),
      isIE11 = !!window.MSInputMethodContext && !!doc.docMode,
      checkIcon = '\n      <svg\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;fill:currentColor;vertical-align:top;"\n      >\n        <path d="M7.35823097,13.99969 C7.08123097,13.99969 6.81423097,13.88469 6.62523097,13.67969 L4.26623097,11.13469 C3.89123097,10.72869 3.91523097,10.09669 4.32023097,9.72169 C4.72423097,9.34469 5.35623097,9.36869 5.73323097,9.77469 L7.25323097,11.41469 L12.182231,4.42369 C12.501231,3.97269 13.125231,3.86469 13.576231,4.18269 C14.027231,4.50069 14.135231,5.12469 13.817231,5.57569 L8.17523097,13.57569 C8.00223097,13.82269 7.72523097,13.97769 7.42423097,13.99769 C7.40223097,13.99869 7.38023097,13.99969 7.35823097,13.99969"/>\n      </svg>\n    ',
      clockIcon = '\n      <svg\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;fill:currentColor;vertical-align:top;" \n      >\n        <path d="M13.1035,14.1035 C13.0055,14.2015 12.8775,14.2495 12.7495,14.2495 C12.6225,14.2495 12.4945,14.2015 12.3965,14.1035 L8.1475,9.8545 C8.1005,9.8075 8.0635,9.7525 8.0385,9.6905 C8.0135,9.6295 7.9995,9.5655 7.9995,9.4995 L7.9995,5.4995 C7.9995,5.2235 8.2235,4.9995 8.4995,4.9995 C8.7765,4.9995 8.9995,5.2235 8.9995,5.4995 L8.9995,9.2925 L13.1035,13.3965 C13.2985,13.5915 13.2985,13.9085 13.1035,14.1035 M8.9995,-0.0005 C4.0375,-0.0005 -0.0005,4.0375 -0.0005,8.9995 C-0.0005,13.9625 4.0375,17.9995 8.9995,17.9995 C13.9625,17.9995 17.9995,13.9625 17.9995,8.9995 C17.9995,4.0375 13.9625,-0.0005 8.9995,-0.0005"/>\n      </svg>\n    ',
      warningIcon = '\n      <svg\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;fill:currentColor" \n      >\n        <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>\n    </svg>';

  timeItem.innerHTML = '\n    <li class="item" role="option" aria-selected="false" data-time="6:00 AM">\n      <span class="pe-icon-wrapper">\n\t\t\t\t' + checkIcon + '\n      </span>\n      <span class="time"></span>\n    </li>\n  ';

  template.innerHTML = '\n<style>\ninput{font-family:inherit;font-weight:inherit;line-height:inherit;display:block;width:100%;height:36px;padding:0 14px;border:1px solid #c7c7c7;border-radius:2px}ul{list-style-type:none;padding:0;margin:0}:host,:host *,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;max-width:400px;font:14px/18px Open Sans,Calibri,Tahoma,sans-serif;color:#252525}.pe-icon-wrapper{color:#6a7070}.timepicker{position:relative}.timepicker .pe-icon-wrapper{position:absolute;right:14px;top:50%}.timepicker-input{min-width:150px}.timepicker-error{display:none}.listbox{min-width:220px;width:100%;padding:0 14px;border:1px solid #c7c7c7;border-radius:2px}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}\n</style>\n  <div class="timepicker">\n    <label \n      class="timepicker-label"\n      for="timepicker-input"\n    >\n      Select time (HH:MM AM/PM)\n    </label>\n    <input \n      type="text" \n      id="timepicker-input"\n      class="timepicker-input"\n      role="combobox"\n      aria-haspopup="listbox"\n      aria-expanded="false"\n      aria-owns="listbox"\n      aria-autocomplete="none"\n    >\n    <span class="pe-icon-wrapper">\n      ' + clockIcon + '\n    </span> \n  </div>\n  <p id="timepicker-error" class="timepicker-error">\n    ' + warningIcon + '\n    Enter a valid time.\n  </p>\n  <div\n    id="listbox-wrapper"\n    class="listbox-wrapper animated animateIn"\n  >\n    <ul\n      id="listbox"\n      class="listbox"\n      role="listbox"\n      data-selected data-time-type="12 hour"\n    ></ul>\n  </div>\n';

  function removeIcons(node) {
    var icons = node.querySelectorAll('.pe-icon-wrapper');
    return Array.prototype.forEach.call(icons, function (icon) {
      icon.style.display = 'none';
    });
  }

  function filterSelected(node, value) {
    return node.querySelector('[data-time^=\'' + value + '\']');
  }

  function setSelectedFalse(node) {
    var items = node.querySelectorAll('#itemList li');
    return Array.prototype.forEach.call(items, function (item) {
      item.classList.remove('in-view');
      item.removeAttribute('aria-activedescendant');
      item.setAttribute('aria-selected', false);
    });
  }

  function getFocusableElements(node) {
    return node.querySelectorAll('[role^="option"]');
  }

  function calculate(increments) {
    var endTime = moment().add(24, 'h'),
        timeStops = [],
        startTime = moment().add(increments - moment().minute() % increments, 'm');
    while (startTime < endTime) {
      timeStops.push(new moment(startTime));
      startTime.add(increments, 'm').format('LLL');
    }
    return timeStops;
  }

  var TIME_FORMAT_REGEX = {
    '12': /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/,
    '24': /^([01]\d|2[0-3]):?([0-5]\d)$/
  };

  function buildTimeEl(time, index) {
    var li = timeItem.content.cloneNode(true),
        item = li.querySelector('li'),
        timeEl = li.querySelector('.time');
    item.setAttribute('data-time', time);
    item.setAttribute('data-index', index);
    item.id = 'time-' + index;
    timeEl.innerHTML = time;
    return li;
  }

  function isElementVisible(el, parent) {
    var rect = el.getBoundingClientRect(),
        parentRect = parent.getBoundingClientRect();

    // evaluate if the element is out of bounds
    // of its parent
    return rect.top < parentRect.y + parentRect.height && rect.top + rect.height > parentRect.y && rect.bottom < parentRect.bottom && rect.top > parentRect.top;

    // Return true if any of its four corners are visible
  }

  var Timepicker = function (_HTMLElement) {
    _inherits(Timepicker, _HTMLElement);

    _createClass(Timepicker, [{
      key: 'increments',
      get: function get() {
        return this.getAttribute('increments') || '15';
      }
    }, {
      key: 'hours',
      get: function get() {
        return this.getAttribute('hours');
      }
    }, {
      key: 'format',
      get: function get() {
        return this.hours === '12' ? 'h:mm A' : 'HH:mm';
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open'];
      }
    }]);

    function Timepicker() {
      _classCallCheck(this, Timepicker);

      var _this = _possibleConstructorReturn(this, (Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.input = clone.querySelector('#timepicker-input');
      _this.list = clone.querySelector('#listbox');

      _this.shadowRoot.append(clone);

      _this.onInputClick = _this.onInputClick.bind(_this);
      _this.onInputKeyup = _this.onInputKeyup.bind(_this);
      _this.onInputKeydown = _this.onInputKeydown.bind(_this);
      _this.onInputFocus = _this.onInputFocus.bind(_this);
      _this.onInputBlur = _this.onInputBlur.bind(_this);
      _this.onListboxClick = _this.onListboxClick.bind(_this);
      return _this;
    }

    _createClass(Timepicker, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {}
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.timesToRender = this.calculateTimes(this.increments);
        this.timesToRender.forEach(function (time, index) {
          var text = time.format(_this2.format);
          _this2.list.appendChild(buildTimeEl(text, index));
        });

        this.input.addEventListener('keydown', this.onInputKeydown);
        this.input.addEventListener('keyup', this.onInputKeyup);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {}
    }, {
      key: 'calculateTimes',
      value: function calculateTimes(increments) {
        var endTime = moment().add(24, 'h'),
            timeStops = [],
            startTime = moment().add(increments - moment().minute() % increments, 'm');

        while (startTime < endTime) {
          timeStops.push(new moment(startTime));
          startTime.add(increments, 'm').format('LLL');
        }
        return timeStops;
      }
    }, {
      key: 'onInputClick',
      value: function onInputClick() {}
    }, {
      key: 'onInputKeydown',
      value: function onInputKeydown() {}
    }, {
      key: 'onInputKeyup',
      value: function onInputKeyup(e) {
        switch (e.key) {
          case 'Up':
          case 'Down':
          case 'Escape':
          case 'Enter':
            e.preventDefault();
            return;
        }
      }
    }, {
      key: 'onInputFocus',
      value: function onInputFocus() {}
    }, {
      key: 'onInputBlur',
      value: function onInputBlur() {}
    }, {
      key: 'onListboxClick',
      value: function onListboxClick() {}
    }]);

    return Timepicker;
  }(HTMLElement);

  customElements.define('pearson-timepicker', Timepicker);
})(window, document);
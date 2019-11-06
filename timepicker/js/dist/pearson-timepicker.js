var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global moment */
(function (w, doc) {
  'use strict';

  var isIE11 = !!window.MSInputMethodContext && !!doc.documentMode;
  var keys = {
    UP: isIE11 ? 'Up' : 'ArrowUp',
    DOWN: isIE11 ? 'Down' : 'ArrowDown',
    ENTER: 'Enter',
    ESC: isIE11 ? 'Esc' : 'Escape',
    TAB: 'Tab'
  };

  var template = doc.createElement('template'),
      timeItem = doc.createElement('template'),
      checkIcon = '\n      <svg\n        class="pe-icon"\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;"\n      >\n        <path d="M7.35823097,13.99969 C7.08123097,13.99969 6.81423097,13.88469 6.62523097,13.67969 L4.26623097,11.13469 C3.89123097,10.72869 3.91523097,10.09669 4.32023097,9.72169 C4.72423097,9.34469 5.35623097,9.36869 5.73323097,9.77469 L7.25323097,11.41469 L12.182231,4.42369 C12.501231,3.97269 13.125231,3.86469 13.576231,4.18269 C14.027231,4.50069 14.135231,5.12469 13.817231,5.57569 L8.17523097,13.57569 C8.00223097,13.82269 7.72523097,13.97769 7.42423097,13.99769 C7.40223097,13.99869 7.38023097,13.99969 7.35823097,13.99969"/>\n      </svg>\n    ',
      clockIcon = '\n      <svg\n        class="pe-icon"\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;" \n      >\n        <path d="M13.1035,14.1035 C13.0055,14.2015 12.8775,14.2495 12.7495,14.2495 C12.6225,14.2495 12.4945,14.2015 12.3965,14.1035 L8.1475,9.8545 C8.1005,9.8075 8.0635,9.7525 8.0385,9.6905 C8.0135,9.6295 7.9995,9.5655 7.9995,9.4995 L7.9995,5.4995 C7.9995,5.2235 8.2235,4.9995 8.4995,4.9995 C8.7765,4.9995 8.9995,5.2235 8.9995,5.4995 L8.9995,9.2925 L13.1035,13.3965 C13.2985,13.5915 13.2985,13.9085 13.1035,14.1035 M8.9995,-0.0005 C4.0375,-0.0005 -0.0005,4.0375 -0.0005,8.9995 C-0.0005,13.9625 4.0375,17.9995 8.9995,17.9995 C13.9625,17.9995 17.9995,13.9625 17.9995,8.9995 C17.9995,4.0375 13.9625,-0.0005 8.9995,-0.0005"/>\n      </svg>\n    ',
      warningIcon = '\n      <svg\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;fill:currentColor" \n      >\n        <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>\n    </svg>';

  timeItem.innerHTML = '\n    <li\n      class="listbox-item"\n      role="option"\n      aria-selected="false"\n      data-time=""\n      data-idx=""\n    >\n\t\t\t\t' + checkIcon + '\n      <span class="time"></span>\n    </li>\n  ';

  template.innerHTML = '\n<style>\ninput{display:block;width:100%;height:36px;padding:0 14px;border:1px solid #c7c7c7;border-radius:4px;margin-top:6px}input:focus{position:relative;outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da;box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da;z-index:1}input[disabled]{color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}input[readonly]{border-color:transparent;background-color:transparent}ul{list-style-type:none;padding:0;margin:0}svg{fill:currentColor;vertical-align:top}:host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font:14px/18px Open Sans,Calibri,Tahoma,sans-serif}:host{position:relative;display:inline-block;max-width:400px;color:#252525}.pe-icon{position:absolute;color:#6a7070;pointer-events:none}.timepicker{position:relative}.timepicker .pe-icon{right:14px;top:33px;z-index:2}.timepicker-label{font-size:12px;line-height:16px;color:#6a7070}.timepicker-input{min-width:150px;margin-bottom:4px}.timepicker-input[aria-invalid=true]{border-color:#db0020;margin-bottom:0}.timepicker-input[aria-invalid=true]:focus{-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020;box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020}.timepicker-input[aria-invalid=true]~.timepicker-error{display:block}.timepicker-error{font-size:12px;line-height:16px;color:#db0020;margin-top:4px;margin-bottom:2px}.timepicker-error:empty{display:none}.listbox-wrapper{position:absolute;width:100%;z-index:999;visibility:hidden}:host([open]) .listbox-wrapper{visibility:visible}.listbox{min-width:220px;width:100%;max-height:300px;border:1px solid #c7c7c7;border-radius:2px;overflow-y:auto;background-color:#fff;visibility:hidden}.listbox-item{cursor:pointer;position:relative;padding:4px 24px}.listbox-item span,.listbox-item svg{pointer-events:none}.listbox-item.focused,.listbox-item:hover{background-color:#e9e9e9}.listbox-item.focused{border-radius:4px;-webkit-box-shadow:inset 0 0 0 2px #0b73da;box-shadow:inset 0 0 0 2px #0b73da}.listbox-item .pe-icon{display:none;left:5px}.listbox-item.selected .pe-icon{display:block}.hidden{display:none}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}}@-webkit-keyframes fadeOutUp{0%{visibility:visible}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{visibility:visible}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{visibility:hidden;opacity:0}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{visibility:hidden;opacity:0}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s;visibility:visible}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s;visibility:hidden}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}\n\n</style>\n  <div class="timepicker">\n    <label\n      id="timepicker-label"\n      class="timepicker-label"\n      for="timepicker-input"\n    >\n      Select time (HH:MM AM/PM)\n    </label>\n    <input \n      type="text" \n      id="timepicker-input"\n      class="timepicker-input"\n      role="combobox"\n      aria-autocomplete="list"\n      aria-haspopup="listbox"\n      aria-expanded="false"\n      aria-owns="listbox"\n    >\n      ' + clockIcon + ' \n    <p \n      id="timepicker-error"\n      class="timepicker-error"\n      role="alert"\n      aria-live="assertive"\n    ></p>\n  </div>\n  <div class="listbox-wrapper" role="presentation">\n    <ul\n      id="listbox"\n      class="listbox animated"\n      role="listbox"\n      aria-labelledby="timepicker-label"\n    ></ul>\n  </div>\n';

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

  var TIME_FORMATS = {
    '12': /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/,
    '24': /^([01]\d|2[0-3]):?([0-5]\d)$/
  };

  function buildTimeEl(time, index) {
    var li = timeItem.content.cloneNode(true),
        item = li.querySelector('li'),
        timeEl = li.querySelector('.time');
    item.setAttribute('data-time', time);
    item.setAttribute('data-idx', index);
    item.id = 'time-' + index;
    timeEl.innerHTML = time;
    return li;
  }

  function isVisible(el) {
    var rect = el.getBoundingClientRect(),
        parentRect = el.parentElement.getBoundingClientRect();

    // evaluate if the element is out of bounds
    // of its parent
    return rect.top < parentRect.top + parentRect.height && rect.top + rect.height > parentRect.top && rect.bottom < parentRect.bottom && rect.top > parentRect.top;
  }

  var find = Array.prototype.find;

  w.ShadyCSS && w.ShadyCSS.prepareTemplate(template, 'pearson-timepicker');

  var Timepicker = function (_HTMLElement) {
    _inherits(Timepicker, _HTMLElement);

    _createClass(Timepicker, [{
      key: 'open',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(value) {
        var isOpen = Boolean(value);

        if (isOpen) {
          if (this.selectedItem) this.selectedItem.scrollIntoView(false);

          this.setAttribute('open', '');
        } else {
          this.removeAttribute('open');
        }
      }
    }, {
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
      /**
       * Set the label eleement's text content with the user-provided
       * label, followed by format instructions
       */

    }, {
      key: 'labelText',
      set: function set(text) {
        this.label.textContent = text + ' (' + (this.hours === '12' ? 'HH:MM AM/PM' : 'HH:MM') + ')';
      }
    }, {
      key: 'pattern',
      get: function get() {
        return TIME_FORMATS[this.hours];
      }

      // TODO: Ensure validation only happens
      // if format matches AND time exists in list

    }, {
      key: 'validity',
      set: function set(isValid) {
        var errorMsg = this.errorMsg,
            input = this.input;

        if (isValid) {
          input.removeAttribute('aria-invalid');
          input.removeAttribute('aria-describedby');
          errorMsg.innerHTML = '';
        } else {
          input.setAttribute('aria-invalid', 'true');
          input.setAttribute('aria-describedby', 'timepicker-error');
          errorMsg.innerHTML = warningIcon + '\n        Enter a valid time.';
        }
      }
      /**
       * The currently active listbox item
       * @type {HTMLElement}
       */

    }, {
      key: 'activeItem',
      get: function get() {
        return this.activeIdx > -1 ? this.items[this.activeIdx] : null;
      },
      set: function set(nextItem) {
        if (this.activeItem) {
          this.activeItem.classList.remove('focused');
          this.activeItem.setAttribute('aria-selected', 'false');
        }

        if (nextItem) {
          this.input.setAttribute('aria-activedescendant', 'time-' + nextItem.dataset.idx);

          nextItem.classList.add('focused');
          nextItem.setAttribute('aria-selected', 'true');

          this.activeIdx = Number(nextItem.dataset.idx);
        }
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return this.selectedIdx > -1 ? this.items[this.selectedIdx] : null;
      },
      set: function set(nextItem) {
        if (this.selectedItem) {
          this.selectedItem.classList.remove('selected');
        }
        if (nextItem) {
          this.input.value = nextItem.dataset.time;
          this.validity = true;
          nextItem.classList.add('selected');

          this.selectedIdx = Number(nextItem.dataset.idx);

          if (this.activeItem !== nextItem) {
            this.activeItem = nextItem;
          }
        }
      }
    }, {
      key: 'selectedTime',
      get: function get() {
        return this.selectedItem ? this.selectedItem.dataset.time : null;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open', 'readonly', 'disabled'];
      }
    }]);

    function Timepicker() {
      _classCallCheck(this, Timepicker);

      var _this = _possibleConstructorReturn(this, (Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.label = clone.querySelector('#timepicker-label');
      _this.input = clone.querySelector('#timepicker-input');
      _this.errorMsg = clone.querySelector('#timepicker-error');
      _this.listbox = clone.querySelector('#listbox');

      _this.shadowRoot.appendChild(clone);

      _this.activeIdx = -1;
      _this.selectedIdx = -1;
      _this.plainTextTimes = [];

      _this.onInputKeydown = _this.onInputKeydown.bind(_this);
      _this.onInputFocus = _this.onInputFocus.bind(_this);
      _this.onInputBlur = _this.onInputBlur.bind(_this);
      _this.onListboxClick = _this.onListboxClick.bind(_this);
      _this.onDocumentClick = _this.onDocumentClick.bind(_this);
      return _this;
    }

    _createClass(Timepicker, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
          var isOpen = newValue !== null;
          var activeDescendant = void 0,
              classToAdd = void 0,
              classToRemove = void 0;

          if (isOpen) {
            activeDescendant = this.activeIdx > -1 ? this.activeItem.id : '';
            classToAdd = 'animateIn';
            classToRemove = 'animateOut';
          } else {
            activeDescendant = '';
            classToAdd = 'animateOut';
            classToRemove = 'animateIn';
          }

          this.input.setAttribute('aria-expanded', isOpen);
          this.input.setAttribute('aria-activedescendant', activeDescendant);

          this.listbox.classList.remove(classToRemove);
          this.listbox.classList.add(classToAdd);
        }

        if (name === 'readonly' || name === 'disabled') {
          var isTruthy = newValue !== null;

          if (isTruthy) {
            this.input.setAttribute(name, name);
          } else {
            this.input.removeAttribute(name);
          }
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var defaultValue = this.getAttribute('defaultValue');

        this.labelText = this.getAttribute('label') || '';

        // The pattern attribute only works with expressions
        // that do not have slashes around them
        this.input.pattern = this.pattern.toString().slice(1, -1);

        // TODO: repeat this every time listbox opens
        // TODO: filter items in list
        this.times = calculate(this.increments);
        this.times.forEach(function (time, index) {
          var text = time.format(_this2.format);
          _this2.plainTextTimes[index] = text;
          _this2.listbox.appendChild(buildTimeEl(text, index));
        });

        this.items = this.listbox.children;

        // Set user-provided initial value if
        // it passes validation
        if (this.pattern.test(defaultValue) && this.plainTextTimes.indexOf(defaultValue)) {
          var idx = this.plainTextTimes.indexOf(defaultValue);
          this.selectedItem = this.items[idx];
        }

        this.input.addEventListener('focus', this.onInputFocus);
        this.input.addEventListener('keydown', this.onInputKeydown);
        this.input.addEventListener('blur', this.onInputBlur);

        this.listbox.addEventListener('click', this.onListboxClick, true);

        doc.addEventListener('click', this.onDocumentClick, true);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        doc.removeEventListener('click', this.onDocumentClick, true);
      }
    }, {
      key: 'checkSelection',
      value: function checkSelection() {
        var _this3 = this;

        var activeItem = this.activeItem;

        if (this.activeIdx === -1 && this.input.value === '') {
          return;
        }

        // if the string is different than the selectedItem, use it
        if (this.input.value !== this.selectedTime || !this.activeItem) {
          activeItem = find.call(this.items, function (i) {
            return i.dataset.time.startsWith(_this3.input.value);
          });
        }

        this.selectedItem = activeItem;

        this.validity = this.input.checkValidity() && this.input.value === this.selectedTime;
      }
    }, {
      key: 'onInputFocus',
      value: function onInputFocus() {
        console.log('focused');
        this.open = true;
      }
    }, {
      key: 'onInputKeydown',
      value: function onInputKeydown(e) {
        var items = this.items;
        var key = e.key;
        var isDirectionalKey = key === keys.UP || key === keys.DOWN;

        var prevOpen = this.open;
        var activeIdx = !prevOpen && this.selectedIdx > -1 ? this.selectedIdx : this.activeIdx;

        if (key === keys.ESC) {
          this.open = false;
          return;
        }

        if (!prevOpen && isDirectionalKey) {
          this.open = true;
        }

        switch (key) {
          case keys.UP:
            if (activeIdx <= 0) {
              activeIdx = items.length - 1;
            } else if (prevOpen) {
              activeIdx--;
            }
            break;
          case keys.DOWN:
            if (activeIdx === -1 || activeIdx >= items.length - 1) {
              activeIdx = 0;
            } else if (prevOpen) {
              activeIdx++;
            }
            break;
          case keys.ENTER:
            this.selectedItem = this.activeItem;
            this.open = false;
            return;
          case keys.TAB:
            this.open = false;
            return;
          default:
            return;
        }
        e.preventDefault();

        this.activeItem = this.items[activeIdx];

        if (isDirectionalKey && !isVisible(this.activeItem)) {
          this.activeItem.scrollIntoView(key === keys.UP);
        }
      }
    }, {
      key: 'onInputBlur',
      value: function onInputBlur(e) {
        this.checkSelection();
      }
    }, {
      key: 'onListboxClick',
      value: function onListboxClick(e) {
        var target = e.target;

        if (target && target.nodeName === 'LI') {
          this.selectedItem = target;
          this.open = false;
        }
      }
    }, {
      key: 'onDocumentClick',
      value: function onDocumentClick(e) {
        if (e.target === this) return;
        this.open = false;
      }
    }]);

    return Timepicker;
  }(HTMLElement);

  customElements.define('pearson-timepicker', Timepicker);
})(window, document);
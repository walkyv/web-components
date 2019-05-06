/* global moment */
(function(w, doc) {
  'use strict';
  const isIE11 = !!window.MSInputMethodContext && !!doc.documentMode;
  const keys = {
    UP: isIE11 ? 'Up' : 'ArrowUp',
    DOWN: isIE11 ? 'Down' : 'ArrowDown',
    ENTER: 'Enter',
    ESC: isIE11 ? 'Esc' : 'Escape',
    TAB: 'Tab'
  };

  const template = doc.createElement('template'),
    timeItem = doc.createElement('template'),
    checkIcon = `
      <svg
        class="pe-icon"
        aria-hidden="true"
        focusable="false"
        style="width:18px;height:18px;"
      >
  	<path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
      </svg>
    `,
    clockIcon = `
      <svg
        class="pe-icon"
        aria-hidden="true"
        focusable="false"
        style="width:18px;height:18px;" 
      >
	<path d="M9,16.25 C13.0040644,16.25 16.25,13.0040644 16.25,9 C16.25,4.99593556 13.0040644,1.75 9,1.75 C4.99593556,1.75 1.75,4.99593556 1.75,9 C1.75,13.0040644 4.99593556,16.25 9,16.25 Z M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z"  fill-rule="nonzero"></path>
	<path d="M10,9.59115917 L11.7082195,11.2993787 C12.0972602,11.6884193 12.0972602,12.3191789 11.7082195,12.7082195 C11.3191789,13.0972602 10.6884193,13.0972602 10.2993787,12.7082195 L8.35734629,10.7661871 C8.13887576,10.5827482 8,10.3075922 8,10 L8,5 C8,4.44771525 8.44771525,4 9,4 C9.55228475,4 10,4.44771525 10,5 L10,9.59115917 Z" ></path>      </svg>
    `,
    warningIcon = `
      <svg
        aria-hidden="true"
        focusable="false"
        style="width:18px;height:18px;fill:currentColor" 
      >
  	<path d="M10.3203543,1.76322881 L17.7947154,14.7065602 C18.2165963,15.4371302 17.9673988,16.3719805 17.2381172,16.7946067 C17.0059424,16.9291544 16.742459,17 16.4742343,17 L1.52551217,17 C0.682995061,17 0,16.3157983 0,15.4717927 C0,15.2030941 0.0707206291,14.9391453 0.205031086,14.7065602 L7.67939217,1.76322881 C8.10127304,1.03265881 9.03447459,0.78302105 9.76375615,1.20564727 C9.99478499,1.33953088 10.1867068,1.5317918 10.3203543,1.76322881 Z M8.5,13 C8.22385763,13 8,13.2238576 8,13.5 L8,14.5 C8,14.7761424 8.22385763,15 8.5,15 L9.5,15 C9.77614237,15 10,14.7761424 10,14.5 L10,13.5 C10,13.2238576 9.77614237,13 9.5,13 L8.5,13 Z M8.5,7 C8.22385763,7 8,7.22385763 8,7.5 L8,11.5 C8,11.7761424 8.22385763,12 8.5,12 L9.5,12 C9.77614237,12 10,11.7761424 10,11.5 L10,7.5 C10,7.22385763 9.77614237,7 9.5,7 L8.5,7 Z"></path>
    </svg>`;

  timeItem.innerHTML = `
    <li
      class="listbox-item"
      role="option"
      aria-selected="false"
      data-time=""
      data-idx=""
    >
				${checkIcon}
      <span class="time"></span>
    </li>
  `;

  template.innerHTML = `
<style>
input{display:block;width:100%;height:36px;padding:0 14px;border:1px solid #c7c7c7;border-radius:4px;margin-top:6px}input:focus{position:relative;outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da;box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da;z-index:1}input[disabled]{color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}input[readonly]{border-color:transparent;background-color:transparent}ul{list-style-type:none;padding:0;margin:0}svg{fill:currentColor;vertical-align:top}:host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font:14px/18px Open Sans,Calibri,Tahoma,sans-serif}:host{position:relative;display:inline-block;max-width:400px;color:#252525}.pe-icon{position:absolute;color:#6a7070;pointer-events:none}.timepicker{position:relative}.timepicker .pe-icon{right:14px;top:33px;z-index:2}.timepicker-label{font-size:12px;line-height:16px;color:#6a7070}.timepicker-input{min-width:150px;margin-bottom:4px}.timepicker-input[aria-invalid=true]{border-color:#db0020;margin-bottom:0}.timepicker-input[aria-invalid=true]:focus{-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020;box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020}.timepicker-input[aria-invalid=true]~.timepicker-error{display:block}.timepicker-error{font-size:12px;line-height:16px;color:#db0020;margin-top:4px;margin-bottom:2px}.timepicker-error:empty{display:none}.listbox-wrapper{position:absolute;width:100%;z-index:999;visibility:hidden}:host([open]) .listbox-wrapper{visibility:visible}.listbox{min-width:220px;width:100%;max-height:300px;border:1px solid #c7c7c7;border-radius:2px;overflow-y:auto;background-color:#fff;visibility:hidden}.listbox-item{cursor:pointer;position:relative;padding:4px 24px}.listbox-item.focused,.listbox-item:hover{background-color:#e9e9e9}.listbox-item.focused{border-radius:4px;-webkit-box-shadow:inset 0 0 0 2px #0b73da;box-shadow:inset 0 0 0 2px #0b73da}.listbox-item .pe-icon{display:none;left:5px}.listbox-item.selected .pe-icon{display:block}.hidden{display:none}::-ms-clear{width:0;height:0}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}}@-webkit-keyframes fadeOutUp{0%{visibility:visible}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{visibility:visible}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{visibility:hidden;opacity:0}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{visibility:hidden;opacity:0}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s;visibility:visible}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s;visibility:hidden}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}
</style>
  <div class="timepicker">
    <label
      id="timepicker-label"
      class="timepicker-label"
      for="timepicker-input"
    >
      Select time (HH:MM AM/PM)
    </label>
    <input 
      type="text" 
      id="timepicker-input"
      class="timepicker-input"
      role="combobox"
      aria-autocomplete="list"
      aria-haspopup="listbox"
      aria-expanded="false"
      aria-owns="listbox"
    >
      ${clockIcon} 
    <p 
      id="timepicker-error"
      class="timepicker-error"
      role="alert"
      aria-live="assertive"
    ></p>
  </div>
  <div class="listbox-wrapper" role="presentation">
    <ul
      id="listbox"
      class="listbox animated"
      role="listbox"
      aria-labelledby="timepicker-label"
    ></ul>
  </div>
`;

  function calculate(increments) {
    const endTime = moment().add(24, 'h'),
      timeStops = [],
      startTime = moment().add(
        increments - (moment().minute() % increments),
        'm'
      );
    while (startTime < endTime) {
      timeStops.push(new moment(startTime));
      startTime.add(increments, 'm').format('LLL');
    }
    return timeStops;
  }

  const TIME_FORMATS = {
    '12': /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/,
    '24': /^([01]\d|2[0-3]):?([0-5]\d)$/
  };

  function buildTimeEl(time, index) {
    const li = timeItem.content.cloneNode(true),
      item = li.querySelector('li'),
      timeEl = li.querySelector('.time');
    item.setAttribute('data-time', time);
    item.setAttribute('data-idx', index);
    item.id = 'time-' + index;
    timeEl.innerHTML = time;
    return li;
  }

  function isVisible(el) {
    const rect = el.getBoundingClientRect(),
      parentRect = el.parentElement.getBoundingClientRect();

    // evaluate if the element is out of bounds
    // of its parent
    return (
      rect.top < parentRect.top + parentRect.height &&
      rect.top + rect.height > parentRect.top &&
      rect.bottom < parentRect.bottom &&
      rect.top > parentRect.top
    );
  }

  const find = Array.prototype.find;

  w.ShadyCSS && w.ShadyCSS.prepareTemplate(template, 'pearson-timepicker');

  class Timepicker extends HTMLElement {
    static get observedAttributes() {
      return ['open', 'readonly', 'disabled'];
    }

    get open() {
      return this.hasAttribute('open');
    }

    set open(value) {
      const isOpen = Boolean(value);

      if (isOpen) {
        if (this.selectedItem) this.selectedItem.scrollIntoView(true);

        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
    }

    get increments() {
      return this.getAttribute('increments') || '15';
    }

    get hours() {
      return this.getAttribute('hours');
    }

    get format() {
      return this.hours === '12' ? 'h:mm A' : 'HH:mm';
    }

    get pattern() {
      return TIME_FORMATS[this.hours];
    }

    // TODO: Ensure validation only happens
    // if format matches AND time exists in list
    set validity(isValid) {
      const { errorMsg, input } = this;
      if (isValid) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');
        errorMsg.innerHTML = '';
      } else {
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', 'timepicker-error');
        errorMsg.innerHTML = `${warningIcon}
        Enter a valid time.`;
      }
    }
    /**
     * The currently active listbox item
     * @type {HTMLElement}
     */
    get activeItem() {
      return this.activeIdx > -1 ? this.items[this.activeIdx] : null;
    }

    set activeItem(nextItem) {
      if (this.activeItem) {
        this.activeItem.classList.remove('focused');
        this.activeItem.setAttribute('aria-selected', 'false');
      }

      if (nextItem) {
        this.input.setAttribute(
          'aria-activedescendant',
          'time-' + nextItem.dataset.idx
        );
        nextItem.classList.add('focused');
        nextItem.setAttribute('aria-selected', 'true');

        this.activeIdx = Number(nextItem.dataset.idx);
      }
    }

    get selectedItem() {
      return this.selectedIdx > -1 ? this.items[this.selectedIdx] : null;
    }

    set selectedItem(nextItem) {
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

    get selectedTime() {
      return this.selectedItem ? this.selectedItem.dataset.time : null;
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.label = clone.querySelector('#timepicker-label');
      this.input = clone.querySelector('#timepicker-input');
      this.errorMsg = clone.querySelector('#timepicker-error');
      this.listbox = clone.querySelector('#listbox');

      this.shadowRoot.appendChild(clone);

      this.activeIdx = -1;
      this.selectedIdx = -1;
      this.plainTextTimes = [];

      this.onInputKeydown = this.onInputKeydown.bind(this);
      this.onInputFocus = this.onInputFocus.bind(this);
      this.onInputBlur = this.onInputBlur.bind(this);
      this.onListboxClick = this.onListboxClick.bind(this);
      this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'open') {
        const isOpen = newValue !== null;
        let activeDescendant, classToAdd, classToRemove;

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
        const isTruthy = newValue !== null;

        if (isTruthy) {
          this.input.setAttribute(name, name);
        } else {
          this.input.removeAttribute(name);
        }
      }

    }

    connectedCallback() {
      const defaultValue = this.getAttribute('defaultValue');
      const labelText = this.getAttribute('label') || '';
      
      // Emsure that IDs are unique since IE does not properly encapsulate them.
      const inputId = this.input.id + '-' + encodeURIComponent(labelText);

      this.input.id = inputId;
      
      this.label.setAttribute('for', inputId);
      this.label.textContent = `${labelText} (${
        this.hours === '12' ? 'HH:MM AM/PM' : 'HH:MM'
      })`;

      // The pattern attribute only works with expressions
      // that do not have slashes around them
      if (this.pattern !== undefined) {
        this.input.pattern = this.pattern.toString().slice(1, -1);
      }


      // TODO: repeat this every time listbox opens
      // TODO: filter items in list
      this.times = calculate(this.increments);
      this.times.forEach((time, index) => {
        const text = time.format(this.format);
        this.plainTextTimes[index] = text;
        this.listbox.appendChild(buildTimeEl(text, index));
      });

      this.items = this.listbox.children;

      // Set user-provided initial value if
      // it passes validation
      if (
        this.pattern !== undefined &&
        this.pattern.test(defaultValue) &&
        this.plainTextTimes.indexOf(defaultValue)
      ) {
        const idx = this.plainTextTimes.indexOf(defaultValue);
        this.selectedItem = this.items[idx];
      }

      this.input.addEventListener('focus', this.onInputFocus);
      this.input.addEventListener('keydown', this.onInputKeydown);
      this.input.addEventListener('blur', this.onInputBlur);

      this.listbox.addEventListener('click', this.onListboxClick, true);

      doc.addEventListener('click', this.onDocumentClick, true);
    }

    disconnectedCallback() {
      doc.removeEventListener('click', this.onDocumentClick, true);
    }

    checkSelection() {
      let { activeItem } = this;
      if (this.activeIdx === -1 && this.input.value === '') {
        return;
      }

      // if the string is different than the selectedItem, use it
      if (this.input.value !== this.selectedTime || !this.activeItem) {
        activeItem = find.call(this.items, i =>
          i.dataset.time.startsWith(this.input.value)
        );
      }

      this.selectedItem = activeItem;

      this.validity =
        this.input.checkValidity() && this.input.value === this.selectedTime;
    }

    onInputFocus() {
      this.open = true;
    }

    onInputKeydown(e) {
      const items = this.items;
      const key = e.key;
      const isDirectionalKey = key === keys.UP || key === keys.DOWN;

      let prevOpen = this.open;
      let activeIdx =
        !prevOpen && this.selectedIdx > -1 ? this.selectedIdx : this.activeIdx;

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

    onInputBlur(e) {
      this.checkSelection();
    }

    onListboxClick(e) {
      const target = e.target;

      if (target && target.nodeName === 'LI') {
        this.selectedItem = target;
        this.open = false;
      }
    }
    onDocumentClick(e) {
      if (e.target === this) return;
      this.open = false;
    }
  }

  customElements.define('pearson-timepicker', Timepicker);
})(window, document);

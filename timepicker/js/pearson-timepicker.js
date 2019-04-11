/* global moment */
(function(w, doc) {
  'use strict';
  const template = doc.createElement('template'),
    timeItem = doc.createElement('template'),
    isIE11 = !!window.MSInputMethodContext && !!doc.docMode,
    checkIcon = `
      <svg
        aria-hidden="true"
        focusable="false"
        style="width:18px;height:18px;fill:currentColor"
      >
        <path d="M7.35823097,13.99969 C7.08123097,13.99969 6.81423097,13.88469 6.62523097,13.67969 L4.26623097,11.13469 C3.89123097,10.72869 3.91523097,10.09669 4.32023097,9.72169 C4.72423097,9.34469 5.35623097,9.36869 5.73323097,9.77469 L7.25323097,11.41469 L12.182231,4.42369 C12.501231,3.97269 13.125231,3.86469 13.576231,4.18269 C14.027231,4.50069 14.135231,5.12469 13.817231,5.57569 L8.17523097,13.57569 C8.00223097,13.82269 7.72523097,13.97769 7.42423097,13.99769 C7.40223097,13.99869 7.38023097,13.99969 7.35823097,13.99969"/>
      </svg>
    `,
    clockIcon = `
      <svg
        aria-hidden="true"
        focusable="false"
        style="width:18px;height:18px;fill:currentColor" 
      >
        <path d="M13.1035,14.1035 C13.0055,14.2015 12.8775,14.2495 12.7495,14.2495 C12.6225,14.2495 12.4945,14.2015 12.3965,14.1035 L8.1475,9.8545 C8.1005,9.8075 8.0635,9.7525 8.0385,9.6905 C8.0135,9.6295 7.9995,9.5655 7.9995,9.4995 L7.9995,5.4995 C7.9995,5.2235 8.2235,4.9995 8.4995,4.9995 C8.7765,4.9995 8.9995,5.2235 8.9995,5.4995 L8.9995,9.2925 L13.1035,13.3965 C13.2985,13.5915 13.2985,13.9085 13.1035,14.1035 M8.9995,-0.0005 C4.0375,-0.0005 -0.0005,4.0375 -0.0005,8.9995 C-0.0005,13.9625 4.0375,17.9995 8.9995,17.9995 C13.9625,17.9995 17.9995,13.9625 17.9995,8.9995 C17.9995,4.0375 13.9625,-0.0005 8.9995,-0.0005"/>
      </svg>
    `,
    warningIcon = `
      <svg
        aria-hidden="true"
        focusable="false"
        style="width:18px;height:18px;fill:currentColor" 
      >
        <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>
    </svg>`;

  timeItem.innerHTML = `
    <li class="item" role="option" aria-selected="false" data-time="6:00 AM">
      <span class="pe-icon-wrapper">
				${checkIcon}
      </span>
      <span class="time"></span>
    </li>
  `;

  template.innerHTML = `
<style>
 *,.timepicker-container input{-webkit-box-sizing:border-box;box-sizing:border-box}.timepicker-container input{padding:0 14px;height:36px;width:100%;display:block;border-radius:3px;font-size:14px;line-height:18px;background-color:#fff;color:#252525;border:1px solid #c7c7c7;overflow:visible}.timepicker-container{min-width:150px;position:relative;max-width:400px;font-family:Open Sans,Calibri,Tahoma,sans-serif}.timepicker-container.error input{border-color:#d0021b}.timepicker-container.error label{color:#d0021b}.timepicker-container .timepicker{position:relative}.timepicker-container .timepicker input{padding-right:46px;text-transform:uppercase}.timepicker-container .timepicker .pe-textInput--basic.error{border-color:#d0021b}.timepicker-container .pe-icon-wrapper{color:#6a7070position:absolute;right:14px;bottom:calc(50% - 0px)}.timepicker-container .pe-textLabelInput__label.error{color:#d0021b}.timepicker-container .error-msg{color:#d0021b;margin-top:1px;margin-bottom:0;font-size:12px;line-height:18px}.timepicker-container .pe-dropdown-container{width:220px;padding:12px 0;position:absolute;top:46px;z-index:1000}.timepicker-container .pe-dropdown-container .itemList{margin:0;padding:4px 0;list-style-type:none;width:218px;max-height:300px;overflow-y:auto;border:1px solid #c7c7c7;border-radius:2px;background-color:#fff}.timepicker-container .pe-dropdown-container .itemList .item{padding:4px 24px;position:relative;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;font-size:14px}.timepicker-container .pe-dropdown-container .itemList .item .pe-icon-wrapper{color:#6a7070;position:absolute;left:6px;display:none}.timepicker-container .pe-dropdown-container .itemList .item:hover{background-color:#e9e9e9}.timepicker-container .pe-dropdown-container .itemList .item[aria-activedescendant=true]{background-color:#e9e9e9;outline:0}.timepicker-container .pe-dropdown-container .itemList .item[aria-activedescendant=true]:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:100%;height:-webkit-calc(100% + 4px);height:calc(100% + 4px);top:-2px;left:0;z-index:1}.timepicker-container .pe-dropdown-container .itemList.with-selection .pe-itemList-item{padding:4px 24px 4px 34px}.timepicker-container .pe-dropdown-container .itemList:empty{visibility:hidden}.timepicker-container.error .pe-dropdown-container{top:68px}.in-view{background-color:#e9e9e9}#inputAriaId{display:none}.error #inputAriaId{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@media (-ms-high-contrast:none){.pe-icon-wrapper{width:20px;height:23px}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}
.hidden {visibility: hidden}
</style>
  <div class="timepicker-container" role="combobox">
    <label class="pe-textLabelInput__label" for="timePickerInput">Select time (HH:MM AM/PM)</label>
    <input type="text" id="timePickerInput" class="pe-textInput--basic" role="combobox" aria-haspopup="true" aria-expanded="false" aria-controls="itemList" aria-owns="itemList" aria-autocomplete="none">
  <span class="pe-icon-wrapper">
    ${clockIcon}
  </span> 
  </div>
  <p id="inputAriaId" class="pe-input--error_message">
    ${warningIcon}
    Enter a valid time.
  </p>
  <div id="dropDown" class="pe-dropdown-container animated animateIn">
    <ul id="itemList" class="itemList" role="listbox" data-selected data-time-type="12 hour"></ul>
  </div>
`;

  function removeIcons(node) {
    const icons = node.querySelectorAll('.pe-icon-wrapper');
    return Array.prototype.forEach.call(icons, icon => {
      icon.style.display = 'none';
    });
  }

  function filterSelected(node, value) {
    return node.querySelector(`[data-time^='${value}']`);
  }

  function setSelectedFalse(node) {
    const items = node.querySelectorAll('#itemList li');
    return Array.prototype.forEach.call(items, item => {
      item.classList.remove('in-view');
      item.removeAttribute('aria-activedescendant');
      item.setAttribute('aria-selected', false);
    });
  }

  function getFocusableElements(node) {
    return node.querySelectorAll('[role^="option"]');
  }

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

  const TIME_FORMAT_REGEX = {
    '12': /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/,
    '24': /^([01]\d|2[0-3]):?([0-5]\d)$/
  };

  function buildTimeEl(time, index) {
    const li = timeItem.content.cloneNode(true),
      item = li.querySelector('li'),
      timeEl = li.querySelector('.time');
    item.setAttribute('data-time', time);
    item.setAttribute('data-index', index);
    item.id = 'time-' + index;
    timeEl.innerHTML = time;
    return li;
  }

  function isElementVisible(el, parent) {
    const rect = el.getBoundingClientRect(),
      parentRect = parent.getBoundingClientRect();

    // evaluate if the element is out of bounds
    // of its parent
    return (
      rect.top < parentRect.y + parentRect.height &&
      rect.top + rect.height > parentRect.y &&
      rect.bottom < parentRect.bottom &&
      rect.top > parentRect.top
    );

    // Return true if any of its four corners are visible
  }

  class Timepicker extends HTMLElement {
    static get observedAttributes() {
      return ['open'];
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

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.input = clone.querySelector('#timePickerInput');
      this.list = clone.querySelector('#itemList');

      this.shadowRoot.append(clone);

      this.onInputClick = this.onInputClick.bind(this);
      this.onInputKeyup = this.onInputKeyup.bind(this);
      this.onInputKeydown = this.onInputKeydown.bind(this);
      this.onInputFocus = this.onInputFocus.bind(this);
      this.onInputBlur = this.onInputBlur.bind(this);
      this.onListboxClick = this.onListboxClick.bind(this);
    }

    attributeChangedCallback(name, oldValue, newValue) {}

    connectedCallback() {
      this.timesToRender = this.calculateTimes(this.increments);
      this.timesToRender.forEach((time, index) => {
        const text = time.format(this.format);
        this.list.appendChild(buildTimeEl(text, index));
      });

      this.input.addEventListener('keydown', this.onInputKeydown);
      this.input.addEventListener('keyup', this.onInputKeyup);
    }

    disconnectedCallback() {}

    calculateTimes(increments) {
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

    onInputClick() {}

    onInputKeydown() {}
    onInputKeyup(e) {
      switch (e.key) {
        case 'Up':
        case 'Down':
        case 'Escape':
        case 'Enter':
          e.preventDefault();
          return;
      }
    }
    onInputFocus() {}
    onInputBlur() {}
    onListboxClick() {}
  }

  customElements.define('pearson-timepicker', Timepicker);
})(window, document);

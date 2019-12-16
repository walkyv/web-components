(function(w, doc) {
  'use strict';
  w['moment-range'].extendMoment(moment);
  // Create a template element
  const datepicker = doc.createElement('template'),
    calendar = doc.createElement('template'),
    row = doc.createElement('template'),
    dateTemplate = doc.createElement('template'),
    dateIcon = `

  
                  <svg focusable="false" class="icon-18" aria-hidden="false" title="close coachmark" role="img" >
	<path d="M14.4146471,2 L14.875,2 C16.0486051,2 17,2.95139491 17,4.125 L17,14.875 C17,16.0486051 16.0486051,17 14.875,17 L3.125,17 C1.95139491,17 1,16.0486051 1,14.875 L1,4.125 C1,2.95139491 1.95139491,2 3.125,2 L3.58535285,2 C3.79127106,1.41740381 4.34689059,1 5,1 C5.65310941,1 6.20872894,1.41740381 6.41464715,2 L11.5853529,2 C11.7912711,1.41740381 12.3468906,1 13,1 C13.6531094,1 14.2087289,1.41740381 14.4146471,2 Z M15.25,6.25 L15.25,4.125 C15.25,3.91789322 15.0821068,3.75 14.875,3.75 L3.125,3.75 C2.91789322,3.75 2.75,3.91789322 2.75,4.125 L2.75,6.25 L15.25,6.25 Z M15.25,8 L2.75,8 L2.75,14.875 C2.75,15.0821068 2.91789322,15.25 3.125,15.25 L14.875,15.25 C15.0821068,15.25 15.25,15.0821068 15.25,14.875 L15.25,8 Z"></path>
    <path d="M12.5,12 L13.5,12 C13.7761424,12 14,12.2238576 14,12.5 L14,13.5 C14,13.7761424 13.7761424,14 13.5,14 L12.5,14 C12.2238576,14 12,13.7761424 12,13.5 L12,12.5 C12,12.2238576 12.2238576,12 12.5,12 Z"></path>
    <path d="M12.5,9 L13.5,9 C13.7761424,9 14,9.22385763 14,9.5 L14,10.5 C14,10.7761424 13.7761424,11 13.5,11 L12.5,11 C12.2238576,11 12,10.7761424 12,10.5 L12,9.5 C12,9.22385763 12.2238576,9 12.5,9 Z"></path>
    <path d="M9.5,12 L10.5,12 C10.7761424,12 11,12.2238576 11,12.5 L11,13.5 C11,13.7761424 10.7761424,14 10.5,14 L9.5,14 C9.22385763,14 9,13.7761424 9,13.5 L9,12.5 C9,12.2238576 9.22385763,12 9.5,12 Z"></path>
    <path d="M9.5,9 L10.5,9 C10.7761424,9 11,9.22385763 11,9.5 L11,10.5 C11,10.7761424 10.7761424,11 10.5,11 L9.5,11 C9.22385763,11 9,10.7761424 9,10.5 L9,9.5 C9,9.22385763 9.22385763,9 9.5,9 Z"></path>
    <path d="M6.5,12 L7.5,12 C7.77614237,12 8,12.2238576 8,12.5 L8,13.5 C8,13.7761424 7.77614237,14 7.5,14 L6.5,14 C6.22385763,14 6,13.7761424 6,13.5 L6,12.5 C6,12.2238576 6.22385763,12 6.5,12 Z"></path>
       </svg>
    `,
    calendarIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4 3L5 3 5 1 4 1 4 3zM13 3L14 3 14 1 13 1 13 3zM18 5L18 1.5C18 1.224 17.776 1 17.5 1L15 1 15 .5C15 .224 14.776 0 14.5 0L12.5 0C12.224 0 12 .224 12 .5L12 1 6 1 6 .5C6 .224 5.776 0 5.5 0L3.5 0C3.224 0 3 .224 3 .5L3 1 .5 1C.224 1 0 1.224 0 1.5L0 5 18 5zM14.0762 15L10.8262 15C10.5502 15 10.3262 14.776 10.3262 14.5 10.3262 14.224 10.5502 14 10.8262 14L12.0002 14 12.0002 9.707 11.3752 10.331C11.1802 10.526 10.8632 10.526 10.6682 10.331 10.4722 10.136 10.4722 9.819 10.6682 9.624L12.1462 8.146C12.2892 8.003 12.5062 7.96 12.6912 8.038 12.8782 8.116 13.0002 8.298 13.0002 8.5L13.0002 14 14.0762 14C14.3522 14 14.5762 14.224 14.5762 14.5 14.5762 14.776 14.3522 15 14.0762 15L14.0762 15zM9.0002 14.5C9.0002 14.776 8.7762 15 8.5002 15L4.5002 15C4.2232 15 4.0002 14.776 4.0002 14.5L4.0002 13.5C4.0002 13.224 4.2232 13 4.5002 13 4.7762 13 5.0002 13.224 5.0002 13.5L5.0002 14 8.0002 14 8.0002 12 5.6992 12C5.4232 12 5.1992 11.776 5.1992 11.5 5.1992 11.224 5.4232 11 5.6992 11L8.0002 11 8.0002 9 5.0002 9 5.0002 9.5C5.0002 9.776 4.7762 10 4.5002 10 4.2232 10 4.0002 9.776 4.0002 9.5L4.0002 8.5C4.0002 8.224 4.2232 8 4.5002 8L8.5002 8C8.7762 8 9.0002 8.224 9.0002 8.5L9.0002 14.5zM.0002 6L.0002 17.5C.0002 17.776.2232 18 .5002 18L17.5002 18C17.7762 18 18.0002 17.776 18.0002 17.5L18.0002 6 .0002 6z\'/%3e%3c/svg%3e',
    prevArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M13.749,17.6606035 C14.112,17.2486035 14.076,16.6116035 13.662,16.2436035 L5.509,8.9996035 L13.662,1.7566035 C14.077,1.3896035 14.113,0.752603504 13.749,0.339603504 C13.383,-0.0763964961 12.751,-0.115396496 12.338,0.252603504 L3.338,8.2476035 C3.123,8.4376035 3,8.7126035 3,8.9996035 C3,9.2876035 3.123,9.5616035 3.338,9.7526035 L12.338,17.7476035 C12.751,18.1156035 13.383,18.0766035 13.749,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
    nextArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4.2506,17.6606035 C3.8876,17.2486035 3.9236,16.6116035 4.3376,16.2436035 L12.4906,8.9996035 L4.3376,1.7566035 C3.9226,1.3896035 3.8866,0.752603504 4.2506,0.339603504 C4.6166,-0.0763964961 5.2486,-0.115396496 5.6616,0.252603504 L14.6616,8.2476035 C14.8766,8.4376035 14.9996,8.7126035 14.9996,8.9996035 C14.9996,9.2876035 14.8766,9.5616035 14.6616,9.7526035 L5.6616,17.7476035 C5.2486,18.1156035 4.6166,18.0766035 4.2506,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
  warningIcon = `   
  <svg     
    aria-hidden="true"
    focusable="false" 
    style="width:18px;height:18px;fill:currentColor"  
  >  
    <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>
</svg>`;


  datepicker.innerHTML = ` 
<style>

:host{position:relative;display:inline-block;max-width:400px;width:100%;color:#252525}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Open Sans,Calibri,Tahoma,sans-serif}:host input[disabled]{color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}:host input[readonly]{border-color:transparent;background-color:transparent}:host ul{list-style-type:none;padding:0;margin:0}:host svg{vertical-align:top}:host .gr-icon{position:absolute;color:#6a7070;pointer-events:none}:host .gr-datepicker-container{position:relative;min-width:150px;max-width:322px}@media (-ms-high-contrast:none){:host .gr-datepicker-container{max-width:362px}}:host .gr-datepicker-container .datepicker{position:relative;margin-bottom:6px}:host .gr-datepicker-container .datepicker .gr-btn{bottom:-webkit-calc(50% - 17px);bottom:calc(50% - 17px);color:#6a7070;position:absolute;right:0;margin:0;border-radius:4px}@media (-ms-high-contrast:none){:host .gr-datepicker-container .datepicker .gr-btn{bottom:-6px!important}}:host .gr-datepicker-container .datepicker .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 0 #fff,0 0 0 2px #1977d4;box-shadow:0 0 0 0 #fff,0 0 0 2px #1977d4}:host .gr-datepicker-container .datepicker svg{fill:#6a7070}:host .gr-datepicker-container .gr-calendar-container{position:absolute}:host .gr-datepicker-container.error .gr-label{color:#db0020}:host .gr-datepicker-container.error .gr-input{border-color:#db0020}:host #inputAriaId{display:none}:host .error #inputAriaId{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host .gr-calendar-container{-webkit-box-sizing:content-box;box-sizing:content-box;min-height:284px;color:#252525;padding:16px 20px 20px;z-index:1;border:1px solid #c7c7c7;background-color:#fff;border-radius:5px}@media (-ms-high-contrast:none){:host .gr-calendar-container{width:320px}}:host .gr-calendar-container fieldset{margin:0;border:0;padding:0}:host .gr-calendar-container fieldset legend{padding:8px;text-align:left;margin-bottom:8px;width:-webkit-calc(100% - 84px);width:calc(100% - 84px);display:inline-block;float:left;font-size:18px}:host .gr-calendar-container .actions{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:80px}:host .gr-calendar-container .actions .gr-btn{margin:0;padding:0;height:40px;width:40px;color:#6a7070}:host .gr-calendar-container .actions .gr-btn:hover{color:#252525}:host .gr-calendar-container .actions .gr-btn:focus{color:#252525;outline:2px solid #1977d4;outline-offset:2px}:host .gr-calendar-container .weekdays div{height:40px;color:#6a7070;line-height:40px;font-size:12px}:host .gr-calendar-container .row{display:grid;grid-template-columns:repeat(7,40px);clear:both}:host .gr-calendar-container abbr{text-decoration:none}:host .gr-calendar-container .cell{display:inline-block;vertical-align:top;text-align:center;width:40px;height:40px}:host .gr-calendar-container .cell.currentDate-box{width:36px;height:36px;margin:1px;line-height:36px;border-radius:0;padding:0;border:1px solid #c7c7c7;background:transparent}:host .gr-calendar-container .cell.currentDate-box .date-selector{margin:2px}:host .gr-calendar-container .cell button{background:none;padding:0;border:0;position:relative;cursor:pointer;display:block;height:32px;width:32px;margin:4px;line-height:32px;border-radius:50%;font-size:14px}:host .gr-calendar-container .cell button.selected{font-weight:600;color:#fff;background-color:#6a7070}:host .gr-calendar-container .cell button:focus{outline:2px solid #1977d4;outline-offset:2px}:host .gr-calendar-container .date-selector{height:32px;width:32px;margin:4px;line-height:32px;border-radius:16px}:host .gr-calendar-container .date.past{height:40px;line-height:38px}:host .gr-calendar-container .past .date-selector{color:#c7c7c7;cursor:not-allowed}:host .gr-calendar-container .secondary-date{border:1px solid #c7c7c7}:host .gr-calendar-container.inverse{color:#fff;background-color:#005a70;border:1px solid #005a70}:host .gr-calendar-container.inverse .actions button,:host .gr-calendar-container.inverse .cell,:host .gr-calendar-container.inverse .date-selector,:host .gr-calendar-container.inverse .title,:host .gr-calendar-container.inverse .weekdays div{color:#fff}:host .gr-calendar-container.inverse .actions button:focus,:host .gr-calendar-container.inverse .actions button:hover{color:#c7c7c7}:host .gr-calendar-container.inverse .date .selected{color:#252525;background-color:#fff}:host .gr-calendar-container.inverse .past .date-selector{color:#047a9c;cursor:not-allowed}:host .gr-btn{padding:0;background-color:transparent;border:0}:host .date-selector{background:none}:host .date-selector:hover{background-color:#e9e9e9;color:#252525;cursor:pointer}:host .date-selector.selected{background-color:#6a7070;color:#fff}:host .currentDate-box{border:1px solid #c7c7c7}@media (-ms-high-contrast:none){:host .dates>.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}@media (-ms-high-contrast:none){:host .gr-calendar-container .row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}:host *{font-family:Open Sans}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host abbr{text-decoration:none}:host html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}:host svg{fill:currentColor}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px}:host .gr-btn:hover{color:#252525;border:1px solid #252525}:host .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}:host .gr-btn.primary:hover{color:#fff;background-color:#035f79}:host .gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}:host .gr-btn.attention:hover{background-color:#f7aa00}:host .gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}:host .gr-btn.small:focus:after{padding:18px 21px}:host .gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}:host .gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}:host .gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}:host .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}:host .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}:host .gr-btn.no-border{border:0}:host .gr-btn.no-border:hover{border:0}:host .gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}:host .gr-input{display:block;margin:4px 0;padding:0 12px;height:36px;color:#252525;border:1px solid #c7c7c7;background:#fff;border-radius:4px;font-size:14px;width:100%;max-width:100%}:host .gr-input.error{border-color:#db0020}:host .gr-input[aria-invalid=true]{border-color:#db0020;margin-bottom:0}:host .gr-input[aria-invalid=true]:focus{-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020;box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020}:host .gr-input:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-input:disabled{color:#c7c7c7;background-color:#e9e9e9}:host .gr-input:-moz-read-only{border:0}:host .gr-input:read-only{border:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host button:focus{outline:2px solid #1977d4;outline-offset:2px}:host .error-msg,:host .gr-meta.error{color:#db0020;padding-top:3px;font-size:12px;line-height:16px;margin-bottom:0;margin-top:0}
</style>      
    <div class="gr-datepicker-container">
        <label class="gr-label" for="datepicker" id="datepicker-label">Select date (mm/dd/yyyy)</label> 
        <div class="datepicker">
            <input type="text" class="gr-input" id="datepicker" aria-expanded="false">
              <button class="gr-btn icon-btn-18 open-calendar" aria-label="open calendar">
                             ${dateIcon}
              </button>
        </div> 
        <p id="inputAriaId" class="error-msg">${warningIcon} Enter a valid date.</p>
    </div>
`;

  calendar.innerHTML = `
        <section class="gr-calendar-container animated animateIn">
            <div class="calendar">
                <fieldset class="pe-inner">
                    <legend class="gr-h3" id="month"></legend>
                    <div class="actions">
                        <button class="gr-btn icon-btn-24 previous" aria-label="Previous month">
                           <img src="${prevArrowIcon}" aria-hidden="true"/>
                        </button>
                        <button class="gr-btn icon-btn-24 next" aria-label="Next month">
                            <img src="${nextArrowIcon}" aria-hidden="true"/>
                        </button>
                    </div>
                    <div class="row weekdays">
                        <div class="cell dayNames">
                            <abbr title="Sunday">S</abbr>
                        </div>
                        <div class="cell dayNames">
                            <abbr title="Monday">M</abbr>
                        </div>
                        <div class="cell dayNames">
                            <abbr title="Tuesday">T</abbr>
                        </div>
                        <div class="cell dayNames">
                            <abbr title="Wednesday">W</abbr>
                        </div>
                        <div class="cell dayNames">
                            <abbr title="Thursday">T</abbr>
                        </div>
                        <div class="cell dayNames">
                            <abbr title="Friday">F</abbr>
                        </div>
                        <div class="cell dayNames">
                            <abbr title="Saturday">S</abbr>
                        </div>
                    </div>
                    <div class="dates"></div>
                </fieldset>
            </div>
        </section>
`

  row.innerHTML = `
<div class="row"></div>
`

  dateTemplate.innerHTML = `
 <div class="cell date">
      <button class="date-selector" data-date="11/01/2018" aria-label="" aria-pressed="false">1</button>
  </div>
  `

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(datepicker, 'pearson-datepicker');

  function getFocusableElements(node) {
    const buttons = node.querySelectorAll('button:not(:disabled)'),
      data = {};
    data.elements = buttons;
    data.firstElement = data.elements[0];
    data.lastElement = data.elements[data.elements.length - 1];
    return data;
  }

  function validateDate(testdate) {
    var date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;
    return date_regex.test(testdate);
  }

  // helpers
  class Datepicker extends HTMLElement {
    static get observedAttributes() {
      return ['open', 'year', 'month', 'day', 'value'];
    }

    get open() {
      return this.getAttribute('open');
    }

    get year() {
      return this.getAttribute('year');
    }

    get month() {
      return this.getAttribute('month');
    }

    get day() {
      return this.getAttribute('day');
    }

    get selected() {
      return this.getAttribute('value');
    }

    set monthYearState(str) {
      this.shadowRoot.querySelector('legend').innerHTML = str
    }
    set openState(bool) {
      this.setAttribute('open', bool)
    }

    set invalid(bool) {
      const datepicker = this.shadowRoot.querySelector('.gr-datepicker-container'),
        input = datepicker.querySelector('input');
      if (bool === false) {
        datepicker.classList.add('error');
      } else {
        this.selectedState = input.value;
        this.data.month = parseInt(input.value.substring(0,2) - 1,10)
        this.data.year = parseInt(input.value.substring(6,10), 10)
        this.data.day = input.value.substring(3,5)
        console.log(this.data)
        datepicker.classList.remove('error')
      }

    }

    set selectedState(selected) {
      if (selected !== null) {
        const input = this.shadowRoot.querySelector('input');
        this.setAttribute('value', selected)
        input.value = this.selected
        this.data.month = parseInt(this.selected.substring(0,2) - 1,10)
        this.data.year = parseInt(this.selected.substring(6,10), 10)
        this.data.day = this.selected.substring(3,5)
      }
    }

    // this data is fed to the calendar data function and is used to build the calendar object
    returnDateData(date, type) {
      // return the year to populate calendar
      if (this.year !== null && type === undefined) {
        date.year = parseInt(this.year, 10);
      } else if (type !== undefined) {
        date.year = date.year;
      } else {
        date.year = parseInt(moment().format('Y'), 10);
      }

      // return the month to populate calendar
      if (this.month !== null && type === undefined) {
        date.month = parseInt(this.month - 1, 10);
      } else if (type !== undefined) {
        if (type === 'add') {
          date.month = date.month + 1
          if (date.month === 12) {
            date.month = 0
            date.year = date.year + 1;
          }
        } else if (type === 'subtract') {
          // date.month = moment().subtract(date.month, 'month').month();
          date.month = date.month -1
          if (date.month === -1) {
            date.month = 11
            date.year = date.year - 1;
          }
        }
      } else {
        date.month = moment().month();
      }

      // return the day to populate calendar
      if (this.day !== null) {
        date.day = this.day;
      } else {
        date.day = moment().format('D');
      }
      return date
    }

    // builds the calendar object to power the UI
    returnCalendarData(returnData) {
      let data = returnData,
        date = moment([data.year, data.month]),
        firstDay = moment(date).startOf('M').day('Sunday'),
        endDay = moment(date).endOf('M').day('Saturday'),
        monthRange = moment.range(firstDay, endDay),
        weeks = [],
        calendar = [],
        build = [],
        calendarData = {};

      for (let day of monthRange.by('days')) {
        let number;
        if (weeks.indexOf(day.week()) === -1 && weeks.indexOf(53) === -1) {
          if (data.month === 11 && day.week() === 1) {
            number = 53
          } else {
            number = day.week();
          }
          weeks.push(number);
        }
      }

      weeks.forEach((week, index) => {
        const weeknumber = weeks[index];
        let firstWeekDay = moment(firstDay).week(weeknumber).day('Sunday');
        if (firstWeekDay.isBefore(firstDay)) {
          firstWeekDay = firstDay;
        }
        let lastWeekDay = moment(endDay).year(data.year).week(weeknumber).day('Saturday');
        if (lastWeekDay.isAfter(endDay)) {
          lastWeekDay = endDay;
        }
        let weekRange = moment.range(firstWeekDay, lastWeekDay);
        calendar.push(weekRange)
      });

      calendar.forEach(range => {
        const weeks = [];
        for (let day of range.by('days')) {
          weeks.push(day)
        }
        build.push(weeks);
      });
      calendarData.month = moment(date).startOf('M').format("MMMM");
      calendarData.year = data.year;
      calendarData.weeks = build;
      return calendarData
    }

    // builds and renders next month
    nextMonth() {
      this.data = this.returnDateData(this.data, 'add');
      this.renderCalendar(this.data);
    }

    // builds and renders previous month
    prevMonth() {
      this.data = this.returnDateData(this.data, 'subtract');
      this.renderCalendar(this.data);
    }

    // opens the calendar
    openCalendar() {
      this.openState = 'true'
      this.renderCalendar(this.data);
      this.focusOnOpen();
    }

    // closes the calendar
    closeCalendar() {
      this.openState = 'false'
      this.openBtn.focus();
    }

    // builds the calendar template
    buildCalendarContainer() {
      const calendarTemplate = calendar.content.cloneNode(true),
        nextBtn = calendarTemplate.querySelector('.next'),
        prevBtn = calendarTemplate.querySelector('.previous');

      nextBtn.addEventListener('click', this.nextMonth, false);
      prevBtn.addEventListener('click', this.prevMonth, false);

      return calendarTemplate;
    }

    // populates and renders the calendar
    renderCalendar(dateData) {
      const data = this.returnCalendarData(dateData),
        rowTarget = this.shadowRoot.querySelector('.dates');

      rowTarget.innerHTML = ''

      data.weeks.forEach((week, index2) => {
        const rowTemplate = row.content.cloneNode(true),
          rows = rowTemplate.querySelector('.row');

        week.forEach((days, index) => {
          const cellTemplate = dateTemplate.content.cloneNode(true),
            button = cellTemplate.querySelector('button');
          if (days.format('MMMM') === data.month) {
            button.innerHTML = days.format('D');
            button.setAttribute('aria-label', days.format('dddd, MMMM Do YYYY'))
            button.setAttribute('data-date', days.format('L'))
            button.setAttribute('data-index', days.format('D'));
            button.addEventListener('click', event => {
              const prevSelected = rowTarget.getElementsByClassName('selected')[0];
              if (prevSelected !== undefined) {
                prevSelected.classList.remove('selected');
                prevSelected.setAttribute('aria-pressed', false);
              }
              this.selectedState = event.target.getAttribute('data-date');
              event.target.setAttribute('aria-pressed', true);
              event.target.classList.add('selected');
              this.invalid = validateDate(this.input.value);
              this.closeCalendar();
            })
          } else {
            button.remove();
          }

          if (days.format('MMMM') === moment().format('MMMM') && moment().format('D') === days.format('D') && days.format('YYYY') === moment().format('YYYY')) {
            button.parentNode.classList.add('currentDate-box')
            button.setAttribute('aria-label', 'Today ' + days.format('dddd, MMMM Do YYYY'))
          }
          rows.appendChild(cellTemplate)
        });
        rowTarget.appendChild(rowTemplate)
      });
      this.monthYearState = data.month + ' ' + data.year
      const selectedNode = this.shadowRoot.querySelector(`[data-date="${this.selected}"]`);
      if (selectedNode !== null) {
        selectedNode.classList.add('selected');
      }
    }

    // focus management when calendar is opened
    focusOnOpen() {
      if (this.selected === null) {
        const currentNode = this.shadowRoot.querySelector('.currentDate-box button');
        if (currentNode !== null) {
          currentNode.focus();
          currentNode.setAttribute('aria-pressed', true)
        }
      } else {
        const selectedNode = this.shadowRoot.querySelector(`[data-date="${this.selected}"]`);
        if (selectedNode !== null) {
          selectedNode.classList.add('selected');
          selectedNode.focus();
          selectedNode.setAttribute('aria-pressed', true)

        }
      }
    }

    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
      const clone = datepicker.content.cloneNode(true);
      this.openBtn = clone.querySelector('.open-calendar');
      this.datepicker = clone.querySelector('.gr-datepicker-container');
      this.input = clone.querySelector('input');
      this.label = clone.querySelector('#datepicker-label');
      this.data = {};
      /** After all this, we can append our clone to the shadowRoot */
      this.shadowRoot.appendChild(clone);

      this.returnDateData = this.returnDateData.bind(this);
      this.buildCalendarContainer = this.buildCalendarContainer.bind(this);
      this.returnCalendarData = this.returnCalendarData.bind(this);
      this.nextMonth = this.nextMonth.bind(this);
      this.prevMonth = this.prevMonth.bind(this);
      this.renderCalendar = this.renderCalendar.bind(this);
      this.closeCalendar = this.closeCalendar.bind(this);
      this.openCalendar = this.openCalendar.bind(this);
      this.focusOnOpen = this.focusOnOpen.bind(this);
    }

    connectedCallback() {
        const labelText = this.getAttribute('label') || 'Select date (mm/dd/yyyy)';

        this.label.textContent = `${labelText}`;


      this.setAttribute('open', false)
      this.data = this.returnDateData(this.data);

      this.selectedState = this.selected
      // opens calendar when down arrow is pushed
      this.input.addEventListener('keydown', event => {
        switch (event.keyCode) {
          case 40:
            if (this.open === 'false') {
              this.openCalendar();
            }
            break
        }
      });

      this.input.addEventListener('blur', event => {
        if (this.input.value.length > 0) {
          this.invalid = validateDate(this.input.value);
        }
      });

      // opens calendar when button is pressed
      this.openBtn.addEventListener('click', event => {
        if (this.open === 'false') {
          this.openCalendar();
        } else {
          this.closeCalendar();
        }
      });

      doc.body.addEventListener('click', event => {
        console.log(event.target)
      })

    }

    attributeChangedCallback(name, oldValue, newValue) {
      const calendarContainer = this.datepicker.querySelector('.gr-calendar-container'),
        input = this.datepicker.querySelector('input');
      if (name === 'open') {
        if (oldValue !== newValue) {
          if (newValue === 'true') {
            input.setAttribute('aria-expanded', true)
            let calendarTemplate = this.buildCalendarContainer();
            const dates = calendarTemplate.querySelector('.dates');
            this.datepicker.appendChild(calendarTemplate);
            this.monthYearState = moment().month(this.data.month).format('MMMM') + ' ' + this.data.year

            // closes the calendar if outside the calendar target
            doc.addEventListener('click', event => {
                if (this.open === 'true') {
                  let target = event.target;
                  do {
                    if (target === this) {
                      return;
                    }
                    target = target.parentNode;
                  } while (target);
                  this.closeCalendar();
                } else {
                return false
                }
            }, true);

            // closes the calendar on escape
            doc.addEventListener('keydown', event => {
              switch (event.keyCode) {
                case 27:
                  this.closeCalendar();
                  break;
              }
            });

            // keyboard navigation for accessibility
            dates.addEventListener('keydown', event => {
              const nextItem = parseInt(event.target.getAttribute('data-index')),
                prevItem = parseInt(event.target.getAttribute('data-index')) - 2,
                nextWeek = parseInt(event.target.getAttribute('data-index')) + 6,
                prevWeek = parseInt(event.target.getAttribute('data-index')) - 8,
                previousMonth = this.datepicker.querySelector('.previous');

              event.preventDefault();
              event.stopImmediatePropagation();
              switch (event.keyCode) {
                case 39: // right arrow
                  if (this.shadowRoot.activeElement === getFocusableElements(dates).lastElement) {
                    this.nextMonth();
                    getFocusableElements(dates).firstElement.focus();
                  } else {
                    if (getFocusableElements(dates).elements[nextItem] !== undefined) {
                      getFocusableElements(dates).elements[nextItem].focus();
                    } else {
                      return
                    }
                  }
                  break;
                case 37: // left arrow
                  if (this.shadowRoot.activeElement === getFocusableElements(dates).firstElement) {
                    this.prevMonth();
                    getFocusableElements(dates).lastElement.focus();

                  } else {
                    if (getFocusableElements(dates).elements[prevItem] !== undefined) {
                      getFocusableElements(dates).elements[prevItem].focus();
                    } else {
                      return
                    }
                  }
                  break;
                case 40: //arrow down
                  if (getFocusableElements(dates).elements[nextWeek] !== undefined) {
                    getFocusableElements(dates).elements[nextWeek].focus();
                  } else {
                    this.nextMonth();
                    getFocusableElements(dates).firstElement.focus();
                  }
                  break;
                case 38: // arrow up
                  if (getFocusableElements(dates).elements[prevWeek] !== undefined) {
                    getFocusableElements(dates).elements[prevWeek].focus();
                  } else {
                    this.prevMonth();
                    getFocusableElements(dates).lastElement.focus();
                  }
                  break;
                case 13: // enter
                  event.target.click();
                  break;
                case 32: // space
                  event.target.click();
                  break;
                case 33:
                  this.prevMonth();
                  getFocusableElements(dates).lastElement.focus();
                  break;
                case 34:
                  this.nextMonth();
                  getFocusableElements(dates).firstElement.focus();
                  break;
                case 35:
                  getFocusableElements(dates).lastElement.focus();
                  break;
                case 36:
                  getFocusableElements(dates).firstElement.focus();
                  break;
                case 27:
                  this.closeCalendar();
                  break;
                case 9:
                  previousMonth.focus();
                  break;
              }
            })
          }
          if (newValue === 'false' && calendarContainer !== null) {
            calendarContainer.remove();
            input.setAttribute('aria-expanded', false)
          }
        }
      }
    }


  }
  customElements.define('pearson-datepicker', Datepicker);
})(window, document);

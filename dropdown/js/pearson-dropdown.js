(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template'),
        button = doc.createElement('template'),
        menu = doc.createElement('template'),
        item = doc.createElement('template'),
        check = `
            <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
                <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
            </svg>
        `,
        close = `
            <svg id="close-24" viewBox="0 0 24 24" style="width:24px; height:24px;">
                <path d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"></path>
            </svg>
        `;

  template.innerHTML = ` 
  <style> 

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host template{display:none}:host [hidden]{display:none}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host svg{fill:#252525}:host svg[focusable=false]:focus{outline:none}:host input,:host textarea{font:inherit;letter-spacing:inherit;word-spacing:inherit}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px;line-height:1.15}:host .gr-btn:hover{color:#252525;border:1px solid #252525}:host .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host a.gr-btn{text-decoration:none}:host .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}:host .gr-btn.primary:hover{color:#fff;background-color:#035f79}:host .gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}:host .gr-btn.attention:hover{background-color:#f7aa00}:host .gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}:host .gr-btn.small:focus:after{padding:18px 21px}:host .gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}:host .gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}:host .gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}:host .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0;margin:0;height:48px;width:48px}:host .gr-btn.icon-btn-24:focus{border-radius:4px}:host .gr-btn.icon-btn-24:hover svg{fill:#047a9c}:host .gr-btn.icon-btn-24:active svg{fill:#005a70}:host .gr-btn.icon-btn-24 svg{fill:#6a7070}:host .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0;margin:0;height:48px;width:48px}:host .gr-btn.icon-btn-18:hover svg{fill:#047a9c}:host .gr-btn.icon-btn-18:active svg{fill:#005a70}:host .gr-btn.icon-btn-18:focus{border-radius:4px}:host .gr-btn.icon-btn-18 svg{fill:#6a7070}:host .gr-btn.no-border{border:0}:host .gr-btn.no-border:hover{border:0}:host .gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}:host .gr-dropdown-container .gr-btn{margin:0;font-size:14px;font-weight:700}:host .gr-dropdown-container .gr-btn svg{margin-left:1em}:host .gr-dropdown-container .dropdown-menu{position:absolute;z-index:10;margin-top:-9px;-ms-overflow-style:none}:host .gr-dropdown-container .mobile-group{background:#f5f5f5;border-bottom:1px solid #e9e9e9;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;padding:24px;position:relative;top:-27px;z-index:10;overflow:hidden}:host .gr-dropdown-container .mobile-group span{width:100%;text-align:center}:host .gr-dropdown-container .mobile-group button{margin:0 0 0 12px}:host .gr-dropdown-container .menu{background-color:#fff;position:absolute}:host .gr-dropdown-container .menu button{background:none;border:0;font-size:14px}:host .gr-dropdown-container .menu button>*{pointer-events:none}:host .gr-dropdown-container .menu button:focus{outline:none}:host .gr-dropdown-container .menu button:focus:after{border:2px solid #1977d4;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + -10px);width:calc(100% + -10px);height:100%;top:0;left:5px;z-index:1}:host .gr-dropdown-container .menu{list-style-type:none;padding:1em 0;border:1px solid #d9d9d9;border-radius:2px;margin-top:0;top:16px;position:relative}:host .gr-dropdown-container [aria-checked=false] svg{display:none}:host .gr-dropdown-container [aria-checked=true] svg{display:inline-block}:host .gr-dropdown-container .seperator{padding-bottom:6px;margin-bottom:6px;border-bottom:1px solid #d9d9d9}:host .gr-dropdown-container li button{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-decoration:none;width:100%;color:#252525;text-align:left;padding:0}:host .gr-dropdown-container li button:hover{background-color:#e9e9e9}:host .gr-dropdown-container li button svg{position:absolute;left:12px}:host .gr-dropdown-container .option-text{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:5px 24px 5px 34px;width:100%}:host .gr-dropdown-container .divider{border-bottom:1px solid #c7c7c7;padding-bottom:8px;margin:0 25px}:host .gr-dropdown-container .divider+li{margin-top:8px}:host .gr-dropdown-container .truncate{max-width:100%;width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:480px){:host .gr-dropdown-container li{padding:8px 4px}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){:host .gr-dropdown-container .menu li button[aria-checked=true] svg{top:4px}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}:host .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){:host .animated{-webkit-animation:unset!important;animation:unset!important}}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}:host .gr-dropdown-container .menu button:focus:after{top:-2px}:host .gr-btn,:host button{font-family:Open Sans,Arial,Helvetica,sans-serif;font-weight:400;font-size:14px;font-weight:400!important}:host .gr-btn.text{border:0}:host pearson-dropdown:slotted{display:none}:host #collapse-18,:host #expand-18{position:relative;top:-2px}:host .collapse-icon{display:none}:host .primary svg{fill:#fff}:host .gr-dropdown-container .menu{border-radius:4px;width:220px;max-height:300px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);overflow:scroll}:host .gr-dropdown-container .gr-btn svg{margin-left:8px}
   </style>
  <div class="gr-dropdown-container">
  
  </div>
`;

  button.innerHTML = `
  <button data-action="trigger" aria-haspopup="true" aria-expanded="false" class="gr-btn">
     <span class="dropdown-text"></span>
     <div class="expand-icon">
        <svg id="expand-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
          <path d="M8.09674611,10 L15.8979188,10 C16.5051081,10 16.9973323,10.4907428 16.9973323,11.0961048 C16.9973323,11.390812 16.8782997,11.6731038 16.6670916,11.8792872 L12.7665053,15.6870775 C12.3391074,16.1043075 11.6555575,16.1043075 11.2281596,15.6870775 L7.32757328,11.8792872 C6.89372798,11.4557632 6.88639729,10.7617864 7.31119972,10.3292468 C7.51800543,10.1186744 7.80114936,10 8.09674611,10 Z"></path>            
        </svg>
    </div>
    <div class="collapse-icon">
          <svg id="collapse-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
              <path d="M8.09674611,15 C7.80114936,15 7.51800543,14.8813256 7.31119972,14.6707532 C6.88639729,14.2382136 6.89372798,13.5442368 7.32757328,13.1207128 L11.2281596,9.31292251 C11.6555575,8.8956925 12.3391074,8.8956925 12.7665053,9.31292251 L16.6670916,13.1207128 C16.8782997,13.3268962 16.9973323,13.609188 16.9973323,13.9038952 C16.9973323,14.5092572 16.5051081,15 15.8979188,15 L8.09674611,15 Z"></path>            
          </svg>
    </div>
  </button>
  `;

  menu.innerHTML = `
  <div class="dropdown-menu animateIn" data-action="menu">
			<ul role="menu" class="menu">
			  <slot></slot>
			</ul>
	</div>
  `

  item.innerHTML = `
  <li role="none" >
    <button role="menuitemradio" aria-checked="false">
         ${check}
      <span class="option-text">Option One</span>
    </button>
  </li>
  `

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-dropdown');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  function getFocusableElements(node) {
    return node.querySelectorAll('[role^="menuitemradio"]');
  }

  function buildListItems (content, component, menu, index, checked) {
    const li = item.content.cloneNode(true),
      text = li.querySelector('.option-text'),
      button = li.querySelector('button');

    text.innerHTML = content.text;
    if (content.value) {
      if (content.id === content.value) {
        button.setAttribute('aria-checked', true);

      }
    }
    if (content.divider === true) {
      button.parentNode.classList.add('seperator');
    }

    if (checked !== undefined && checked.length > 0) {
      checked.forEach(item => {
        if (parseInt(item.getAttribute('data-index')) === index) {
          button.setAttribute('aria-checked', true);
        }
      })
    }

    button.setAttribute('data-id', content.id);
    button.setAttribute('data-index', index);
    button.addEventListener('click', event => {
      // unless multi select, only select one item at a time.

      if (content.multiSelect) {
        const ariaChecked = event.target.getAttribute('aria-checked');
        if (ariaChecked === 'false') {
          event.target.setAttribute('aria-checked', true)
        } else {
          event.target.setAttribute('aria-checked', false)
        }
      } else {
        const focusItems = getFocusableElements(event.target.parentNode.parentNode);
        focusItems.forEach(item => {
          item.setAttribute('aria-checked', false)
        });
        event.target.setAttribute('aria-checked', true);
        component.setAttribute('value', content.id);
        component.closeDropdown();
      }
    });

    button.addEventListener('keydown', event => {

      var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
        prevButton = parseInt(event.target.getAttribute('data-index')) - 1;
        console.log(event)
      if (event.key === 'ArrowUp' || event.key === 'Up') {
        event.preventDefault();
        if (component.shadowRoot.activeElement === getFocusableElements(menu)[0]) {
          getFocusableElements(menu)[getFocusableElements(menu).length - 1].focus();
        } else {
          getFocusableElements(menu)[prevButton].focus();
        }
      }
      if (event.key === 'ArrowDown' || event.key === 'Down') {
        event.preventDefault();
        if (component.shadowRoot.activeElement === getFocusableElements(menu)[getFocusableElements(menu).length - 1]) {
          getFocusableElements(menu)[0].focus();
        } else {
          getFocusableElements(menu)[nextButton].focus();
        }
      }
      if (event.key === 'Home') {
        getFocusableElements(menu)[0].focus();
      }

      if (event.key === 'End') {
        getFocusableElements(menu)[getFocusableElements(menu).length - 1].focus();
      }
    });
    return li;
  }

  class Dropdown extends HTMLElement {
    static get observedAttributes() {
      return ['buttonText', 'textOnly', 'open', 'value', 'multiSelect', 'type'];
    }

    get type() {
      return this.getAttribute('type');
    }

    get buttonText() {
      return this.getAttribute('buttonText');
    }

    get textOnly() {
      return this.hasAttribute('textOnly');
    }

    get multiSelect() {
      return this.hasAttribute('multiSelect');
    }

    get value() {
      return this.getAttribute('value');
    }

    get open() {
      return this.getAttribute('open');
    }

    set open(value) {
      this.setAttribute('open', value);
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const clone = template.content.cloneNode(true);
      this.shadowRoot.appendChild(clone);

      this.openDropdown = this.openDropdown.bind(this);
      this.closeDropdown = this.closeDropdown.bind(this);
      this.returnChecked = this.returnChecked.bind(this);
    }

    openDropdown () {
      const expandIcon = this.button.querySelector('.expand-icon'),
        collapseIcon = this.button.querySelector('.collapse-icon');

      if (this.open === null) {
        this.open = true;
        this.button.setAttribute('aria-expanded', true);
        this.shadowRoot.addEventListener('animationend', event => {
          getFocusableElements(this.shadowRoot)[0].focus();
        })
        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'flex';
      } else if (this.open) {
        this.closeDropdown();
      }
    }

    closeDropdown () {
      const expandIcon = this.button.querySelector('.expand-icon'),
        collapseIcon = this.button .querySelector('.collapse-icon');

      expandIcon.style.display = 'flex';
      collapseIcon.style.display = 'none';

      this.checked = this.returnChecked();
      this.removeAttribute('open');
      this.button.setAttribute('aria-expanded', false);

      if (this.multiSelect) {
        let arr = [];
        this.checked.forEach(item => {
          arr.push(item.getAttribute('data-id'));
        });
        this.dispatchEvent(
          new CustomEvent('change', {
            bubbles: true,
            detail: {
              selected: arr
            }
          })
        );
      } else {
        this.dispatchEvent(
          new CustomEvent('change', {
            bubbles: true,
            detail: {
              selected: this.checked !== false ? this.checked.getAttribute('data-id') :'no selection'
            }
          })
        );
      }

      this.button.focus();
    }

    returnChecked () {
      let checked = [];
      if (this.multiSelect) {
        checked = this.shadowRoot.querySelectorAll('[aria-checked="true"]');
      } else {
        checked = this.shadowRoot.querySelector('[aria-checked="true"]');
      }
      if (checked !== null) {
        return checked
      } else {
        return false;
      }

    }

    connectedCallback() {
      /** Any changes to what the component renders should be done here. */
      const dropdownTrigger = button.content.cloneNode(true),
        dropdownTemplate = this.shadowRoot.querySelector('.gr-dropdown-container');
        dropdownTemplate.appendChild(dropdownTrigger);

      this.button = dropdownTemplate.querySelector('button');

      const buttonText = dropdownTemplate.querySelector('button .dropdown-text');
      buttonText.innerHTML = this.buttonText;

      // Get the attributes set by the consumer
      if (this.textOnly) {
        this.button.classList.add('text');
      }

      this.button.addEventListener('click', this.openDropdown);
      /** Event listeners should also be bound here. */
      doc.addEventListener('click', event => {
       if (this.open === 'true') {
        var target = event.target;
        const dropdownMenu = this.shadowRoot.querySelector('.menu');
         do {
           if (target === dropdownMenu || target === this) {
             return;
           }
           target = target.parentNode;
         } while (target);
         this.closeDropdown();

       }
      })

      doc.addEventListener('keydown', event => {
        if (this.open === 'true' && event.key === 'Escape') {
          this.closeDropdown();
        }
      });

      if (this.type === 'primary') {
        this.button.classList.add('primary');
      }

      if (this.type === 'attention') {
        this.button.classList.add('attention');
      }
    }


    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'open' && newValue === 'true') {
        const dropdownMenu = menu.content.cloneNode(true),
          dropdownTemplate = this.shadowRoot.querySelector('.gr-dropdown-container');

          dropdownTemplate.appendChild(dropdownMenu);

          const items = this.querySelectorAll('li'),
            dropdownMenuTemplate = this.shadowRoot.querySelector('.menu'),
            itemContent = [];

          // get items from slot to render new list for dropdown
          items.forEach(item => {
            item.style.display = 'none';
            itemContent.push({
              divider: item.classList.contains('divider'),
              text: item.innerHTML,
              id: item.id,
              multiSelect: this.multiSelect,
              value: this.value});
          });

          // render list items based on items in slot
          itemContent.forEach((content,index) => {
            dropdownMenuTemplate.appendChild(buildListItems(content, this, dropdownMenuTemplate, index, this.checked));
          })

      } else if (name === 'open' && newValue === null) {
        const dropdownMenu = this.shadowRoot.querySelector('.dropdown-menu');
        dropdownMenu.remove();
        this.button.setAttribute('aria-expanded', false)
      }
    }
  }

  customElements.define('pearson-dropdown', Dropdown);
})(window, document);

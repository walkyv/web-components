(function(w, doc) {
  'use strict';

  const template = doc.createElement('template');

  template.innerHTML = ` 
    <style>
    :host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.tabs-wrapper{position:relative;height:41px}.tabs,ul{list-style-type:none;padding:0;margin:0}.tab,li{display:inline-block}.tab-button{color:#6a7070;cursor:pointer;display:block;margin:.5em 1em;padding:.5em 0;text-decoration:none;background:none;border:0;border-bottom:3px solid transparent}.tab-button.active{color:#252525}.tab-button:not(.active):hover{color:#252525;border-bottom-color:#c7c7c7}.tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:.5em 1em;bottom:-8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.pe-tab-panels{padding:1em}.hidden{display:none}.pe-label{font-size:1rem;line-height:1.28571rem}
    </style>
    <div id="tabs-wrapper" class="tabs-wrapper">
      <slot name="tabs"></slot>
      <div id="slider" class="tab-slider"></div>
    </div>
    <slot name="panels"></slot>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  const forEach = Array.prototype.forEach;
  const indexOf = Array.prototype.indexOf;

  class Tabs extends HTMLElement {
    static get observedAttributes() {
      return ['activeidx', 'activeIdx'];
    }

    get activeIdx() {
      return parseInt(this.getAttribute('activeIdx'), 10);
    }

    set activeIdx(idx) {
      return this.setAttribute('activeIdx', idx);
    }

    get activeTab() {
      return this.tabs[this.activeIdx];
    }

    get activePanel() {
      return this.panels[this.activeIdx];
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      // These are both assigned in a slotChange
      this.tabList = null;
      this.tabs = null;
      this.panels = null;

      this.tabsWrapper = clone.querySelector('#tabs-wrapper');
      this.slider = clone.querySelector('#slider');

      this.shadowRoot.appendChild(clone);

      this.decorateTabs = this.decorateTabs.bind(this);
      this.manageActiveTabAttrs = this.manageActiveTabAttrs.bind(this);

      this.onTabSlotChange = this.onTabSlotChange.bind(this);
      this.onPanelSlotChange = this.onPanelSlotChange.bind(this);

      // TODO: make named listener
      this.shadowRoot.addEventListener('click', (e) => {
        if (!e.target.matches('button[id^="tab"]')) return;

        this.activeIdx = indexOf.call(this.tabs, e.target);
      });

      // TODO: make named listener
      this.shadowRoot.addEventListener('keydown', (e) => {
        if (!e.target.matches('button[id^="tab"]')) return;

        const idxMap = {
          'ArrowLeft': this.activeIdx - 1,
          'ArrowRight': this.activeIdx + 1
        };

        const nextIdx = e.key in idxMap ? idxMap[e.key] : null;
        
        if(this.tabs[nextIdx]) {
          e.preventDefault();
          this.activeIdx = nextIdx;
        }

      }, true);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (this.tabs && (name === 'activeIdx' || name === 'activeidx')) {

        this.positionSlider();
        this.manageActiveTabAttrs();
        this.activeTab.focus();
        this.showActivePanel();
      }
    }

    connectedCallback() {
      const [tabSlot, panelSlot] = this.shadowRoot.querySelectorAll('slot');

      if (!this.hasAttribute('activeIdx')) {
        this.setAttribute('activeIdx', '0');
      }

      tabSlot.addEventListener('slotchange', this.onTabSlotChange);
      panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
    }

    diconnectedCallback() {}

    decorateTabs(child, idx) {
      const { textContent } = child;

      let classList = 'pe-label tab-button';

      if (idx === this.activeIdx) {
        classList += ' active';
      }

      child.role = 'none';
      child.innerHTML = `
        <button
          id="tab-${idx}-btn"
          class="${classList}"
          role="tab"
          tabindex="-1"
          aria-selected="false"
          aria-controls="tab-${idx}" 
          data-tab="${idx}"
        >
        ${textContent}
        </button>
      `;
    }

    manageActiveTabAttrs() {
      forEach.call(this.tabs, (tab, idx) => {
        if (idx !== this.activeIdx) {
          tab.classList.remove('active');
          tab.removeAttribute('aria-selected');
        } else {
          tab.classList.add('active');
          tab.setAttribute('aria-selected', '');
        }
      });
    }

    showActivePanel() {
      forEach.call(this.panels, (panel) => panel.hidden = panel !== this.activePanel);
    }

    positionSlider() {
      const { left, width } = this.activeTab.getBoundingClientRect();

      // 14px is the approx. padding of the button
      this.slider.style.left = left - 14 + 'px';
      this.slider.style.width = width + 'px';
    }

    onTabSlotChange(e) {
      this.tabList = e.target.assignedNodes()[0];
      if (!this.tabList) return;

      forEach.call(this.tabList.children, this.decorateTabs);

      this.tabs = this.tabList.querySelectorAll('button[id^="tab"]');

      this.tabsWrapper.insertBefore(this.tabList, this.slider);
      this.positionSlider();
    }

    onPanelSlotChange(e) {
      this.panels = e.target.assignedNodes()[0].querySelectorAll('[data-panel]');
      if (!this.panels) return;

      this.showActivePanel();
    }
  }
  customElements.define('pearson-tabs', Tabs);
})(window, document);

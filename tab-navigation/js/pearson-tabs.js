(function(w, doc) {
  'use strict';

  const template = doc.createElement('template');

  template.innerHTML = ` 
    <style>
      :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host-context(.dark) :focus{outline-color:#fff}*,:after,:before,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif;background-color:#fff;color:#6a7070}:host-context(.dark){color:#d9d9d9}::slotted(.panels){padding:1em}.tabs-wrapper{position:relative;background-color:inherit}:host-context(.dark) .tabs-wrapper{background-color:#005a70}.tabs,ul{list-style-type:none;padding:0;margin:0}.tab,li{display:inline-block}.tab-button{font-size:inherit;line-height:1.28571rem;color:inherit;cursor:pointer;display:block;margin:8px 16px;padding:8px 0;text-decoration:none;background:none;border:0;border-bottom:3px solid transparent}.tab-button:hover{color:#252525;border-bottom-color:#c7c7c7}.tab-button.active{color:#252525}:host-context(.dark) .tab-button:hover{color:#fff;border-bottom-color:#d9d9d9}:host-context(.dark) .tab-button.active{color:#fff}.tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:0 16px;bottom:8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}
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

      this.onTabSlotChange = this.onTabSlotChange.bind(this);
      this.onPanelSlotChange = this.onPanelSlotChange.bind(this);
      this.onShadowRootClick = this.onShadowRootClick.bind(this);
      this.onShadowRootKeydown = this.onShadowRootKeydown.bind(this);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (!this.tabs || !this.panels) return;

      if (name === 'activeIdx' || name === 'activeidx') {
        this.positionSlider();
        this.setActiveTab();
      }
    }

    connectedCallback() {
      const [tabSlot, panelSlot] = this.shadowRoot.querySelectorAll('slot');

      if (!this.hasAttribute('activeIdx')) {
        this.setAttribute('activeIdx', '0');
      }

      this.shadowRoot.addEventListener('click', this.onShadowRootClick, true);
      this.shadowRoot.addEventListener(
        'keydown',
        this.onShadowRootKeydown,
        true
      );

      tabSlot.addEventListener('slotchange', this.onTabSlotChange);
      panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
    }

    initTabs() {
      forEach.call(this.tabList.children, (child, idx) => {
        const { textContent } = child;

        let classList = 'tab-button';
        let ariaSelected = '';
        let tabindex = 'tabindex="-1"';

        if (idx === this.activeIdx) {
          classList += ' active';
          ariaSelected = 'aria-selected';
          tabindex = '';
        }

        child.setAttribute('role', 'presentation');
        child.innerHTML = `
          <button
            id="tab-${idx}-btn"
            class="${classList}"
            role="tab"
            aria-controls="panel-${idx}"
            ${tabindex}
            ${ariaSelected}
          >
          ${textContent}
          </button>
        `;
      });
    }

    setActiveTab() {
      forEach.call(this.tabs, (tab, idx) => {
        const panel = this.panels[idx];

        if (idx !== this.activeIdx) {
          tab.classList.remove('active');
          tab.removeAttribute('aria-selected');
          tab.setAttribute('tabindex', '-1');
          panel.hidden = true;
        } else {
          tab.classList.add('active');
          tab.setAttribute('aria-selected', '');
          tab.removeAttribute('tabindex');
          panel.hidden = false;
        }
      });

      this.activeTab.focus();
    }

    initPanels() {
      forEach.call(this.panels, (panel, idx) => {
        panel.id = `panel-${idx}`;
        panel.hidden = panel !== this.activePanel;
      });
    }

    positionSlider() {
      const { activeTab } = this;
      const { left: hostLeft } = this.getBoundingClientRect();
      const {
        left: tabLeft,
        width: tabWidth
      } = activeTab.getBoundingClientRect();
      const tabMargin = parseInt(
        w
          .getComputedStyle(activeTab)
          .getPropertyValue('margin-left')
          .match(/\d+/)[0],
        10
      );

      this.slider.style.left = tabLeft - hostLeft - tabMargin + 'px';
      this.slider.style.width = tabWidth + 'px';
    }

    onTabSlotChange(e) {
      this.tabList = e.target.assignedNodes()[0];
      if (!this.tabList) return;

      this.initTabs();

      this.tabs = this.tabList.querySelectorAll('button[id^="tab"]');

      this.tabsWrapper.insertBefore(this.tabList, this.slider);
      this.positionSlider();
    }

    onPanelSlotChange(e) {
      this.panels = e.target
        .assignedNodes()[0]
        .querySelectorAll('[data-panel]');

      if (!this.panels) return;

      this.initPanels();
    }

    onShadowRootClick(e) {
      if (!e.target.matches('button[id^="tab"]')) return;

      this.activeIdx = indexOf.call(this.tabs, e.target);
    }

    onShadowRootKeydown(e) {
      if (!e.target.matches('button[id^="tab"]')) return;

      const idxMap = {
        ArrowLeft: this.activeIdx - 1,
        ArrowRight: this.activeIdx + 1
      };

      const nextIdx = e.key in idxMap ? idxMap[e.key] : null;

      if (this.tabs[nextIdx]) {
        e.preventDefault();
        this.activeIdx = nextIdx;
      }
    }
  }
  customElements.define('pearson-tabs', Tabs);
})(window, document);

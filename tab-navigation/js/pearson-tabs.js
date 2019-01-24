(function(w, doc) {
  'use strict';

  const template = doc.createElement('template');

  template.innerHTML = ` 
    <style>
    .tabs,ul{position:relative;height:41px;list-style-type:none;padding:0;margin:0}li{display:inline-block}.tab{color:#6a7070;cursor:pointer;display:block;margin:.5em 1em;padding:.5em 0;text-decoration:none;background:none;border:0}
    </style>
    <slot name="tabs"></slot>
    <slot name="panels"></slot>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  class Tabs extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.shadowRoot.appendChild(clone);

      this.onTabSlotChange = this.onTabSlotChange.bind(this);
      this.onPanelSlotChange = this.onPanelSlotChange.bind(this);
    }

    connectedCallback() {
      const [ tabSlot, panelSlot ] = this.shadowRoot.querySelectorAll('slot');

      tabSlot.addEventListener('slotchange', this.onTabSlotChange);
      panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
    }

    diconnectedCallback() {}

    onTabSlotChange(e) {
      this.tabList = e.target.assignedNodes()[0];
      if (!this.tabList) return;

      // TODO: Decorate tab list in button markup before moving
      this.tabList.removeAttribute('slot');
      this.shadowRoot.append(this.tabList);

    }

    onPanelSlotChange(e) {
      this.panels = e.target.assignedNodes()[1];
    }
  }
  customElements.define('pearson-tabs', Tabs);
})(window, document);

(function(w, doc) {
  'use strict';

  const FOCUSABLE_ELEMENTS = `
  a[href]:not([tabindex^="-"]):not([inert]),
  area[href]:not([tabindex^="-"]):not([inert]),
  input:not([disabled]):not([inert]),
  select:not([disabled]):not([inert]),
  textarea:not([disabled]):not([inert]),
  button:not([disabled]):not([inert]),
  iframe:not([tabindex^="-"]):not([inert]),
  audio:not([tabindex^="-"]):not([inert]),
  video:not([tabindex^="-"]):not([inert]),
  [contenteditable]:not([tabindex^="-"]):not([inert]),
  [tabindex]:not([tabindex^="-"]):not([inert])`,
    TAB_KEY = 9,
    ESCAPE_KEY = 27;

  const { filter, forEach } = Array.prototype;

  function getDeepActiveElement() {
    let a = doc.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
      a = a.shadowRoot.activeElement;
    }
    return a;
  }

  function getFocusableChildren(node) {
    const focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function(child) {
      return !!(
        child.offsetWidth ||
        child.offsetHeight ||
        child.getClientRects().length
      );
    });
  }

  function setFocusToFirstChild(node) {
    const focusableChildren = getFocusableChildren(node),
      focusableChild =
        node.querySelector('[autofocus]') || focusableChildren[0];

    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function trapTabKey(node, e) {
    const focusableChildren = getFocusableChildren(node),
      focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
      lastFocusableIdx = focusableChildren.length - 1;

    if (e.shiftKey && focusedItemIdx === 0) {
      focusableChildren[lastFocusableIdx].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
      focusableChildren[0].focus();
      e.preventDefault();
    }
  }

  const mainContent = doc.getElementById('main'),
    trigger = doc.getElementById('openDrawer'),
    panelOne = doc.querySelector('[data-panel="1"]'),
    drawer = doc.getElementById('drawer'),
    panels = drawer.querySelectorAll('[data-panel]');

  let drawerOpen = false;

  // returns a new panel to displayed in ui
  function getActivePanel() {
    let panelToShow = drawer.getAttribute('data-current-panel');
    let show = '';
    forEach.call(panels, panel => {
      const dataPanel = panel.getAttribute('data-panel');
      if (panelToShow === dataPanel) {
        show = panel;
      }
    });
    return show;
  }

  function setActivePanel(panelIdentifier) {
    drawer.setAttribute('data-current-panel', panelIdentifier);
  }

  // attaches event handlers to pre defined questions that open panels
  function bindPanelClicks(element) {
    const buttons = element.querySelectorAll('button');
    forEach.call(buttons, button => {
      button.addEventListener('click', event => {
        if (event.currentTarget.classList.contains('back')) {
          closePanel(getActivePanel());
          showPanel(panelOne);
          drawer.setAttribute('data-current-panel', '1');
        } else {
          closePanel(panelOne);
          closePanel(getActivePanel());
        }
      });
    });
  }

  function hidePanel(panel) {
    panel.style.right = '320px';
    panel.style.display = 'none';
    panel.setAttribute('aria-hidden', 'true');
  }

  // toggle the panels in ui
  function showPanel(panel) {
    panel.style.right = '0';
    panel.style.display = 'flex';
    panel.setAttribute('aria-hidden', 'false');
    mainContent.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    drawerOpen = true;
    setFocusToFirstChild(panel);
  }

  function closePanel(panel) {
    panel.style.right = '-320px';
    panel.style.display = 'none';
    panel.setAttribute('aria-hidden', 'true');
    trigger.focus();
    mainContent.setAttribute('aria-hidden', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    drawerOpen = false;
  }

  function openDrawer() {
    showPanel(getActivePanel());
  }

  function bindDrawerClicks(event) {
    const el = event.target;
    // TODO: clean up this grammar :(
    // maybe consistent `data-action` attr
    if (
      !(el.classList.contains('close') || el.hasAttribute('data-show-panel'))
    ) {
      return;
    }

    if (el.hasAttribute('data-show-panel')) {
      const panelIdentifier = event.target.getAttribute('data-show-panel');

      hidePanel(getActivePanel());
      setActivePanel(panelIdentifier);
      showPanel(getActivePanel());
      bindPanelClicks(getActivePanel());
    } 
    if (el.classList.contains('close')) {
      closePanel(getActivePanel());
    }
  }

  function bindExternalClicks(e) {
    if (drawerOpen && !drawer.contains(e.target)) {
      closePanel(getActivePanel());
    }
  }

  function bindKeyPress(e) {
    if (!drawerOpen) return;

    const panel = getActivePanel();

    if (e.which === TAB_KEY) {
      trapTabKey(panel, e);
    }

    if (e.which === ESCAPE_KEY) {
      closePanel(panel);
    }
  }

  function trapFocus() {
    const panel = getActivePanel();
    if (drawerOpen && !panel.contains(getDeepActiveElement())) {
      setFocusToFirstChild(panel);
    }
  }

  // opens the drawer
  trigger.addEventListener('click', openDrawer);
  drawer.addEventListener('click', bindDrawerClicks);

  doc.addEventListener('focus', trapFocus, true);
  doc.addEventListener('click', bindExternalClicks, true);
  doc.addEventListener('keydown', bindKeyPress, true);
})(window, document);

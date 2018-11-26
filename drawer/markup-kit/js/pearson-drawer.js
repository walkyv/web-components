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

  const  filter = Array.prototype.filter;

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
    drawer = doc.getElementById('drawer');

  let drawerOpen = false;

  // returns a new panel to displayed in ui
  function getActivePanel() {
    let panelToShow = drawer.getAttribute('data-current-panel');
    return doc.querySelector(`[data-panel="${panelToShow}"]`);
  }

  function setActivePanel(panelIdentifier) {
    drawer.setAttribute('data-current-panel', panelIdentifier);
  }

  function hidePanel(panel) {
    panel.classList.remove('active');
  }

  function showPanel(panel) {
    panel.classList.add('active');
    setFocusToFirstChild(panel);
  }

  function openDrawer() {
    drawer.classList.remove('slideOutRight');
    drawer.classList.add('open');
    drawer.classList.add('slideInRight');
    showPanel(getActivePanel());
    mainContent.setAttribute('aria-hidden', 'true');
    drawerOpen = true;
  }

  function closeDrawer() {
    drawerOpen = false;
    mainContent.setAttribute('aria-hidden', 'false');
    trigger.focus();
    drawer.classList.remove('slideInRight');
    drawer.classList.add('slideOutRight');
    setTimeout(() => {
      drawer.classList.remove('open');      
    }, 700);
  }

  function bindDrawerClicks(event) {
    const el = event.target;
    // TODO: clean up this grammar :(
    // maybe consistent `data-action` attr
    if (
      !(
        el.classList.contains('back') ||
        el.classList.contains('close') ||
        el.hasAttribute('data-show-panel')
      )
    ) {
      return;
    }

    if (el.hasAttribute('data-show-panel')) {
      const panelIdentifier = event.target.getAttribute('data-show-panel');
      let activePanel = getActivePanel();

      hidePanel(activePanel);
      setActivePanel(panelIdentifier);
      activePanel = getActivePanel();
      showPanel(activePanel);
    }

    if (el.classList.contains('back')) {
      hidePanel(getActivePanel());
      showPanel(panelOne);
      drawer.setAttribute('data-current-panel', '1');
    }

    if (el.classList.contains('close')) {
      closeDrawer();
    }
  }

  function bindExternalClicks(e) {
    if (drawerOpen && !drawer.contains(e.target)) {
      closeDrawer();
    }
  }

  function bindKeyPress(e) {
    if (!drawerOpen) return;

    const panel = getActivePanel();

    if (e.which === TAB_KEY) {
      trapTabKey(panel, e);
    }

    if (e.which === ESCAPE_KEY) {
      closeDrawer(panel);
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

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
    let a = document.activeElement;
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
    panels = drawer.querySelectorAll('[data-panel]'),
    questions = panelOne.querySelectorAll('input, button, select, a');

  // returns current panel displayed in ui
  function getPanelIdentifier() {
    return drawer.getAttribute('data-current-panel');
  }

  // returns a new panel to displayed in ui
  function getPanelElem() {
    let panelToShow = getPanelIdentifier();
    let show = '';
    forEach.call(panels, panel => {
      const dataPanel = panel.getAttribute('data-panel');
      if (panelToShow === dataPanel) {
        show = panel;
      }
    });
    return show;
  }

  // attaches event handlers to pre defined questions that open panels
  function clickHandlers(element) {
    const buttons = element.querySelectorAll('button');
    forEach.call(buttons, button => {
      button.addEventListener('click', event => {
        if (event.currentTarget.classList.contains('back')) {
          closePanel(getPanelElem());
          showPanel(panelOne);
          drawer.setAttribute('data-current-panel', '1');
        } else {
          closePanel(panelOne);
          closePanel(getPanelElem());
        }
      });
    });
  }

  // toggle the panels in ui
  function showPanel(panel) {
    panel.style.right = '0';
    panel.style.display = 'flex';
    panel.setAttribute('aria-hidden', 'false');
    focusTrap(panel);
    mainContent.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closePanel(panel) {
    panel.style.right = '-320px';
    panel.style.display = 'none';
    panel.setAttribute('aria-hidden', 'true');
    trigger.focus();
    mainContent.setAttribute('aria-hidden', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  function expandPanel(panel) {
    panel.style.right = '320px';
    panel.style.display = 'none';
    panel.setAttribute('aria-hidden', 'true');
  }

  // sets focus trap on the panels
  function focusTrap(panel) {
    const focusItems = panel.querySelectorAll('button, a, input, select');
    focusItems[0].focus();
    console.log(focusItems);
    focusItems[focusItems.length - 1].addEventListener('blur', event => {
      if (event.sourceCapabilities) {
        focusItems[0].focus();
      } else {
        focusItems[0].focus();
      }
      event.stopImmediatePropagation();
    });
  }

  // sets up the ui for first use
  forEach.call(questions, question => {
    question.addEventListener('click', event => {
      if (!question.classList.contains('close')) {
        const showPanelNumber = event.currentTarget.getAttribute(
          'data-show-panel'
        );
        expandPanel(getPanelElem());
        drawer.setAttribute('data-current-panel', showPanelNumber);
        showPanel(getPanelElem());
        clickHandlers(getPanelElem());
      } else {
        closePanel(getPanelElem());
      }
    });
  });

  // opens the panel
  trigger.addEventListener('click', event => {
    showPanel(getPanelElem());
  });

  doc.addEventListener('keyup', event => {
    if (event.which === ESCAPE_KEY) {
      closePanel(getPanelElem());
    }
  });
})(window, document);

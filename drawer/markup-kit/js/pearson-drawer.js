(function(w, doc) {
  'use strict';
  const mainContent = doc.getElementById('main'),
    trigger = doc.getElementById('openDrawer'),
    panelOne = doc.querySelector('[data-panel="1"]'),
    drawer = doc.getElementById('drawer'),
    panels = drawer.querySelectorAll('.panel'),
    questions = panelOne.querySelectorAll('input, button, select, a');

  const forEach = Array.prototype.forEach;

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
    if (event.code === 'Escape') {
      closePanel(getPanelElem());
    }
  });
})(window, document);

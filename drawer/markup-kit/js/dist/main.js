'use strict';

(function () {
  'use strict';

  var trigger = document.getElementById('openDrawer'),
      drawer = document.getElementById('drawer'),
      panels = drawer.querySelectorAll('.panel'),
      panelOne = document.querySelector('[data-panel="1"]'),
      questions = panelOne.querySelectorAll('input, button, select, a'),
      mainContent = document.getElementById('main');

  // returns current panel displayed in ui
  function currentPanel() {
    return drawer.getAttribute('data-current-panel');
  }

  // returns a new panel to displayed in ui
  function returnPanel() {
    var panelToShow = currentPanel();
    var show = '';
    Array.prototype.forEach.call(panels, function (panel) {
      var dataPanel = panel.getAttribute('data-panel');
      if (panelToShow === dataPanel) {
        show = panel;
      }
    });
    return show;
  }

  // attaches event handlers to pre defined questions that open panels
  function clickHandlers(element) {
    var buttons = element.querySelectorAll('button');
    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener('click', function (event) {
        if (event.currentTarget.classList.contains('back')) {
          closePanel(returnPanel());
          showPanel(panelOne);
          drawer.setAttribute('data-current-panel', '1');
        } else {
          closePanel(panelOne);
          closePanel(returnPanel());
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
    var focusItems = panel.querySelectorAll('button, a, input, select');
    focusItems[0].focus();
    console.log(focusItems);
    focusItems[focusItems.length - 1].addEventListener('blur', function (event) {
      if (event.sourceCapabilities) {
        focusItems[0].focus();
      } else {
        focusItems[0].focus();
      }
      event.stopImmediatePropagation();
    });
  }

  // sets up the ui for first use
  Array.prototype.forEach.call(questions, function (question) {
    question.addEventListener('click', function (event) {
      if (!question.classList.contains('close')) {
        var showPanelNumber = event.currentTarget.getAttribute('data-show-panel');
        expandPanel(returnPanel());
        drawer.setAttribute('data-current-panel', showPanelNumber);
        showPanel(returnPanel());
        clickHandlers(returnPanel());
      } else {
        closePanel(returnPanel());
      }
    });
  });

  // opens the panel
  trigger.addEventListener('click', function (event) {
    showPanel(returnPanel());
  });

  document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
      console.log('close');
    }
  });
})();
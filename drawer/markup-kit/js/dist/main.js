'use strict';

(function () {
  var trigger = document.getElementById('openDrawer'),
      drawer = document.getElementById('drawer'),
      panels = drawer.querySelectorAll('.panel'),
      panelOne = document.querySelector('[data-panel="1"]'),
      questions = panelOne.querySelectorAll('input, button, select, a');

  function currentPanel() {
    return drawer.getAttribute('data-current-panel');
  }

  function returnPanel() {
    var panelToShow = currentPanel();
    var show = '';
    panels.forEach(function (panel) {
      var dataPanel = panel.getAttribute('data-panel');
      if (panelToShow === dataPanel) {
        show = panel;
      }
    });
    return show;
  }

  function clickHandlers(element) {
    var buttons = element.querySelectorAll('button');
    buttons.forEach(function (button) {
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

  function showPanel(panel) {
    panel.style.right = '0';
    panel.style.display = 'flex';
    focusTrap(panel);
  }

  function closePanel(panel) {
    panel.style.right = '-320px';
    panel.style.display = 'none';
    trigger.focus();
  }

  function expandPanel(panel) {
    panel.style.right = '320px';
    panel.style.display = 'flex';
  }

  function focusTrap(panel) {
    var focusItems = panel.querySelectorAll('button, a, input, select');
    focusItems[0].focus();
    focusItems[focusItems.length - 1].addEventListener('blur', function (event) {
      event.preventDefault();
      if (event.sourceCapabilities) {
        focusItems[0].focus();
        console.log(event);
      } else if (!event.relatedTarget) {
        console.log('no target', focusItems[0]);
        focusItems[0].focus();
      }
      event.stopImmediatePropagation();
    });
  }

  questions.forEach(function (question) {
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

  trigger.addEventListener('click', function (event) {
    showPanel(returnPanel());
  });
})();
'use strict';

(function () {
  var trigger = document.getElementById('openDrawer'),
      drawer = document.getElementById('drawer'),
      panels = drawer.querySelectorAll('.panel'),
      panelOne = document.querySelector('[data-panel="1"]'),
      questions = panelOne.querySelectorAll('input, button, select, a'),
      mainContent = document.getElementById('main');

  function currentPanel() {
    return drawer.getAttribute('data-current-panel');
  }

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

  function showPanel(panel) {
    panel.style.right = '0';
    panel.style.display = 'flex';
    focusTrap(panel);
    mainContent.setAttribute('aria-hidden', 'true');
  }

  function closePanel(panel) {
    panel.style.right = '-320px';
    panel.style.display = 'none';
    trigger.focus();
    mainContent.setAttribute('aria-hidden', 'false');
  }

  function expandPanel(panel) {
    panel.style.right = '320px';
    panel.style.display = 'none';
  }

  function focusTrap(panel) {
    var focusItems = panel.querySelectorAll('button, a, input, select');
    focusItems[0].focus();
    console.log(focusItems);
    focusItems[focusItems.length - 1].addEventListener('blur', function (event) {
      console.log(event);
      if (event.sourceCapabilities) {
        focusItems[0].focus();
      } else {
        focusItems[0].focus();
      }
      event.stopImmediatePropagation();
    });
  }

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

  trigger.addEventListener('click', function (event) {
    showPanel(returnPanel());
  });
})();
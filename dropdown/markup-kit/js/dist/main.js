'use strict';

(function () {
  // do something
  var dropdownTrigger = document.querySelector('#dropdownTrigger'),
      dropdownMenu = document.querySelector('.dropdown-menu'),
      focusableElements = getFocusableElements(),
      firstFocusableElement = focusableElements[0],
      lastFocusableElement = focusableElements[focusableElements.length - 1];

  function getFocusableElements() {
    var tabbedList = document.querySelectorAll('[role="menuitem"]'),
        filter = Array.prototype.filter;
    return filter.call(tabbedList, function (listItem) {
      return listItem;
    });
  }

  dropdownTrigger.addEventListener('click', function (event) {
    dropdownMenu.style.display = 'block';
    firstFocusableElement.focus();
  });

  document.addEventListener('click', function (event) {
    if (dropdownMenu.style.display === 'block') {
      var target = event.target;
      do {
        if (target === dropdownMenu || target.tagName === 'BUTTON') {
          return;
        }
        target = target.parentNode;
      } while (target);
      dropdownMenu.style.display = 'none';
      dropdownTrigger.focus();
    }
  });

  focusableElements.forEach(function (button, index) {
    button.setAttribute('data-index', index);

    button.addEventListener('click', function (event) {
      console.log('click');
    });

    button.addEventListener('keyup', function (event) {
      var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
          prevButton = parseInt(event.target.getAttribute('data-index')) - 1;

      if (event.key === 'Escape') {
        dropdownMenu.style.display = 'none';
        dropdownTrigger.focus();
      }

      if (event.key === 'ArrowUp') {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
        } else {
          focusableElements[prevButton].focus();
        }
      }

      if (event.key === 'ArrowDown') {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
        } else {
          focusableElements[nextButton].focus();
        }
      }

      if (event.key === 'Home') {
        firstFocusableElement.focus();
      }

      if (event.key === 'End') {
        lastFocusableElement.focus();
      }
    });
  });
})();
'use strict';

(function () {
  // do something
  var dropdownTrigger = document.querySelector('#dropdownTrigger'),
      dropdownMenu = document.querySelector('.dropdown-menu'),
      focusableElements = getFocusableElements(),
      firstFocusableElement = focusableElements[0],
      lastFocusableElement = focusableElements[focusableElements.length - 1],
      mobileClose = document.querySelector('#mobileClose');

  function getFocusableElements() {
    var tabbedList = document.querySelectorAll('[role="menuitem"]'),
        filter = Array.prototype.filter;
    return filter.call(tabbedList, function (listItem) {
      return listItem;
    });
  }

  function closeDropdown() {

    dropdownMenu.style.display = 'none';
    dropdownTrigger.focus();
    dropdownTrigger.setAttribute('aria-expanded', 'false');
  }

  dropdownTrigger.addEventListener('click', function (event) {
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.classList.remove('animateOut');
      dropdownMenu.classList.add('animateIn');
      dropdownMenu.style.display = 'flex';
      firstFocusableElement.focus();
      dropdownTrigger.setAttribute('aria-expanded', 'true');
    } else {
      closeDropdown();
    }
  });

  mobileClose.addEventListener('click', function (event) {
    dropdownMenu.classList.remove('animateIn');
    dropdownMenu.classList.add('animateOut');
    dropdownTrigger.setAttribute('aria-expanded', 'false');
  });

  dropdownMenu.addEventListener('animationend', function (event) {
    if (event.animationName === 'fadeOutUp' || event.animationName === 'fadeOut') {
      closeDropdown();
    }
  });

  document.addEventListener('click', function (event) {
    if (dropdownMenu.style.display === 'flex') {
      var target = event.target;
      do {
        if (target === dropdownMenu || target.tagName === 'BUTTON') {
          return;
        }
        target = target.parentNode;
      } while (target);
      dropdownMenu.classList.remove('animateIn');
      dropdownMenu.classList.add('animateOut');
    }
  });

  focusableElements.forEach(function (button, index) {
    button.setAttribute('data-index', index);
    button.addEventListener('click', function (event) {
      var isChecked = button.parentNode.getAttribute('aria-selected'),
          multiSelect = dropdownMenu.hasAttribute('multiselect');

      if (multiSelect === false) {
        console.log('false');
        focusableElements.forEach(function (element) {
          element.parentNode.setAttribute('aria-selected', 'false');
        });
        button.parentNode.setAttribute('aria-selected', 'true');
        closeDropdown();
      } else {
        console.log('true');
        if (isChecked === 'false') {
          button.parentNode.setAttribute('aria-selected', 'true');
        } else {
          button.parentNode.setAttribute('aria-selected', 'false');
        }
      }
    });

    button.addEventListener('keyup', function (event) {
      var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
          prevButton = parseInt(event.target.getAttribute('data-index')) - 1;

      if (event.key === 'Escape') {
        closeDropdown();
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
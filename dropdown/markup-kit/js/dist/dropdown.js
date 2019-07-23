'use strict';

(function () {
  'use strict';
  // do something

  var dropdowns = document.querySelectorAll('.gr-dropdown-container');

  Array.prototype.forEach.call(dropdowns, function (dropdown) {
    var dropdownTrigger = dropdown.querySelector('[data-action="trigger"]'),
        dropdownMenu = dropdown.querySelector('[data-action="menu"]'),
        focusableElements = getFocusableElements(),
        firstFocusableElement = focusableElements[0],
        lastFocusableElement = focusableElements[focusableElements.length - 1],
        mobileClose = dropdown.querySelector('#mobileClose');

    function getFocusableElements() {
      return dropdown.querySelectorAll('[role^="menuitem"]');
    }

    function closeDropdown() {
      dropdownMenu.style.display = 'none';
      dropdownTrigger.focus();
      dropdownTrigger.setAttribute('aria-expanded', 'false');
    }

    if (dropdownTrigger) {
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
    }

    if (dropdownMenu) {
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
      }, true);

      document.addEventListener('keydown', function (event) {
        if (dropdownMenu.style.display === 'flex' && event.key === 'Escape') {
          closeDropdown();
        }
      }, true);

      Array.prototype.forEach.call(focusableElements, function (button, index) {
        button.setAttribute('data-index', index);
        button.addEventListener('click', function (event) {
          var isChecked = button.getAttribute('aria-checked'),
              multiSelect = dropdownMenu.hasAttribute('multiselect');

          if (multiSelect === false) {
            Array.prototype.forEach.call(focusableElements, function (element) {
              element.setAttribute('aria-checked', 'false');
            });
            button.setAttribute('aria-checked', 'true');
            closeDropdown();
          } else {
            if (isChecked === 'false') {
              button.setAttribute('aria-checked', 'true');
            } else {
              button.setAttribute('aria-checked', 'false');
            }
          }

          // Necessary for browsers that do not focus on buttons when clicked
          if (document.activeElement !== event.target) {
            event.target.focus();
          }
        });

        button.addEventListener('keydown', function (event) {
          var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
              prevButton = parseInt(event.target.getAttribute('data-index')) - 1;

          if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
            } else {
              focusableElements[prevButton].focus();
            }
          }

          if (event.key === 'ArrowDown') {
            event.preventDefault();
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
    }
  });
})();
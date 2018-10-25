'use strict';
(function() {
  // do something
  const dropdownTrigger = document.querySelector('#dropdownTrigger'),
        dropdownMenu = document.querySelector('.dropdown-menu'),
        focusableElements = getFocusableElements(),
        firstFocusableElement = focusableElements[0],
        lastFocusableElement = focusableElements[focusableElements.length - 1],
        mobileClose = document.querySelector('#mobileClose');

  function 	getFocusableElements() {
    const tabbedList = document.querySelectorAll('[role="menuitem"]'),
      filter = Array.prototype.filter;
    return filter.call(tabbedList, listItem => {
      return listItem;
    });
  }

  function closeDropdown () {
    dropdownMenu.style.display = 'none';
    dropdownTrigger.focus();
    dropdownTrigger.setAttribute('aria-expanded', 'false')
  }

  dropdownTrigger.addEventListener('click', event => {
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.classList.remove('fadeOutUp');
      dropdownMenu.classList.add('slideInUp');
      dropdownMenu.style.display = 'flex';
      firstFocusableElement.focus();
      dropdownTrigger.setAttribute('aria-expanded', 'true')
    } else {
      closeDropdown();
    }
  });


  mobileClose.addEventListener('click', event => {
    dropdownMenu.classList.remove('slideInUp');
    dropdownMenu.classList.add('fadeOutUp');
    dropdownTrigger.setAttribute('aria-expanded', 'false')
  });

  dropdownMenu.addEventListener('animationend', event => {
    if (event.animationName === 'fadeOutUp') {
      closeDropdown();
    }
  });

  document.addEventListener('click', event => {
    if (dropdownMenu.style.display === 'flex') {
      let target = event.target;
      do {
        if (target === dropdownMenu || target.tagName === 'BUTTON') {
          return;
        }
        target = target.parentNode;
      } while (target);
      closeDropdown();
    }
  });

  focusableElements.forEach( (button, index) => {
    button.setAttribute('data-index', index);
    button.addEventListener('click', event => {
      if (button.parentNode.getAttribute('aria-checked') === 'false') {
        button.parentNode.setAttribute('aria-checked', 'true');
      } else {
        button.parentNode.setAttribute('aria-checked', 'false')
      }
    });

    button.addEventListener('keyup', event => {
      const nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
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
          focusableElements[nextButton].focus()
        }
      }

      if (event.key === 'Home') {
        firstFocusableElement.focus();
      }

      if (event.key === 'End') {
        lastFocusableElement.focus();
      }

    });
  })
})();

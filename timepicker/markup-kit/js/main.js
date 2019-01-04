(function(win, doc) {
  'use strict';
  // helper functions and globals go here
  const timepickers = doc.querySelectorAll('.timepicker-container');

  function closeDropdown (node, input) {
    node.style.display = 'none' ;
    input.setAttribute('aria-expanded', false)
  }

  function removeIcons (node) {
    const icons = node.querySelectorAll('.pe-icon-wrapper');
    return Array.prototype.forEach.call(icons, icon => {
      icon.style.display = 'none';
    })
  }

  function filterSelected (node, value) {
    return node.querySelector(`[data-time^='${value}']`)
  }

  function returnSelected (node) {
    return node.getAttribute('data-selected');
  }

  function returnSelectedNode (node) {
    const time = returnSelected(node)
    return node.querySelector(`[data-time='${time}']`)
  }

  function setSelectedFalse (node) {
    const list = node.querySelectorAll('#itemList li');
    return Array.prototype.forEach.call(list, item => {
      item.classList.remove('in-view');
      item.setAttribute('aria-selected', false);
    })
  }

  function throwError(node) {
    node.classList.add('error');
  }

  function clearError (node) {
    node.classList.remove('error');
  }

  function getFocusableElements(node) {
    return  node.querySelectorAll('[role^="option"]');
  }

  Array.prototype.forEach.call(timepickers, timepicker => {
    const input = timepicker.querySelector('input'),
      dropdown = timepicker.querySelector('.pe-dropdown-container'),
      list = timepicker.querySelector('#itemList'),
      focusableElements = getFocusableElements(timepicker),
      firstFocusableElement = focusableElements[0],
      lastFocusableElement = focusableElements[focusableElements.length - 1];

    Array.prototype.forEach.call(focusableElements, (el, index) => {
      el.setAttribute('data-index', index);
    });

    function selectTime (node) {
      const icon = node.querySelector('.pe-icon-wrapper');
      removeIcons(list);
      setSelectedFalse(timepicker);
      closeDropdown(dropdown, input);
      icon.style.display = 'block';
      node.setAttribute('aria-selected', true);
      node.classList.add('in-view')
      list.setAttribute('data-selected', node.getAttribute('data-time'))
      input.value = node.getAttribute('data-time');
      validateTime();
    }

    function hoverTime(match) {
      setSelectedFalse(timepicker);
      if (match !== null) {
        match.classList.add('in-view');
        match.scrollIntoView();
      }
    }

    function validateTime() {
      const isValid = /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/.test(input.value);
      if (!isValid) {
        throwError(timepicker);
        return false
      } else {
        clearError(timepicker);
        return true
      }
    }

    function focusListItem () {
      const selected = returnSelectedNode(list);
      if (selected === null) {
        firstFocusableElement.focus();
        clearError(timepicker)
      } else {
        console.log(selected)
        selected.focus();
      }
    }

    input.style.textTransform = 'uppercase';

    doc.addEventListener('click', event => {
      if (dropdown.style.display === 'block') {
        if (event.target !== input) {
          dropdown.style.display = 'none';
        }
      }
    });

    doc.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        dropdown.style.display = 'none';
      }
    });

    input.addEventListener('focus', event => {
      const selected = returnSelectedNode(list);
      dropdown.style.display = 'block';
      event.target.setAttribute('aria-expanded', true);
      if ((input.value.length > 6) && (selected !== null)) {
        selected.scrollIntoView();
      }
    });

    input.addEventListener('blur', event => {
      if (event.relatedTarget === null) {
        if (validateTime() === true) {
          filterSelected(list, input.value).click();
        }
      }
    });

    input.addEventListener('keyup', event => {
      input.value = input.value.toUpperCase();
      hoverTime(filterSelected(list, input.value));
        switch (event.code) {
          case 'Enter':
            if (filterSelected(list, input.value) === null) {
              throwError(timepicker)
            } else {
              filterSelected(list, input.value).click();
            }
            break;
          case 'ArrowDown':
            focusListItem();
            break;
        }
    });

    list.addEventListener('keydown', event => {
      const nextItem = parseInt(event.target.getAttribute('data-index')) + 1,
        prevItem = parseInt(event.target.getAttribute('data-index')) - 1;
      console.log(event)
      switch(event.code) {
        case 'ArrowDown':
          event.preventDefault();
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
          } else {
            focusableElements[nextItem].focus();
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
          } else {
            focusableElements[prevItem].focus();
          }
          break;
        case 'Space':
          event.preventDefault();
          event.target.click();
          input.focus();
          break;
        case 'Home':
          event.preventDefault();
          firstFocusableElement.focus();
          break;
        case 'End':
          event.preventDefault();
          lastFocusableElement.focus();
          break;
      }
    });

    dropdown.addEventListener('click', event => {
      selectTime(event.target);
      event.stopImmediatePropagation();
    })

  });

})(window, document);

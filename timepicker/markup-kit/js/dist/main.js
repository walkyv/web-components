'use strict';

(function (win, doc) {
  'use strict';
  // helper functions and globals go here

  var timepickers = doc.querySelectorAll('.timepicker-container');

  function closeDropdown(node, input) {
    node.style.display = 'none';
    input.setAttribute('aria-expanded', false);
  }

  function removeIcons(node) {
    var icons = node.querySelectorAll('.pe-icon-wrapper');
    return Array.prototype.forEach.call(icons, function (icon) {
      icon.style.display = 'none';
    });
  }

  function filterSelected(node, value) {
    return node.querySelector('[data-time^=\'' + value + '\']');
  }

  function returnSelected(node) {
    return node.getAttribute('data-selected');
  }

  function returnSelectedNode(node) {
    var time = returnSelected(node);
    return node.querySelector('[data-time=\'' + time + '\']');
  }

  function setSelectedFalse(node) {
    var list = node.querySelectorAll('#itemList li');
    return Array.prototype.forEach.call(list, function (item) {
      item.classList.remove('in-view');
      item.setAttribute('aria-selected', false);
    });
  }

  function throwError(node) {
    node.classList.add('error');
  }

  function clearError(node) {
    node.classList.remove('error');
  }

  Array.prototype.forEach.call(timepickers, function (timepicker) {
    var input = timepicker.querySelector('input'),
        dropdown = timepicker.querySelector('.pe-dropdown-container'),
        list = timepicker.querySelector('#itemList');

    function selectTime(node) {
      var icon = node.querySelector('.pe-icon-wrapper');
      removeIcons(list);
      setSelectedFalse(timepicker);
      closeDropdown(dropdown, input);
      icon.style.display = 'block';
      node.setAttribute('aria-selected', true);
      node.classList.add('in-view');
      list.setAttribute('data-selected', node.getAttribute('data-time'));
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
      var isValid = /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/.test(input.value);
      if (!isValid) {
        throwError(timepicker);
      } else {
        clearError(timepicker);
      }
    }

    input.style.textTransform = 'uppercase';

    doc.addEventListener('click', function (event) {
      if (dropdown.style.display === 'block') {
        if (event.target !== input) {
          dropdown.style.display = 'none';
        }
      }
    });

    input.addEventListener('focus', function (event) {
      var selected = returnSelectedNode(list);
      dropdown.style.display = 'block';
      event.target.setAttribute('aria-expanded', true);
      if (input.value.length > 6) {
        selected.scrollIntoView();
      }
    });

    input.addEventListener('blur', function (event) {
      validateTime();
    });

    input.addEventListener('keyup', function (event) {
      input.value = input.value.toUpperCase();
      hoverTime(filterSelected(list, input.value));
      if (event.key === 'Enter') {
        if (filterSelected(list, input.value) === null) {
          throwError(timepicker);
        } else {
          filterSelected(list, input.value).click();
        }
      }
    });

    dropdown.addEventListener('click', function (event) {
      selectTime(event.target);
      event.stopImmediatePropagation();
    });
  });
})(window, document);
(function (w, doc) {
  'use strict';

  var toggleBtns = doc.querySelectorAll('.pe-toggle');

  function toggleAriaChecked(el, isChecked) {
    el.setAttribute('aria-checked', !isChecked);
  }

  toggleBtns.forEach(function (button) {
    button.addEventListener('click', onToggleClick);
  });

  function onToggleClick(event) {
    var target = event.currentTarget,
        isChecked = target.getAttribute('aria-checked') === 'true';

    toggleAriaChecked(target, isChecked);
  }
})(window, document);
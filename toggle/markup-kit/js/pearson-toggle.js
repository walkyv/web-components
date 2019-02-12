(function(w, doc) {
  'use strict';
  
  const toggleBtns = doc.querySelectorAll('.pe-toggle');

  function toggleAriaChecked(el, isChecked) {
    el.setAttribute('aria-checked', !isChecked);
  }

  toggleBtns.forEach(function(button) {
    button.addEventListener('click', onToggleClick);
  });

  function onToggleClick(event) {
    const target = event.currentTarget,
      isChecked = target.getAttribute('aria-checked') === 'true';

    toggleAriaChecked(target, isChecked);
  }
})(window, document);

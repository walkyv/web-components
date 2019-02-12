(function(w, doc) {
  'use strict';
  
  const toggleBtns = doc.querySelectorAll('.pe-toggle > button');

  function toggleAriaChecked(el, isChecked) {
    el.setAttribute('aria-checked', !isChecked);
  }

  function setValue(el, value) {
    el.value = value;
  }

  toggleBtns.forEach(function(button) {
    button.addEventListener('click', onToggleClick);
  });

  function onToggleClick(event) {
    const target = event.currentTarget,
      isChecked = target.getAttribute('aria-checked') === 'true';

    // setValue(target, isChecked);
    toggleAriaChecked(target, isChecked);
  }
})(window, document);

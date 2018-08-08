'use strict';
(function(w, doc) {
  const toggles = doc.querySelectorAll('.pe-toggle');

  function toggleAriaChecked(checked, target) {
    if (checked === 'false') {
      target.setAttribute('aria-checked', 'true');
    } else {
      target.setAttribute('aria-checked', 'false');
    }
  }

  function toggleValue(checked, target) {
    target.value = checked;
  }

  toggles.forEach(toggle => {
    const button = toggle.querySelector('button');

    button.addEventListener('click', event => {
      const target = event.currentTarget,
        isChecked = target.getAttribute('aria-checked');

      toggleValue(isChecked, target);
      toggleAriaChecked(isChecked, target);
    });
  });
})(window, document);

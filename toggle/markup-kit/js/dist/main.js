'use strict';

(function (w, doc) {
  var toggles = doc.querySelectorAll('.pe-toggle');

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

  toggles.forEach(function (toggle) {
    var button = toggle.querySelector('button');

    button.addEventListener('click', function (event) {
      var target = event.currentTarget,
          isChecked = target.getAttribute('aria-checked');

      toggleValue(isChecked, target);
      toggleAriaChecked(isChecked, target);
    });
  });
})(window, document);
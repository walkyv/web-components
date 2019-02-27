(function (w, doc) {
  'use strict';

  function moveIntoViewport(el) {
    el.style.top = w.scrollY + 'px';
    el.style.left = w.scrollX + 'px';
  }

  var alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
      alert = doc.querySelector('[data-alert]'),
      alertClose = alert.querySelector('[data-action="close-alert"]');

  var alertType = alert.dataset.alertType;

  var focusBeforeOpen = void 0;

  if (alertType === 'inline') {

    // Place the alert in the DOM right after the trigger
    alertTrigger.parentNode.insertBefore(alert, alertTrigger.nextElementSibling);
  }

  function triggerAlert() {
    focusBeforeOpen = doc.activeElement;

    if (alertType === 'inline') {
      alert.classList.add('fadeIn');
      alert.classList.remove('fadeOut');
    }

    if (alertType === 'global') {
      moveIntoViewport(alert);
      alert.classList.add('slideInDown');
      alert.classList.remove('slideOutDown');
    }

    if (alert.hasAttribute('data-needs-interaction')) {
      setTimeout(function () {
        alertClose.focus();
      }, 250);
    }
  }

  function closeAlert() {
    if (alertType === 'inline') {
      alert.classList.add('fadeOut');
      alert.classList.remove('fadeIn');
    }
    if (alertType === 'global') {
      alert.classList.remove('slideInDown');
      alert.classList.add('slideOutDown');
    }
    focusBeforeOpen.focus();
  }

  alertTrigger.addEventListener('click', triggerAlert);
  alertClose.addEventListener('click', closeAlert);
})(window, document);
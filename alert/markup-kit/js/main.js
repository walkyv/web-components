(function(w, doc) {
  'use strict';
  // do something
  const alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
    alert = doc.querySelector('[data-alert]'),
    alertBody = alert.querySelector('[data-alert-body]'),
    alertClose = alert.querySelector('[data-action="close-alert"]');

  let focusBeforeOpen;

  function triggerAlert() {
    focusBeforeOpen = doc.activeElement;
    alertBody.hidden = false;

    alert.classList.add('slideInDown');
    alert.classList.remove('slideOutDown');

    if (alert.hasAttribute('data-important')) {
      setTimeout(() => {
        alertClose.focus();
      }, 250);
    }
  }

  function closeAlert() {
    alert.classList.remove('slideInDown');
    alert.classList.add('slideOutDown');
    setTimeout(() => {
      alertBody.hidden = true;
    }, 100);
    focusBeforeOpen.focus();
  }

  alertTrigger.addEventListener('click', triggerAlert);
  alertClose.addEventListener('click', closeAlert);
})(window, document);

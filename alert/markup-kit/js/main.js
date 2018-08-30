(function(w, doc) {
  'use strict';

  const alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
    alert = doc.querySelector('[data-alert]'),
    alertContent = alert.querySelector('[data-alert-content]'),
    alertClose = alert.querySelector('[data-action="close-alert"]');

  const alertType = alert.dataset.alertType;

  let focusBeforeOpen;

  if (alertType === 'inline') {
    const wrapper = doc.createElement('div');
    wrapper.style.position = 'relative';

    // Move the alert into an absolutely positioned wrapper
    alert.parentNode.insertBefore(wrapper, alert);
    wrapper.appendChild(alert);

    // Place the wrapper in the dom rightg after the trigger
    alertTrigger.parentNode.insertBefore(
      wrapper,
      alertTrigger.nextElementSibling
    );
  }

  function triggerAlert() {
    focusBeforeOpen = doc.activeElement;
    alert.hidden = false;
    alertContent.hidden = false;

    if (alertType === 'global') {
      alert.classList.add('slideInDown');
      alert.classList.remove('slideOutDown');
    }

    if (alert.hasAttribute('data-important')) {
      setTimeout(() => {
        alertClose.focus();
      }, 250);
    }
  }

  function closeAlert() {
    if (alertType === 'global') {
      alert.classList.remove('slideInDown');
      alert.classList.add('slideOutDown');
    }
    setTimeout(() => {
      alert.hidden = true;
      alertContent.hidden = true;
    }, 100);
    focusBeforeOpen.focus();
  }

  alertTrigger.addEventListener('click', triggerAlert);
  alertClose.addEventListener('click', closeAlert);
})(window, document);

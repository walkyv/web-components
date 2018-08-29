'use strict';

(function (w, doc) {
  'use strict';
  // do something

  var alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
      alert = doc.querySelector('[data-alert]'),
      alertBody = alert.querySelector('[data-alert-body'),
      alertClose = alert.querySelector('[data-action="close-alert"]');

  alertTrigger.addEventListener('click', function () {
    alertBody.hidden = false;
    alert.classList.add('slideInDown');
    alert.classList.remove('slideOutDown');
  });

  alertClose.addEventListener('click', function () {
    alert.classList.remove('slideInDown');
    alert.classList.add('slideOutDown');
    setTimeout(function () {
      alertBody.hidden = true;
    }, 100);
    alertTrigger.focus();
  });

  if (alert.attributes.important) {
    alertClose.focus();
  }
})(window, document);
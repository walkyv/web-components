(function (w, doc) {
  'use strict';

  // Replace with your code!

  var dateInput = doc.querySelector('#datepicker');
  var calendar = doc.querySelector('.calendar');

  dateInput.addEventListener('focus', function () {
    calendar.classList.remove('hidden');
  });

  dateInput.addEventListener('blur', function () {
    calendar.classList.add('hidden');
  });

  // Your code ends here!
})(window, document);
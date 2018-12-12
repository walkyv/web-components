(function(w, doc) {
  'use strict';

  // Replace with your code!

  const dateInput = doc.querySelector('#datepicker');
  const calendar = doc.querySelector('.calendar');

  dateInput.addEventListener('focus', () => {
    calendar.classList.remove('hidden');
  });

  dateInput.addEventListener('blur', () => {
    calendar.classList.add('hidden');
  })

  // Your code ends here!
})(window, document);

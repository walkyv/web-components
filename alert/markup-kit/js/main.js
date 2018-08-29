(function(w, doc) {
  'use strict';
  // do something
  const closeButton = doc.getElementById('closeAlert'),
    alert = doc.getElementById('alert');

  closeButton.addEventListener('click', () => {
    alert.classList.remove('slideInDown');
    alert.classList.add('slideOutDown');
  });

  if (alert.attributes.important) {
    closeButton.focus();
  }

})(window, document);

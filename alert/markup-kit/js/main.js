'use strict';
(function() {
  // do something
  const closeButton = document.getElementById('closeAlert'),
    alert = document.getElementById('alert');

  closeButton.addEventListener('click', event => {
      alert.classList.remove('slideInDown');
      alert.classList.add('slideOutDown');
  });

  if (alert.attributes.important) {
    closeButton.focus();
  }

})();

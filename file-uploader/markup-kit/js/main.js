'use strict';
(function() {
  window.addEventListener('load', event => {
    var file = '../markup-kit/css/style.css';
    var link = document.createElement( "link" );
    link.href = file.substr( 0, file.lastIndexOf( "." ) ) + ".css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    const modal = document.querySelector('pearson-modal');
    modal.insertBefore(link, modal.querySelector('#modalOverlay'));

  })
  // do something

})();

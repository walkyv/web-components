(function() {
    'use strict';

    const progressBars = document.querySelectorAll(".pe-progress-bar.standard");

    progressBars.forEach(bar => {

        const loadingBar = bar.querySelector("[role=progressbar]"),
              endPercent = loadingBar.getAttribute("aria-valuenow");

        setTimeout( function(){
            loadingBar.setAttribute("style", "width: " + endPercent + "%;")
        })

    })
})();

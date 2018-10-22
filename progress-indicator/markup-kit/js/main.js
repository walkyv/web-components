(function() {
    'use strict';

    const progressBars = document.querySelectorAll(".pe-progress-bar.standard");

    progressBars.forEach(bar => {
        var endPercent = 20;

        const label = bar.querySelector(".fullbar"),
            loadingBar = bar.querySelector("[role=progressbar]");

        label.innerHTML = endPercent + "%";

        loadingBar.setAttribute('aria-valuenow',endPercent)
        setTimeout( function(){
            loadingBar.setAttribute("style", "width: " + endPercent + "%;")

        })

    })
})();

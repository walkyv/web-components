"use strict";

(function () {
    'use strict';

    var progressBars = document.querySelectorAll(".pe-progress-bar.standard");

    progressBars.forEach(function (bar) {

        var loadingBar = bar.querySelector("[role=progressbar]"),
            endPercent = loadingBar.getAttribute("aria-valuenow");

        setTimeout(function () {
            loadingBar.setAttribute("style", "width: " + endPercent + "%;");
        });
    });
})();
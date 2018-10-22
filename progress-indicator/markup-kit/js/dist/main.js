"use strict";

(function () {
    'use strict';

    var progressBars = document.querySelectorAll(".pe-progress-bar.standard");

    progressBars.forEach(function (bar) {
        var endPercent = 20;

        var label = bar.querySelector(".fullbar"),
            loadingBar = bar.querySelector("[role=progressbar]");

        label.innerHTML = endPercent + "%";

        loadingBar.setAttribute('aria-valuenow', endPercent);
        setTimeout(function () {
            loadingBar.setAttribute("style", "width: " + endPercent + "%;");
        });
    });
})();
'use strict';

(function () {
    var calendars = document.querySelectorAll(".pe-calendar");

    calendars.forEach(function (calendar) {
        var grid = calendar.querySelector(".pe-cal-dates"),
            dates = calendar.querySelectorAll(".date-selector:not(:disabled)");

        function unfocusAll() {
            Array.prototype.forEach.call(dates, function (date) {
                date.setAttribute("tabindex", "-1");
            });
        }

        function selectDate(date) {
            focusDate(date);
            Array.prototype.forEach.call(dates, function (others) {
                others.setAttribute("aria-pressed", "false");

                if (others.classList.contains("pe-cal-selected")) {
                    others.classList.remove("pe-cal-selected");

                    var oldLabel = others.getAttribute("aria-label");
                    console.log(oldLabel);

                    var newLabel = oldLabel.replace(" (Selected)", "");
                    others.setAttribute("aria-label", newLabel);
                }
            });
            date.classList.add("pe-cal-selected");
            date.setAttribute("aria-pressed", "true");

            var currentLabel = date.getAttribute("aria-label");
            date.setAttribute("aria-label", currentLabel + " (Selected)");
        }

        function focusDate(date) {
            unfocusAll();
            grid.setAttribute("aria-activedescendant", date.id);
            date.setAttribute("tabindex", "0");
            date.focus();
        }

        //onload, make sure all dates are set to tabindex -1
        unfocusAll();
        //set focus to already selected date (if available)
        var activeDescendant = grid.getAttribute("aria-activedescendant");
        if (activeDescendant) {
            document.getElementById(activeDescendant).setAttribute("tabindex", "0");
        }

        grid.addEventListener("keydown", function (event) {
            var activeDescendant = grid.getAttribute("aria-activedescendant");
            //get position of active descendant in array
            var focusedItem = [].indexOf.call(dates, document.getElementById(activeDescendant));

            var which = event.which;

            if (which === 39) {
                //ArrowRight
                event.preventDefault();
                focusDate(dates[focusedItem + 1]);
            } else if (which === 37) {
                //ArrowLeft
                event.preventDefault();
                focusDate(dates[focusedItem - 1]);
            } else if (which === 40) {
                //ArrowDown
                event.preventDefault();
                focusDate(dates[focusedItem + 7]);
            } else if (which === 38) {
                //ArrowUp
                event.preventDefault();
                focusDate(dates[focusedItem - 7]);
            } else if (which === 36) {
                //Home
                event.preventDefault();
                focusDate(dates[0]);
            } else if (which === 35) {
                //End
                event.preventDefault();
                focusDate(dates[dates.length - 1]);
            }
        });

        dates.forEach(function (date) {
            date.addEventListener("click", function (event) {
                selectDate(event.currentTarget);
            });
        });
    });
})();
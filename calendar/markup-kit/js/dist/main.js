'use strict';

(function () {
    var calendars = document.querySelectorAll(".pe-calendar");

    calendars.forEach(function (calendar) {
        var grid = calendar.querySelector("[role=grid]"),
            dates = calendar.querySelectorAll("[role=gridcell]:not(:disabled)");

        console.log(dates);

        function unfocusAll() {
            Array.prototype.forEach.call(dates, function (date) {
                date.setAttribute("tabindex", "-1");
            });
        }

        function selectDate(date) {
            unfocusAll();
            grid.setAttribute("aria-activedescendant", date.id);
            date.setAttribute("tabindex", "0");
            date.focus();

            Array.prototype.forEach.call(dates, function (others) {
                others.removeAttribute("aria-selected");

                if (others.querySelector(".pe-cal-cell-square").classList.contains("pe-cal-selected")) {
                    others.querySelector(".pe-cal-cell-square").classList.remove("pe-cal-selected");
                }
            });
            date.querySelector(".pe-cal-cell-square").classList.add("pe-cal-selected");
            date.setAttribute("aria-selected", "true");
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

            switch (event.key) {
                case "ArrowRight":
                    selectDate(dates[focusedItem + 1]);
                    break;

                case "ArrowLeft":
                    selectDate(dates[focusedItem - 1]);
                    break;
                case "ArrowDown":
                    selectDate(dates[focusedItem + 7]);
                    break;
                case "ArrowUp":
                    selectDate(dates[focusedItem - 7]);
                    break;
                case "PageUp":
                    //previous month
                    break;
                case "PageDown":
                    //next month
                    break;
                case "Home":
                    //beginning of month
                    selectDate(dates[0]);
                    break;
                case "End":
                    //end of month
                    selectDate(dates[dates.length - 1]);
                    break;
            }
        });

        dates.forEach(function (date) {
            date.addEventListener("click", function (event) {
                selectDate(event.currentTarget);
            });
        });
    });
})();
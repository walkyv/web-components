(function() {
  'use strict';

  const datepickers = document.querySelectorAll('.datepicker-container');

  function unfocusAll(node) {
    const dates = node.querySelectorAll(".date-selector:not(:disabled)");
    Array.prototype.forEach.call(dates, date => {
      date.setAttribute("tabindex","-1");
    });
  }

  Array.prototype.forEach.call(datepickers, datepicker => {
    const grid = datepicker.querySelector(".pe-cal-dates"),
      dates = datepicker.querySelectorAll(".date-selector:not(:disabled)"),
      activeDescendant = grid.getAttribute("aria-activedescendant");

    function focusDate(date) {
      unfocusAll(datepicker);
      if (date !== undefined) {
        grid.setAttribute("aria-activedescendant", date.id);
        date.setAttribute("tabindex","0");
        date.focus();
      }
    }

    function selectDate(date) {
      const currentLabel = date.getAttribute("aria-label");
      focusDate(date);
      Array.prototype.forEach.call(dates, date =>  {
        const oldLabel = date.getAttribute("aria-label"),
          newLabel = oldLabel.replace(" (Selected)", "");
        date.setAttribute("aria-pressed","false");
        if ( date.classList.contains("pe-cal-selected") ) {
          date.classList.remove("pe-cal-selected");
          date.setAttribute("aria-label", newLabel)
        }
      });
      date.classList.add("pe-cal-selected");
      date.setAttribute("aria-pressed","true");
      date.setAttribute("aria-label", currentLabel + " (Selected)");
    }



    //onload, make sure all dates are set to tabindex -1
    unfocusAll(datepicker);

    //set focus to already selected date (if available)
    if (activeDescendant) {
      document.getElementById(activeDescendant).setAttribute("tabindex","0");
    }

    grid.addEventListener("keydown", function(event) {
      event.preventDefault();
      const activeDescendant = grid.getAttribute("aria-activedescendant"),
        focusedItem = [].indexOf.call(dates,document.getElementById(activeDescendant));
      switch (event.keyCode) {
        case 39:
          focusDate( dates[focusedItem + 1]);
          break;
        case 37:
          focusDate(dates[focusedItem - 1])
          break;
        case 40:
          focusDate(dates[focusedItem + 7]);
          break;
        case 38:
          focusDate( dates[focusedItem - 7]);
          break;
        case 36:
          focusDate( dates[0]);
          break;
        case 35:
          focusDate( dates[dates.length - 1]);
          break;
      }
    });

    Array.prototype.forEach.call(dates, date => {
      date.addEventListener("click", event => {
        selectDate(event.currentTarget);
      })
    });
  })

})();

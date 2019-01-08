(function(win, doc) {
  'use strict';

  const datepickers = document.querySelectorAll('.datepicker-container');

  function closeCalendar (node, input) {
    node.style.display = 'none' ;
    input.setAttribute('aria-expanded', false)
    input.focus();
  }

  function openCalendar (node, input) {
    const selectedDate = input.getAttribute('data-selected');
    if (selectedDate !== null) {
      const selectedNode = node.querySelector(`[data-date="${selectedDate}"]`);
      setTimeout(() => {
        selectedNode.focus();
      },10)
    } else {
      const currentNode = node.querySelector('.currentDate-box button');
      setTimeout(() => {
        currentNode.focus();
      },10)
    }
    node.style.display = 'inline-flex';
    input.setAttribute('aria-expanded', true);
  }

  function selectDate(node, input, dates) {
    const value = node.getAttribute('data-date');
    Array.prototype.forEach.call(dates, date => {
      date.classList.remove('selected');
    });
    input.setAttribute('data-selected', value);
    input.value = value;
    node.classList.add('selected');
  }

  Array.prototype.forEach.call(datepickers, (datepicker,index) => {
      const dates = datepicker.querySelectorAll("button:not(:disabled)"),
      input = datepicker.querySelector('input'),
      calendar = datepicker.querySelector('.calendar-container'),
        focusableElements = dates,
        firstFocusableElement = focusableElements[0],
        lastFocusableElement = focusableElements[focusableElements.length - 1];

      Array.prototype.forEach.call(focusableElements, (el,index) => {
        el.setAttribute('data-index', index);
      });

    input.addEventListener('click', event => {
      openCalendar(calendar, input)
    });

    input.addEventListener('keydown', event => {
      event.preventDefault();
      switch (event.keyCode) {
        case 40:
          if (calendar.style.display === 'none') {
            openCalendar(calendar, input)
          }
          break
      }
    });

    // sets the date when number is clicked
    calendar.addEventListener('click', event => {
      if (event.target.classList.contains('date-selector')) {
        selectDate(event.target, input, dates)
        closeCalendar(calendar, input)
      } else {
        return;
      }
    });

    // calendar keyboard navigation
    calendar.addEventListener("keydown", function(event) {
      const nextItem = parseInt(event.target.getAttribute('data-index')) + 1,
        prevItem = parseInt(event.target.getAttribute('data-index')) - 1,
        nextWeek = parseInt(event.target.getAttribute('data-index')) + 7,
        prevWeek = parseInt(event.target.getAttribute('data-index')) - 7;

      event.preventDefault();
      switch (event.keyCode) {
        case 39:
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
          } else {
            if (focusableElements[nextItem] !== undefined) {
              focusableElements[nextItem].focus();
            } else {
              return
            }
          }
          break;
        case 37:
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
          } else {
            if (focusableElements[prevItem] !== undefined) {
              focusableElements[prevItem].focus();
            } else {
              return
            }
          }
          break;
        case 40:
          if (focusableElements[nextWeek] !== undefined) {
            focusableElements[nextWeek].focus();
          } else {
            // target next month
          }
          break;
        case 38:
          if (focusableElements[prevWeek] !== undefined) {
            focusableElements[prevWeek].focus();
          } else {
            // target previous month
          }
          break;
        case 13:
          selectDate(event.target, input, dates);
          closeCalendar(calendar, input)
          break;
      }
    });

    // closes calendar on escape keypress
    doc.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        closeCalendar(calendar, input);
      }
    });

    // closes dropdown when click is outside of component
    doc.addEventListener('click', event => {
      if (calendar.style.display === 'inline-flex') {
        let target = event.target;
        do {
          if (target === calendar)  {
            return;
          }
          target = target.parentNode;
        } while (target);
        closeCalendar(calendar, input);
      }
    }, true);
  })

})(window, document);

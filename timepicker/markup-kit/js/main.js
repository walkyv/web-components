(function() {
  'use strict';
  const timepickers = document.querySelectorAll(".pe-timepicker-main");
  const icon = '<span class="pe-icon-wrapper"><svg focusable="false" aria-hidden="true" class="pe-icon--check-sm-18"><use xlink:href="#check-sm-18"></use></svg></span>';

  Array.prototype.forEach.call(timepickers, timepicker => {
    const input = timepicker.querySelector(".pe-textInput--basic"),
      listbox = timepicker.querySelector("[role=listbox]"),
      listItems = listbox.querySelectorAll("[role=option]"),
      availableTimes = [];

    Array.prototype.forEach.call(listItems, item => {
      availableTimes.push({
        "id": item.id,
        "time": item.innerHTML
      })
    })



    function openList() {
      const selection = listbox.querySelector("[aria-selected=true]");
      Array.prototype.forEach.call(listItems, item => {
        item.classList.remove('in-view')
      })
      input.setAttribute("aria-expanded", "true");
      listbox.classList.remove('animateOut');
      listbox.classList.add('animateIn');
      listbox.style.display = "block";
      if (listbox.classList.contains("with-selection")) {
        input.setAttribute("aria-activedescendant", selection.id);
      }
      if (selection !== null) {
        selection.scrollIntoView();
        selection.classList.add('in-view')
      }
    }

    function closeList() {
      input.setAttribute("aria-expanded", "false");
      listbox.classList.add('animateOut');
      listbox.classList.remove('animateIn');
      listbox.style.display = "none";
    }

    function moveFocus(item) {
      input.setAttribute('aria-activedescendant', item.id);
      item.focus();
    }

    function selectItem(item) {
      Array.prototype.forEach.call(listItems, listitem => {
        listitem.setAttribute("aria-selected", "false");
        if (listbox.classList.contains("with-selection")) {
          const selectedItem = listbox.querySelector(".pe-icon-wrapper");
          if (selectedItem) {
            selectedItem.parentNode.removeChild(selectedItem)
          }
        }
      });
      item.setAttribute("aria-selected", "true");
    }

    function throwError() {
      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error-msg");
      errorMsg.setAttribute("id", "error1");
      errorMsg.innerHTML = '<svg focusable="false" class="pe-icon--warning-sm-18" role="img" aria-label="Error"><use xlink:href="#warning-sm-18"></use></svg> Enter a valid time format'
      input.parentNode.previousElementSibling.classList.add("error"); //label
      input.classList.add("error");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "error1");
      input.parentNode.parentNode.insertBefore(errorMsg, input.parentNode.nextSibling);
    }

    function clearError() {
      const errorMsg = timepicker.querySelector(".error-msg");
      input.parentNode.previousElementSibling.classList.remove("error");
      input.classList.remove("error");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
      if (errorMsg) {
        timepicker.removeChild(errorMsg);
      }
    }

    function validateTime() {
      const isValid = /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/.test(input.value);
      if (!isValid) {
        throwError()
      } else {
        clearError()
      }
    }

    input.addEventListener("focus", event => {
      if (input.classList.contains("error")) {
        clearError()
      }
      openList()
    });

    input.addEventListener('keyup', event=> {
      console.log(input.value)
      input.value.toLocaleUpperCase();
    });
    input.addEventListener("input", event => {
      console.log(event)
      if (isNaN(input.value.charAt(0))) {
        input.value = '';
      } else if (event.data === ':') {
        console.log('add 00')
        input.value = input.value + '00 '
      } else if (event.data === 'p' || event.data === 'P') {
        input.value = input.value.slice(0, -1);
        input.value = input.value + 'PM';

        const fullSelect = listbox.querySelector(`[data-time="${input.value}"]`);
        fullSelect.click();

      } else if (event.data === 'a' || event.data === 'A') {
        input.value = input.value.slice(0, -1);
        input.value = input.value + 'AM'

        const fullSelect = listbox.querySelector(`[data-time="${input.value}"]`);
        fullSelect.click();

      } else {
        const currentInput = input.value;
        const times = [];
        Array.prototype.forEach.call(listItems, item => {
          times.push(item.innerHTML.toLowerCase());
          item.classList.remove('in-view')
        });

        Array.prototype.forEach.call(times, time => {
          const selected = listbox.querySelector(`[data-time^="${input.value.charAt(0)}"]`);
          if (currentInput.charAt(0) === time.charAt(0)) {
            if (selected !== null) {
              selected.scrollIntoView();
              selected.classList.add('in-view')
            }
          }
        });

        if (times.indexOf(currentInput.toLowerCase()) > -1) {
          const index = times.indexOf(currentInput.toLowerCase());
          listbox.classList.add("with-selection");
          selectItem(listItems[index])
          input.setAttribute('aria-activedescendant', listItems[index].id);
          const currentTime = listItems[index].innerHTML;
          listItems[index].innerHTML = icon + currentTime;
          Array.prototype.forEach.call(listItems, item => {
            item.classList.remove('in-view')
          })
          listItems[index].classList.add('in-view');
          listItems[index].scrollIntoView()
        } else {
          input.removeAttribute("aria-activedescendant")
          Array.prototype.forEach.call(listItems, listitem => {
            listitem.setAttribute("aria-selected", "false");
            if (listbox.classList.contains("with-selection")) {
              const selectedItem = listbox.querySelector(".pe-icon-wrapper");
              if (selectedItem) {
                selectedItem.parentNode.removeChild(selectedItem)
              }
              listbox.classList.remove("with-selection")
            }
          });
        }
      }
    })

    input.addEventListener("blur", event => {
      if (!input.value == "" && !input.hasAttribute("aria-invalid")) {
        validateTime();
        //a little buggy trying to select a new time after error is thrown
      }
    })

    input.addEventListener("keydown", event => {
      switch (event.code) {
        case "ArrowDown":
          event.preventDefault();
          openList()
          //if selected item exists go to selected item
          if (input.hasAttribute("aria-activedescendant")) {
            const activeDescendant = input.getAttribute("aria-activedescendant");
            moveFocus(document.getElementById(activeDescendant));
          } else {
            //else go to first item
            moveFocus(listItems[0]);
          }
          break;
        case "Escape":
          closeList();
          input.focus();
          break;
        case "Enter":
          closeList();
          break;

      }
    })

    listbox.addEventListener("keydown", event => {
      const activeDescendant = input.getAttribute("aria-activedescendant"),
        focusedItemIndex = [].indexOf.call(listItems, document.getElementById(activeDescendant));

      const firstFocusableElement = listItems[0],
        lastFocusableElement = listItems[listItems.length - 1];

      switch (event.code) {
        case "ArrowDown":
          event.preventDefault();
          if (document.activeElement === lastFocusableElement) {
            moveFocus(firstFocusableElement);
          } else {
            moveFocus(listItems[focusedItemIndex + 1]);
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          if (document.activeElement === firstFocusableElement) {
            moveFocus(lastFocusableElement);
          } else {
            moveFocus(listItems[focusedItemIndex - 1]);
          }
          break;
        case "Home":
          moveFocus(firstFocusableElement);
          break;
        case "End":
          moveFocus(lastFocusableElement);
          break;

        case "Enter":
        case "Space":
          selectItem(document.activeElement);
          if (input.hasAttribute("aria-invalid")) {
            clearError();
          }
          input.value = document.activeElement.innerText;
          listbox.classList.add("with-selection")
          //add icon
          const currentTime = document.activeElement.innerHTML;
          document.activeElement.innerHTML = icon + currentTime;
          closeList();
          input.focus();
          break;

        case "Escape":
          closeList();
          input.focus();
          break;
      }
    })

    Array.prototype.forEach.call(listItems, listitem => {
      listitem.addEventListener("click", event => {
        selectItem(event.target);
        input.value = event.target.innerText;
        const currentTime = event.target.innerHTML;
        event.target.innerHTML = icon + currentTime;
        listbox.classList.add("with-selection");
        input.focus();
        closeList();
        if (document.activeElement !== event.target) {
          closeList();
          input.focus()
        }
      })
    })

    document.addEventListener('click', event => {
      if (!event.target.closest('.pe-timepicker-main')) {
        closeList()
      }
    })
  })

})();

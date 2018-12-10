(function() {
    'use strict';

    const timepickers = document.querySelectorAll(".pe-timepicker-main");

    timepickers.forEach(timepicker => {
        const input = timepicker.querySelector(".pe-textInput--basic"),
            listbox = timepicker.querySelector("[role=listbox]"),
            listItems = listbox.querySelectorAll("[role=option]");

        var availableTimes = [];

        listItems.forEach(item => {
            availableTimes.push({"id": item.id, "time": item.innerHTML})
        })


        var icon = '<span class="pe-icon-wrapper"><svg focusable="false" aria-hidden="true" class="pe-icon--check-sm-18"><use xlink:href="#check-sm-18"></use></svg></span>';

        function openList() {
            input.setAttribute("aria-expanded","true");

            listbox.classList.remove('animateOut');
            listbox.classList.add('animateIn');
            listbox.style.display = "block";

            if (listbox.classList.contains("with-selection")) {
                var selection = listbox.querySelector("[aria-selected=true]");

                input.setAttribute("aria-activedescendant",selection.id);
            }
        }

        function closeList() {
            input.setAttribute("aria-expanded","false");
            listbox.classList.add('animateOut');
            listbox.classList.remove('animateIn');
            listbox.style.display = "none";

        }

        function moveFocus(item) {
            input.setAttribute('aria-activedescendant', item.id);
            item.focus();
        }

        function selectItem(item) {
            listItems.forEach(listitem => {
                listitem.setAttribute("aria-selected","false");
                if (listbox.classList.contains("with-selection")) {
                    var selectedItem = listbox.querySelector(".pe-icon-wrapper");
                    if (selectedItem) {
                        selectedItem.parentNode.removeChild(selectedItem)
                    }

                }

            })
            item.setAttribute("aria-selected","true");
        }

        function throwError() {

            var errorMsg = document.createElement("p");

            errorMsg.classList.add("error-msg");
            errorMsg.setAttribute("id","error1");
            errorMsg.innerHTML = '<svg focusable="false" class="pe-icon--warning-sm-18" role="img" aria-label="Error"><use xlink:href="#warning-sm-18"></use></svg> Enter a valid time format'

            input.parentNode.previousElementSibling.classList.add("error"); //label
            input.classList.add("error");
            input.setAttribute("aria-invalid","true");
            input.setAttribute("aria-describedby","error1");
            input.parentNode.parentNode.insertBefore(errorMsg,input.parentNode.nextSibling);
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
            var isValid = /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/.test(input.value);
            if (!isValid) {
                throwError()
            } else {
                clearError()
            }
        }

        input.addEventListener("click", event => {
            if (input.classList.contains("error")) {
                clearError()
            }
            openList()

        });

        input.addEventListener("input", event => {
            //on typing, close the dropdown (original UXF spec)
            //closeList()

            //Greg suggestion: find closest time and put focus on it in the list (see Google Calendar)

            var currentInput = input.value;
            var times = []
            listItems.forEach(item => {
                 times.push(item.innerHTML.toLowerCase());
            })

            if (times.indexOf(currentInput.toLowerCase()) > -1) {
                var index = times.indexOf(currentInput.toLowerCase());

                listbox.classList.add("with-selection")
                selectItem(listItems[index])
                input.setAttribute('aria-activedescendant', listItems[index].id);
                var currentTime = listItems[index].innerHTML;
                listItems[index].innerHTML = icon + currentTime;

                if (listItems[index].offsetTop > 150) {
                    listbox.scrollTo(0, (listItems[index].offsetTop - 150));
                } else {
                    listbox.scrollTo(0,0);
                }
            } else {
                input.removeAttribute("aria-activedescendant")
                //deselect all
                listItems.forEach(listitem => {
                    listitem.setAttribute("aria-selected","false");
                    if (listbox.classList.contains("with-selection")) {
                        var selectedItem = listbox.querySelector(".pe-icon-wrapper");
                        if (selectedItem) {
                            selectedItem.parentNode.removeChild(selectedItem)
                        }
                        listbox.classList.remove("with-selection")

                    }

                })
            }

            //enhancement to set closest value as active descendant (but not select)

        })
        input.addEventListener("blur", event => {
            if (!input.value == "" && !input.hasAttribute("aria-invalid")) {
                validateTime();
                //a little buggy trying to select a new time after error is thrown
            }
        })

        input.addEventListener("keydown", event => {
            switch(event.code) {
                case "ArrowDown":
                    event.preventDefault();
                    openList()
                    //if selected item exists go to selected item
                    if (input.hasAttribute("aria-activedescendant")) {
                        var activeDescendant = input.getAttribute("aria-activedescendant");
                        moveFocus(document.getElementById(activeDescendant));
                    }
                    else {
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
            var activeDescendant = input.getAttribute("aria-activedescendant"),
                focusedItemIndex = [].indexOf.call(listItems, document.getElementById(activeDescendant));

            const firstFocusableElement = listItems[0],
                lastFocusableElement = listItems[listItems.length - 1];

            switch(event.code) {
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
                    var currentTime = document.activeElement.innerHTML;
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

        listItems.forEach(listitem => {

            listitem.addEventListener("click", event => {
                selectItem(event.target);

                input.value = event.target.innerText;
                //add icon
                var currentTime = event.target.innerHTML;
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

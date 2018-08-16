'use strict';

(function () {
  var tabs = document.querySelectorAll('[role=tab]'),
      tabList = document.querySelector('[role=tablist]');

  function returnCurrentTabItem() {
    return document.querySelector('[data-tab-selected]').getAttribute('data-tab-selected');
  }

  function returnCurrentTabItemDomNode() {
    var itemNumberSelected = returnCurrentTabItem();
    return document.querySelector('[data-tab="' + itemNumberSelected + '"]');
  }

  function buildSlider(width, position) {
    var sliderElement = document.querySelector('#tabSlider');
    sliderElement.style.width = width + 'px';
    sliderElement.style.left = position + 'px';
  }

  function getPosition(el) {
    return el.getBoundingClientRect();
  }

  function openPanel(width, left, tab, newTab) {
    var tabToHide = document.getElementById(tab.getAttribute('aria-controls')),
        tabToShow = document.getElementById(newTab.getAttribute('aria-controls'));

    buildSlider(width, left);
    tabToHide.classList.add('hidden');
    tabToShow.classList.remove('hidden');
  }

  Array.prototype.forEach.call(tabs, function (tab, index) {

    // set all the tabs with a unique data tab number
    tab.setAttribute('data-tab', index);

    // add event handlers to the tabs
    tab.addEventListener('click', function (event) {
      var currentTab = returnCurrentTabItemDomNode(),
          _this = event.currentTarget,
          left = getPosition(_this).left - 14,
          // 14 is the left margin
      width = getPosition(_this).width;

      // find the current item clicked and set aria selected FALSE
      currentTab.setAttribute('aria-selected', false);
      currentTab.parentNode.classList.remove('active');

      // find set the new item to aria selected TRUE
      tabList.setAttribute('data-tab-selected', index);
      _this.setAttribute('aria-selected', true);
      _this.parentNode.classList.add('active');

      // open panel and activate slider
      openPanel(width, left, currentTab, _this);
    });

    tab.addEventListener('keyup', function (event) {
      if (event.code === "ArrowRight") {
        console.log('next tab');
      } else if (event.code === "ArrowLeft") {
        console.log('previous tab');
      }
    });
  });

  // set slider to first activated item
  var firstItemWidth = getPosition(returnCurrentTabItemDomNode()).width;
  buildSlider(firstItemWidth, 0);
})();
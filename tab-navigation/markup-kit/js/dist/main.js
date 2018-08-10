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

  function buildSlider(width) {
    var sliderElement = document.querySelector('.tab-slider');
    sliderElement.style.width = width + 'px';
  }

  function getPosition(el) {
    return el.getBoundingClientRect();
  }

  Array.prototype.forEach.call(tabs, function (tab, index) {
    // set all the tabs with a unique data tab number
    tab.setAttribute('data-tab', index);

    // add event handlers to the tabs
    tab.addEventListener('click', function (event) {
      var currentTab = returnCurrentTabItemDomNode();

      // find the current item clicked and set aria selected FALSE
      currentTab.setAttribute('aria-selected', false);

      // find set the new item to aria selected TRUE
      tabList.setAttribute('data-tab-selected', index);
      event.currentTarget.setAttribute('aria-selected', true);

      // activate slider
    });
  });

  // set slider to first activated item
  var firstItemWidth = getPosition(returnCurrentTabItemDomNode()).width;
  buildSlider(firstItemWidth);
})();
function slideMenu() {
  var mainContent = document.getElementById('main-content');
  var menuWrapper = document.getElementById('menu-wrapper');

  //http://stackoverflow.com/questions/2739667/add-another-class-to-a-div-with-javascript
  //http://stackoverflow.com/questions/5898656/test-if-an-element-contains-a-class
  menuWrapper.className = menuWrapper.classList.contains('open') ? 'closed':'open';
  mainContent.className = mainContent.classList.contains('open') ? 'closed':'open';
}

var menuButton = document.getElementById('menu-slider-button');
menuButton.addEventListener('click', slideMenu, false);

function slideMenu() {
  var mainContent = document.getElementById('main-content');
  var menuWrapper = document.getElementById('menu-wrapper');

  //http://stackoverflow.com/questions/2739667/add-another-class-to-a-div-with-javascript
  //http://stackoverflow.com/questions/5898656/test-if-an-element-contains-a-class
  menuWrapper.className = menuWrapper.classList.contains('open') ? 'closed' : 'open';
  mainContent.className = mainContent.classList.contains('open') ? 'closed' : 'open';
}

function animateHamburger() {
  var hamburgerButton = this;
  hamburgerButton.className = hamburgerButton.classList.contains('open') ? 'closed' : 'open';
}

function setupEventListeners() {
  var hamburgerButton = document.getElementById('menu-slider-hamburger');
  hamburgerButton.addEventListener('click', slideMenu, false);
  hamburgerButton.addEventListener('click', animateHamburger, false);

  var menuItems = document.getElementById('menu').children;

  [].forEach.call(menuItems, function(menuItem, index) {
    menuItem.addEventListener('click', function() {
      document.getElementById('menu').getElementsByClassName('selected')[0].className = '';
      this.className = 'selected';
    }, false);
  });
}

setupEventListeners();
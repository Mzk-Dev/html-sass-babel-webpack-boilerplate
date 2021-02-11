import hcOffcanvasNav from 'hc-offcanvas-nav';
document.addEventListener('DOMContentLoaded', function() {
  var Nav = new hcOffcanvasNav('#main-nav', {
    disableAt: 1024,
    customToggle: '.toggle',
    navTitle: 'All Categories',
    levelTitles: true,
    levelTitleAsBack: true
  });
});
// change nav open position after each close
Nav.on('close', function(e, settings) {
  Nav.update({
    position: settings.position === 'left' ? 'right' : 'left'
  });
});

// will change nav open position only once
Nav.on('close.once', function(e, settings) {
  Nav.update({
    position: settings.position === 'left' ? 'right' : 'left'
  });
});

Nav.on('open.level', (e, settings) => {
  localStorage.setItem('NavLevel', e.data.currentLevel);
  localStorage.setItem('NavIndex', e.data.currentIndex);
});

Nav.on('close.level', (e, settings) => {
  localStorage.setItem('NavLevel', e.data.currentLevel);
  localStorage.setItem('NavIndex', e.data.currentIndex);
});

Nav.on('toggle', (e, settings) => {
  if (e.data.action == 'open') {
    // do something when `open` action is triggered
  }
});
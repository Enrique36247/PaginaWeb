document.getElementById('menuToggle').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

function toggleMenuIcon() {
  const menuIcon = document.getElementById('menuToggle');  

  if (window.innerWidth <= 768) {
    menuIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'none';
  }
}

window.onload = toggleMenuIcon;

window.onresize = toggleMenuIcon;
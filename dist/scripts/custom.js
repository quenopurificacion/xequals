const humburgerIcon = document.querySelector('.mobile-nav-toggle');
const mobileMenu = document.querySelector('.region-mobilenav');

humburgerIcon.addEventListener('click', function() {
    humburgerIcon.classList.toggle('menu-open');
    mobileMenu.classList.toggle('show'); 
});
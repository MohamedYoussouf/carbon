const mobileMenuTrigger = document.querySelector('#mobile_menu_trigger');
const mobileMenuClose = document.querySelector('#mobile_menu_close');
const mobileMenu = document.querySelector('#mobile_menu');

//  Open mobile menu when the menu button is clicked
mobileMenuTrigger.addEventListener('click', function () {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
});

//  Close mobile menu when the menu button is clicked
mobileMenuClose.addEventListener('click', function () {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
});
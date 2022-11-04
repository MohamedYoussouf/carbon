const mobileMenuTrigger = document.querySelector('#mobile_menu_trigger');
const mobileMenuClose = document.querySelector('#mobile_menu_close');
const mobileMenu = document.querySelector('#mobile_menu');

mobileMenuTrigger.addEventListener('click', function (params) {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
});
mobileMenuClose.addEventListener('click', function (params) {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
});
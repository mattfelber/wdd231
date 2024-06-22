// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.hamburger-menu');
    const mainMenu = document.querySelector('.main-menu');

    menuButton.addEventListener('click', function () {
        mainMenu.classList.toggle('show');
        menuButton.innerHTML = mainMenu.classList.contains('show') ? '&#10005;' : '&#8801;';
    });

    // Close the menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.main-menu a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            mainMenu.classList.remove('show');
            menuButton.innerHTML = '&#8801;';
        });
    });
});

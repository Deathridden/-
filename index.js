document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const menuItems = document.querySelectorAll('nav ul li a');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');
            navMenu.classList.remove('show');
        });
    });
});

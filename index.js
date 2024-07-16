document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const menuItems = document.querySelectorAll('nav ul li a');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const parentDropdown = item.parentElement.classList.contains('dropdown');
            if (parentDropdown) {
                e.preventDefault();
                item.parentElement.querySelector('.dropdown-content').classList.toggle('show');
            } else {
                menuItems.forEach(link => link.classList.remove('active'));
                item.classList.add('active');
                navMenu.classList.remove('show');
                document.querySelectorAll('.dropdown-content').forEach(content => content.classList.remove('show'));
            }
        });
    });

    // Close the dropdowns when clicking outside of them
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navMenu.classList.remove('show');
            document.querySelectorAll('.dropdown-content').forEach(content => content.classList.remove('show'));
        }
    });
});

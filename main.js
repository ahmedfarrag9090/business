(function() {
    var navbar = document.querySelector('.nav');
    window.scrollY >= 100 ? navbar.classList.add('nav-dark') : navbar.classList.remove('nav-dark');
    window.addEventListener("scroll", () => {
        window.scrollY >= 100 ? navbar.classList.add('nav-dark') : navbar.classList.remove('nav-dark');
    });

    let menuBtn = document.querySelector('.nav__menu-btn');
    let menu = document.querySelector('.nav__right');
    let menuItems = document.querySelectorAll('.nav__links-item');
    menuBtn.addEventListener('click', () => {
        if(menu.classList.contains('nav__right-open')){
            menu.classList.remove('nav__right-open')
            menuBtn.classList.remove('clicked')
        } else{
            menu.classList.add('nav__right-open')
            menuBtn.classList.add('clicked')
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
                menu.classList.remove('nav__right-open')
                menuBtn.classList.remove('clicked')
        });
    });
    
})();
(function() {
    var navbar = document.querySelector('.nav');
    window.scrollY >= 100 ? navbar.classList.add('nav-dark') : navbar.classList.remove('nav-dark');
    window.addEventListener("scroll", () => {
        window.scrollY >= 100 ? navbar.classList.add('nav-dark') : navbar.classList.remove('nav-dark');
    });
})();
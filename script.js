const search = document.querySelector(".menu-btn");
search.addEventListener('click', () => {
    document.querySelector('.main-header__menu').classList.toggle('open');
})
let headerBody = document.querySelector ('.header__body');
let headerNav = document.querySelector ('.header__nav');
let burgerMenu = document.querySelector ('.burger-menu');
burgerMenu.addEventListener ('click', function(){
    burgerMenu.classList.toggle ('active');
    headerBody.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.classList.toggle ('lock');
})


const menuLinks = document.querySelectorAll ('.header__link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menulink => {
        menulink.addEventListener('click', onMenuLinkClick);
    });


    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector ('header').offsetHeight;
    
            if(burgerMenu.classList.contains('active')){
                headerBody.classList.remove('active');
                headerNav.classList.remove('active');
                document.body.classList.remove ('lock');
                burgerMenu.classList.toggle ('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
};

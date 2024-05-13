let headerBody = document.querySelector ('.header__body');
let headerNav = document.querySelector ('.header__nav');
let gradientFirst = document.querySelector ('.gradient-first');


document.querySelector ('.burger-menu').addEventListener ('click', function(){
    this.classList.toggle ('active');
    headerBody.classList.toggle('active');
    headerNav.classList.toggle('active');
    gradientFirst.classList.toggle('active');

})
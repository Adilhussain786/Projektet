/*---Meny-knapp---*/

const navlänker = document.querySelector('.nav-länker');
const x_meny = document.querySelector('.close_meny');
const meny = document.querySelector('.meny');

meny.addEventListener('click', show);
x_meny.addEventListener('click', close);

function show() {
    navlänker.style.display = 'flex'
    navlänker.style.top = '0';
}

function close() {
    navlänker.style.top = ' -100%'
}

/*---sticky_navbar---*/

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})
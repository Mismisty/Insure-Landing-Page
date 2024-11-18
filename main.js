const navMenu = document.querySelector('#nav_menu');
const openHam = document.querySelector('#open_ham');
const closeMenu = document.querySelector('#close_menu');

const mainSec = document.querySelector('#main_section');


openHam.addEventListener('click', () => {
    
    navMenu.classList.remove('hidden');
    navMenu.classList.add('show');
    openHam.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    mainSec.classList.add('hidden');
});

closeMenu.addEventListener('click', () => {
    console.log('hello');
    navMenu.classList.add('hidden');
    navMenu.classList.remove('show');
    openHam.classList.remove('hidden');
    closeMenu.classList.add('hidden');
    mainSec.classList.remove('hidden');
});

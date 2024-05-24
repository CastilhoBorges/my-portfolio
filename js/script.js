/* ====== Abrir e fechar Menu ====== */
const navMenu = document.querySelector('#menu-bar'),
      navHamb = document.querySelector('#nav-hamb'),
      navClose = document.querySelector('#nav-close')

if(navHamb){ // Abrir o menu
    navHamb.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
} 

if (navClose) { // Fechar o menu
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ====== Remover o menu quando telas maiores ====== */
const navLink = document.querySelector('.nav_link')

const linkaction = () =>{
    const navMenu = document.querySelector('#menu-bar')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkaction))
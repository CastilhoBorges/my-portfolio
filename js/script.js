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
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.querySelector('#menu-bar')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ====== Adicionar blur ao header ====== */
const blurHeader = () => {
    const header = document.querySelector('#header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* ====== Email JS ====== */
const contatoForm = document.getElementById('contato-form'),
      contatoMsg = document.getElementById('contato-mensagem')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_3en4srr', 'template_pbnnknx', '#contato-form', 'y6fBI962t31HU3p8t')
        .then(() =>{
            contatoMsg.textContent = 'Mensagem enviada com suceeso ✅'

            setTimeout(() =>{
                contatoMsg.textContent = ''
            }, 5000)

            contatoForm.reset()

        }, () =>{
            contatoMsg.textContent = 'Mensagem não enviada (erro de serviço) ❌'
        })
}

contatoForm.addEventListener('submit', sendEmail)

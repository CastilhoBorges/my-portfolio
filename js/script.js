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
const contatoForm = document.querySelector('#contato-form'),
      contatoMessage = document.querySelector('#contato-mensagem')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_3en4srr', 'template_kd4wlwa', '#contato-form', 'y6fBI962t31HU3p8t')
        .then(()=>{
            contatoMessage.textContent = 'Mensagem enviada com sucesso ✅'
            
            // Eliminar a mensagem de enviado ou erro apos 5s 
            setTimeout(() =>{
                contatoMessage.textContent = ''
            }, 5000)
            
            // Para limpar apos enviado 
            contatoForm.reset()

        }, () =>{
            contatoMessage.textContent = 'Mensagem não enviada (Erro de serviço) ❌'
        })
}

contatoForm.addEventListener('submit', sendEmail)

/* ====== Scroll Up ====== */
const scrollUp = () =>{
    const scrollUp = document.querySelector('#scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ====== Scroll Section Links ====== */    
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.menu_bar a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll', scrollActive)

/* ====== ScrollReveal Animação ====== */ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: true
})

sr.reveal('.home_data, .home_social, .contato_container, footer_container')
sr.reveal('.home_image', {origin: 'bottom'})
sr.reveal('.about_data, .habilidades_data', {origin: 'left'})
sr.reveal('.about_image, .habilidades_content', {origin: 'right'})
sr.reveal('.services_card, .projects_card', {interval: 100})
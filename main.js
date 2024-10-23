const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail= (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_s5dlceh','template_ivqakml','#contact-form','FNPN3DEFwQW09edRF')
    .then(() =>{
        contactMessage.textContent = 'Message envoyé!'

        setTimeout(() =>{
            contactMessage.textContent=''
        },5000)

        contactForm.reset()
    },() =>{
        contactMessage.textContent = 'Message non envoyé'
    })
}
contactForm.addEventListener('Envoyer', sendEmail)
    
const scrollUp = () =>{
    const scrollUp = document.getElemebtById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__list a[href*='+ sectionId + ']')

            if(scrolldown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        })

}

window.addEventListener('scroll', scrollActive)

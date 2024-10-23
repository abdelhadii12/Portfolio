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
    
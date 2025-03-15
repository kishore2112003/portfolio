/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ye65hj', 'template_yh84du2', '#contact-form', 'NoGmIe6PsTGqNqzVP')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
    

     contactForm.reset()
    },()=>{
         contactMessage.textContent = 'Message not sent successfully ❌'
    })
    
}

contactForm.addEventListener('submit', sendEmail);

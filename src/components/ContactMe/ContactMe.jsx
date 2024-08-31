import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import email from '../../Assets/email.png'
import git from '../../Assets/git.png'
import communication from '../../Assets/communication.png'
import git2 from '../../Assets/github.png'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactInfoCard
                iconUrl={communication}
                text="nandamsarathchandra@gmail.com"
                />
                 <ContactInfoCard
                iconUrl={git2}
                text="https://github.com"
                />
            </div>
            <div style={{flex:1}}>
           <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe

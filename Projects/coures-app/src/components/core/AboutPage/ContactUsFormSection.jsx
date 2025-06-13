import React from 'react'
import ContactUsForm from '../../common/ContactUsPage/ContactUsForm'

const ContactUsFormSection = () => {
  return (
    <div className='text-white'>
        <h1>Get in Touch</h1>
        <p>We'd love to here for you, Please fill out this form.</p>

        <div>
            <ContactUsForm />
        </div>
    </div>
  )
}

export default ContactUsFormSection
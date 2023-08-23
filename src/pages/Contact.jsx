import React from 'react'
import { Container } from 'react-bootstrap'
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"

const Contact = () => {
  return (
    <>
    <Container>
      <div className='contact'>
      
        <div className="container contact__container">
        <h4 className='title-contact'>Contact</h4> 
          <div className="contact__wrapper">
            <a href="mailto:support@egattor.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+234 810 276 8368" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Contact
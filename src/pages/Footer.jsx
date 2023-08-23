import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  const data = new Date()
  const year = data.getFullYear()
  return (
  
    <footer className='footer__copyfight'>
       <Container>
       <small>{year} Dev | Fast &copy; All Rights Reserved</small>
       </Container>
    </footer>
   
  )
}

export default Footer
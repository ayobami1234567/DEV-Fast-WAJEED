import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/Service.css"
import exp from "../assets/img/iconspace.png"
const Resume = () => {
  return (
    <>
    <div className="Resume-container">
    <Container>
      <div className="Resume-inner">
      <div className="info-Resume">
      <h1 className='title'>Servies</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid praesentium est voluptas fuga dolorum tenetur, voluptatum rem exercitationem quisquam, earum commodi ipsam numquam ipsa. Dolor amet dolorem quibusdam enim totam.</p>
      <div className="icon-section">
        <ul>
          <li><img src={exp} alt="" /></li>
          <li><img src={exp} alt="" /></li>
          <li><img src={exp} alt="" /></li>
        </ul>
      </div>
      </div>
      </div>
    </Container>
    </div>
    </>
    
  )
}

export default Resume
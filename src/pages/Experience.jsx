import React from 'react'
import  ContaineEpx  from "../assets/img/expGreen.svg"
import { Container } from "react-bootstrap";
import "../styles/Experience.css"
import ExperienceCard from '../Components/ExperienceCard'
const Experience = () => {
  return (
    <div className="experience">
             <h1 className='title'>Experience</h1>
      <Container>
      <div className="experience-body">
 
        <div className="img-experience">
          <img src={ContaineEpx} alt="" />
        </div>
        <div className="experience-description">
          <h2 className='title'>Experience</h2>
          <ExperienceCard/>
        </div>
      </div>

      </Container>
    </div>
  )
}

export default Experience
import React from 'react'
// import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { projectData } from '../utils/projectData'
import "../styles/project.css"
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className="projectPage">
      <Container>
      <h1 className='title'>Project</h1>
      <div className="project-container">
        {projectData.map (({id, image, projectName, projectDesc, tags}) => {
          return (
            <div className="card-project" key={id}>
            <img src={image} alt="" />
            <div className="infoCard">
              <h3>{projectName}</h3>
              <p>{projectDesc}</p>
              {/* <cite>{tags}</cite> */}
              <div className='btn-card'>
            <a className='btn-git' href="https://github.com/hhhrrrttt222111/developer-portfolio">Github</a>
              <a className='btn-live' href="https://github.com/hhhrrrttt222111/developer-portfolio">Live</a>
              </div>
            </div>
          </div>
          )
        })}

      </div>

      <div className="credit">
         <a href>Veiw All</a>
          <div className="text"></div>
        </div>
      </Container>
    </div>
  )
}

export default Project
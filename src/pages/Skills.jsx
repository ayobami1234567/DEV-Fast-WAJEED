import Marquee from "react-fast-marquee";
import { SkillsData } from '../Data/skillsData';
import { Container } from 'react-bootstrap';
import "../styles/Skills.css"

const Skills = () => {
    

  return (
   <div className="skills">
   <Container>
   <div className="skillsHeader">
   <h1 className='title'>Skills</h1>
   </div>
   <div className="skillsContainer">
    <div className="skill--scroll">
    <Marquee 
     gradient={false} 
     speed={80} 
     pauseOnHover={true}
     pauseOnClick={true} 
     delay={0}
     play={true} 
     direction="left"
    >
       {SkillsData.map(({ id, images, title }) => {
              return (
                <div key={id} className="skill--box">
                 <img src={images} alt="" />
                 <h3 className="title">{title}</h3>
                </div>
              )
            })}


  </Marquee>
    </div>
   </div>
   </Container>
   </div>
  )
}

export default Skills
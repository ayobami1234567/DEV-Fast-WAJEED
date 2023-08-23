import React from 'react';
import {ExperienceData} from "../Data/ExperienceData"

const ExperienceCard = () => {
  return (

    <>
      {ExperienceData.map (({id, images, year, job, date}) => {
          return (
            <div className="experience-card" key={id}>
            <div className="expcard-img">
              <img src={images} alt="" />
            </div>
            <div className="experience-details">
                <h6>{year}</h6>
                <h4>{job}</h4>
                <h5>{date}</h5>
              </div>
          </div>
            
          )
        })}

    </>


    
  )
}

export default ExperienceCard
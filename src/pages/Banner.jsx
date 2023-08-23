import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile-auto.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/Portfolio.css"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Scientist", "Data Analyst", "Machine Learning Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner " id="home">
      <Container>
      
      
       <section className="banner__section">
       <div className="left">
         <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "headpage"}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="title-name">{`Hi! I'm Abdulwajeed`} </h1>
                <h2><span className="mind">A</span> <span className="txt-rotate  mind" dataPeriod="200" data-rotate='[ "Data Scientist", "Data Analyst", "Machine Learning Engineer" ]'><span className="wrap">{text}</span></span></h2>
                  <p  className="dec">Experienced data scientist specializing in the development and implementation of machine learning models
                    and data-driven solutions, with a track record of over one year. Demonstrated proficiency in Python and SQL
                    programming languages. Highly skilled in data analysis, statistical modeling, and leveraging cloud computing
                    technologies. Extensive expertise in developing and deploying machine learning models using Azure</p>
                  {/* <button onClick={() => console.log('connect')}>
                    <a href="#"></a>
                     <ArrowRightCircle size={25} /></button> */}
                     <button className="download-btn">Download CV</button>
              </div>}
            </TrackVisibility>
         </div>
 
          <div className="right">
          <TrackVisibility>
              {({ isVisible }) =>
                // <div className={isVisible ? "animate__animated animate__zoomIn" : "banner-img"}>
                //   <img src={headerImg} alt="Header Img" className="profile-img"/>
                // </div>}
                <div className="banner-img">
                  <img src={headerImg} alt="Header Img" className="profile-img"/>
                </div>}
            </TrackVisibility>
          </div>
       </section>
       
   
      </Container>
    </section>
  )
}

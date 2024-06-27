import React, { useEffect } from "react";
import "./About.css";
import webImg from "../../assets/uiux(1).jpg";
import appImg from "../../assets/port1.webm";
import appImg1 from "../../assets/uiux(2).jpg";
import uxDesign from "../../assets/3ux.webm";
import appDesign from "../../assets/AppDesigning.webm";
import uiImg from "../../assets/uiux(3).jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useTheme } from "../ThemeContext";


const About = () => {
  const {theme} = useTheme();
  useEffect(() => {
    AOS.init({
      once:true,
      mirror:false
    });
  }, [])
  return (
    <section id="skills" className={theme==='dark'?'dark-theme':'light-theme'}>
      <span className="skillTitle" data-aos='fade-right'>What I do</span>
      <span className="skillDesc" data-aos='fade'>
        I am an aspiring Front End Developer with a passion for creating
        accessible and inclusive websites. Being proficient in <span>HTML, CSS,
        JavaScript, React JS, Express JS, Node JS</span> etc and also proficient in
        tools like <span>Figma and Adobe Creative Suite, Framer</span> etc. Committed to
        equity-focused design, I strive to create engaging, universally
        accessible digital experiences, blending technology with creative
        vision.
      </span>
      <div className="skillCards">
        <div className="skillCard" data-aos='zoom-in'>
            {/* <img src={appImg1} alt="Web designer" className="skillImg" /> */}
            <video preload="auto"  className="skillImg" autoPlay muted loop playsInline poster={appImg1}  alt='Web_development_gif' >
              <source src={appImg} type="video/mp4" />
            </video>
            <div className="skillbarText">
                <h2>Website Designing</h2>
                <p>I create visually appealing, user-friendly websites that enhance online presence.</p>
            </div>
        </div>
        <div className="skillCard" data-aos='zoom-in'>
            {/* <img src={uiImg} alt="App designer" className="skillImg" /> */}
            <video preload="auto"  className="skillImg" autoPlay muted loop playsInline poster={uiImg}  alt='Web_development_gif' >
              <source src={appDesign} type="video/mp4" />
            </video>
            <div className="skillbarText">
                <h2>App Designing</h2>
                <p> I design intuitive, engaging apps that enhance user experience.</p>
            </div>
        </div>
        <div className="skillCard" data-aos='zoom-in'>
            {/* <img loading='lazy' src={webImg} alt="UI/UX designer" className="skillImg" /> */}
            <video preload="auto"  className="skillImg" poster={webImg}  alt='Web_development_gif' >
            <source src={uxDesign} type="video/mp4" />
            </video>
            <div className="skillbarText">
                <h2>UX Designing</h2>
                <p>I implement equity focused design principles to create user-interfaces.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

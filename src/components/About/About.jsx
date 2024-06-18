import React, { useEffect } from "react";
import "./About.css";
import webImg from "../../assets/uiux(1).jpg";
import appImg from "../../assets/uiux(2).jpg";
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
        accessible and inclusive websites. Being proficient in HTML, CSS,
        JavaScript, React JS, Express JS, Node JS etc and also proficient in
        tools like Figma and Adobe Creative Suite, Framer etc. Committed to
        equity-focused design, I strive to create engaging, universally
        accessible digital experiences, blending technology with creative
        vision.
      </span>
      <div className="skillCards">
        <div className="skillCard" data-aos='zoom-in'>
            <img src={appImg} alt="Web designer" className="skillImg" />
            <div className="skillbarText">
                <h2>Website Designing</h2>
                <p>I create visually appealing, user-friendly websites that enhance online presence.</p>
            </div>
        </div>
        <div className="skillCard" data-aos='zoom-in'>
            <img src={uiImg} alt="App designer" className="skillImg" />
            <div className="skillbarText">
                <h2>App Designing</h2>
                <p> I design intuitive, engaging apps that enhance user experience.</p>
            </div>
        </div>
        <div className="skillCard" data-aos='zoom-in'>
            <img src={webImg} alt="UI/UX designer" className="skillImg" />
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

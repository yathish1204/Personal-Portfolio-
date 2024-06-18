import './Intro.css'
import bg from '../../assets/Potraitimage.png'
import dbg from '../../assets/darkPotrait.png'
import {Link} from 'react-scroll'
import cv from '../../assets/Resumecv.png'
import Proin from '../ProIn/Proin'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../../assets/resume.pdf' 
import { useTheme } from '../ThemeContext'

const Intro = () => {

const {theme} = useTheme();

  useEffect(() => {
    AOS.init({
      once:true,
      mirror:false
    });
  }, [])
  return (
    <section id="intro" className={theme==='dark'?'dark-theme':'light-theme'}>
        <div className="introContent" data-aos='fade-right'>
            <span className="hello">👋 Hello! I am </span><br />
            <span className="introName">Yathish Shettigar</span><br />
            <span className="introWork">Front End Developer | UX Designer</span><br />
            <Proin/>
            <button className=' introBtn'><a href='https://drive.google.com/file/d/13lTc7esnEa9zqEg6Wo-RGzxT25TrHVr4/view?usp=drivesdk' download='resume.pdf' target='_blank' className='introLink' >
            <img loading='lazy'src={cv} alt="cv icon"  />Download CV</a></button>
        </div>
        <div className="bg">
            {theme==='dark'?<img loading='lazy'src={dbg} alt="Person Image" className='bg' data-aos='fade-left' />:<img loading='lazy'src={bg} alt="Person Image" className='bg' data-aos='fade-left' />}
        </div>
    </section>
  )
}

export default Intro

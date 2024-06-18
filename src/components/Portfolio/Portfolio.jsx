import "./Portfolio.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import port1 from '../../assets/uiux(2).jpg'
import port12 from '../../assets/port12.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import port4 from '../../assets/port4.png'
import port5 from '../../assets/port5.png'
import port6 from '../../assets/port6.png'
import viewIcon from '../../assets/view.png'
import gitIcon from '../../assets/gitWhite.png'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {BrowserRouter as Router, Link} from 'react-router-dom' 
import { useTheme } from "../ThemeContext";

const Portfolio = () => {
    const {theme} = useTheme();
    useEffect(() => {
        AOS.init({
          once:true,
          mirror:false
        });
      }, [])
  return (
    <section id="portfolio" className={theme==='dark'?'dark-theme':'light-theme'}>
      <span className="skillTitle" data-aos='fade-right'>My Portfolio</span>
      <span className="skillDesc" data-aos='fade'>
        Explore my projects to see how I create visually appealing,
        user-friendly websites, intuitive apps, and inclusive, user-centered
        interfaces that enhance digital experiences.
      </span>
      <div className="portImages">
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    <img loading='lazy'src={port12} className="portImgs" alt="Portfolio 1" />
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1u9DWyDEuSZyZT6JvaXTxI-VRXGk_Tlyc/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img loading='lazy'src={viewIcon} alt="view icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204' target="_blank">
                <Tippy content='git'>
                <img loading='lazy'src={gitIcon} alt="git icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    <img loading='lazy'src={port2} className="portImgs" alt="Portfolio 1" />
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/19YYAPRYTBsgb545iNhiGZsRLIgcFljni/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img loading='lazy'src={viewIcon} alt="view icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204' target="_blank">
                <Tippy content='git'>
                <img loading='lazy'src={gitIcon} alt="git icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    <img loading='lazy'src={port3} className="portImgs" alt="Portfolio 1" />
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1qxkjoI9SnxMmABJX_rtJ2ULyzmP47glw/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img loading='lazy'src={viewIcon} alt="view icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204' target="_blank">
                <Tippy content='git'>
                <img loading='lazy'src={gitIcon} alt="git icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    <img loading='lazy'src={port4} className="portImgs" alt="Portfolio 1" />
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1ACkVLK-oSAwJex29QKak3BOvLEXpqVnJ/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img loading='lazy'src={viewIcon} alt="view icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204' target="_blank">
                <Tippy content='git'>
                <img loading='lazy'src={gitIcon} alt="git icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    <img loading='lazy'src={port5} className="portImgs" alt="Portfolio 1" />
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1oEx3643NOXeoPMT8NWqwHanK1TiYR-Wa/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img loading='lazy'src={viewIcon} alt="view icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204' target="_blank">
                <Tippy content='git'>
                <img loading='lazy'src={gitIcon} alt="git icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    <img loading='lazy'src={port6} className="portImgs" alt="Portfolio 1" />
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1inzYwYTrIdDjbQoeGCQ5TacWXQUGL3xX/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img loading='lazy'src={viewIcon} alt="view icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204' target="_blank">
                <Tippy content='git'>
                <img loading='lazy'src={gitIcon} alt="git icon" className="blur" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>

      </div>
      <Tippy content='Currently nothing to explore more'>
      <button className="navBtn 
      
      portBtn">Explore more</button>
      </Tippy>
    </section>
  );
};

export default Portfolio;

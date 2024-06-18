import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/ysDarkLogo.png'
import logo1 from '../../assets/ysLightlogo.png'
import {Link} from 'react-scroll'
import call from '../../assets/Callcall.png'
import { useTheme } from '../ThemeContext'
import menuLight from '../../assets/bars-solid.svg'
import menuDark from '../../assets/bars-solidD.svg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import moon from '../../assets/moon-solidAgain.svg'
import sun from '../../assets/sun-solid (1).svg'
import darkCross from '../../assets/xmark-soliddark.svg'
import lightCross from '../../assets/xmark-solidlight.svg'



const Navbar = () => {


  const [mobileMenu, setMobileMenu] = useState(false);
  // const toggleMenu = () =>{
  //   setMobileMenu(!mobileMenu);
  // }

  const [desktopMenuRight, setDesktopMenuRight] = useState(0);
  
  const handleToggle = () => {
    const desktopMenu = document.querySelector('.desktopMenu');
    if (desktopMenuRight === 0) {
      desktopMenu.style.right = '-260px';
      setDesktopMenuRight(-260);
    } else {
      desktopMenu.style.right = '0';
      setDesktopMenuRight(0);
    }
  };
  
  const{theme, toggleTheme}=useTheme();
  return (
    <nav  className={`navbar ${theme==='dark'?'dark-theme':'light-theme'}`}>
      <div className='navSpan'>{theme==='light'?<img loading='lazy' src={logo} alt="logo" className='logo' />:<img loading='lazy'src={logo1} alt="logo" className='logo' />}
        Yathish</div>
    
      <div className='libtn'>
      <div className={`desktopMenu ${mobileMenu?'':'hideMobileMenu'}`}>
        <Link activeClass='active' to='intro'  smooth={true} offset={-160} duration={500} className='desktopMenuListItem'    >Home</Link>
        <Link activeClass='active' to='skills' smooth={true} offset={-140} duration={500}  className='desktopMenuListItem'    >About</Link>
        <Link activeClass='active' to='portfolio' smooth={true} offset={-140} duration={500}  className='desktopMenuListItem'    >Portfolio</Link>
        <Link activeClass='active' to='ach' smooth={true} offset={-140} duration={500}  className='desktopMenuListItem'    >Achievements</Link>
      <Link to='contact'  className="navBtn" smooth={true} offset={-140} duration={500} >Contact Me</Link>
      <div className='navMode'>
      {theme==='light'?<Tippy content='Toggle Dark mode'><img loading='lazy' style={{width:'40px',height:'40px',objectFit:'contain'}}  onClick={toggleTheme} src={moon} alt="mode" className='icon' data-aos='fade'  /></Tippy>
        :<Tippy content='Toggle light mode'><img loading='lazy'style={{width:'40px', height:'40px', objectFit:'cover'}} onClick={toggleTheme} src={sun} alt="mode" className='icon' data-aos='fade'  /></Tippy>}
      </div>
      </div>
      
      <img loading='lazy' onClick={handleToggle}  src={theme==='dark'?menuDark:menuLight} alt="" className='mob-menu' />
      </div>
      
    </nav>
  )
}

export default Navbar

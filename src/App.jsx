import './App.css'
import './index.css'
import About from './components/About/About'
import Acheivement from './components/Achievement/Acheivement'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import { useEffect, useState } from 'react'
import Marquee from './components/Marquee/Marquee'
import Again from './components/AgainAch/Again'
import Scroller from './components/Scroller/Scroller'
import './App.css'
import { ThemeProvider, useTheme } from './components/ThemeContext'
import Bot from './components/Bot/Bot'

export const App=()=>{
  
  const{theme,toggleTheme}=useTheme();

  useEffect(() => {
    const handleKeyDown = (e)=>{
      if(e.ctrlKey && e.key==='d'){
        e.preventDefault();
        toggleTheme();
      }
    };

    document.addEventListener('keydown',handleKeyDown);
    return()=>{
      document.removeEventListener('keydown',handleKeyDown);
    };
  }, [toggleTheme])


 


useEffect(() => {
  document.body.classList.remove('dark-theme','light-theme');
  document.body.classList.add(theme==='dark'?'dark-theme':'light-theme');
}, [theme])

  return (
      <div className='app' >
      <Navbar/>
      <Bot/>
      <Marquee/>
      <Intro/>h
      <About/>
      <Portfolio/>
      {/* <Acheivement/> */}
      {/* <Again/> */}
      <Scroller/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

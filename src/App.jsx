import { useState } from 'react'
import {Link, ScrollLink} from 'react-scroll'
import './App.css'
import './tabletSize.css'
import './pcSize.css'
import Inicio from './paginas/Inicio'
import Habilidades from './paginas/Habilidades'
import Proyectos from './paginas/Proyectos'
import Contacto from './paginas/Contacto'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'
import logo from './img/logoNbG2.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import 'animate.css';


function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [english, setEnglish] = useState(true)

  const [toolsColor,setToolsColor] = useState(false)
  window.addEventListener('scroll', () => {
    
    const scrollPX = window.scrollY;
    console.log(scrollPX);

    if(window.scrollY >= 2128){
      setToolsColor(true)
    }else{
      setToolsColor(false)
    }
  })

  return (
    <div className={darkTheme ? "dark-mode" : "light-mode"}>
      <Link className='lightLogo' to='home'  smooth={true} duration={1000}><img className='logo' src={logo} alt="logo" /></Link>

      <div className='bodyContainer'>
      {english ? <Home dark={darkTheme} /> : <Inicio dark={darkTheme} />}
      {english ? <Skills lang={english} dark={darkTheme}/> : <Habilidades lang={english} dark={darkTheme} />}
      {english ? <Projects lang={english} dark={darkTheme}/> : <Proyectos lang={english} dark={darkTheme}/>}
      {english ? <Contact dark={darkTheme} /> : <Contacto dark={darkTheme} />}
      <Footer lang={english}/>
      </div>

      <div className={darkTheme? 'toolbar':'toolbarLight'}>
        <button className='toolbarElements' onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? 
          <i id={toolsColor ? "light" : "dark"} class="fa-regular fa-sun">
          </i> : <i id={toolsColor ? "light" : "dark"} class="fa-solid fa-moon" ></i>
          }
        </button>
        <button className='toolbarElements' onClick={() => setEnglish(!english)}><i id={toolsColor ? "light" : "dark"} class="fa-solid fa-language"></i></button>
        <Link className='toolbarElements' to='home'  smooth={true} duration={1000}><i id={toolsColor ? "light" : "dark"} class="fa-solid fa-house"></i></Link>
        <Link className='toolbarElements' to='skills' smooth={true} duration={1000}><i id={toolsColor? "light" : "dark"} class="fa-solid fa-list-check"></i></Link>
        <Link className='toolbarElements' to='projects' smooth={true} duration={1000}><i id={toolsColor ? "light" : "dark"} class="fa-solid fa-diagram-project"></i></Link>
        <Link className='toolbarElements' to='contact' smooth={true} duration={1000}><i id={toolsColor ? "light" : "dark"} class="fa-solid fa-address-card"></i></Link>
      </div>

    </div>
  )
}

export default App

import './styles/App.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationHeader from '../src/components/NavigationHeader';
import About from '../src/components/About';
import AboutTwo from '../src/components/AboutTwo';
import Project from '../src/components/Project';
import Education from '../src/components/Education'; 
import Contact from '../src/components/Contact';
import Loading from '../src/components/Loading';
import github from './resources/github.svg'; 
import linkedin from './resources/Linkedin.svg'
import $ from 'jquery';

function App() {

  const [scroll, setFirstScroll] = useState(true)
  const [scrollProject, setScrollProject] = useState(false);

  const [scrollEducation, setScrollEducation] = useState(false);
  const [scrollExperience, setScrollExperience] = useState(false);
  const [animationLateral, setAnimationLateral] = useState(false);
  const [animationLateral2, setAnimationLateral2] = useState(false);
  const [scrollContact, setScrollContact] = useState(false);
  const [shortcutAnimation, setShortcutAnimation] = useState(false);
  const [scrollStartProject, setScrollStartProject] = useState(false);
  const [scrollFirstProject, setScrollFirstProject] = useState(false);
  const [scrollSecondProject, setScrollSecondProject] = useState(false);
  const [scrollThirdProject, setScrollThirdProject] = useState(false);
  const [scrollFourthProject, setScrollFourthProject] = useState(false);

  const [loading, setLoading] = useState(false);

useEffect(() => { 
  setTimeout(() => {
    setLoading(true);
  }, 3500);
  setTimeout(() => {
    setAnimationLateral(true) 
    setTimeout(() => {
      setAnimationLateral2(true) 
    }, 200)
  }, 4800)
},[])

  const refAbout = useRef();

  var handleClickBack = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  })
  }

  useEffect(() =>{ 
    if($(window).width() < 1000){
      setScrollProject(true);
      setScrollEducation(true);
      setScrollExperience(true);
      setScrollContact(true); 
      setScrollStartProject(true); 
      setScrollFirstProject(true); 
      setScrollSecondProject(true); 
      setScrollThirdProject(true); 
      setScrollFourthProject(true); 
    }
  },[])

  useEffect(() => { 
    window.addEventListener('scroll', (event) => { 
        if ($('html').scrollTop() > 400) { 
          setScrollStartProject(true)
          setScrollProject(true);
        }
        if ($('html').scrollTop() > 900) { 
          setScrollFirstProject(true)
        }
        if ($('html').scrollTop() > 1650) { 
          setScrollSecondProject(true)
        }
        if ($('html').scrollTop() > 2200) { 
          setScrollThirdProject(true)
        }
        if ($('html').scrollTop() > 2800) { 
          setScrollFourthProject(true)
        }
        if ($('html').scrollTop() > 3450) { 
          setScrollEducation(true)
        }
        if ($('html').scrollTop() > 3650) { 
          setScrollExperience(true)
        }
        if ($('html').scrollTop() > 4200) { 
          setScrollContact(true)
        }
    })
  })

  return (
    <>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {!loading && <Loading/>}
       {loading && 
        <>
       <NavigationHeader scrollStartProject={scrollStartProject} scroll={scroll} scrollProject={scrollProject} scrollEducation={scrollEducation} scrollContact={scrollContact}/>
        <AboutTwo scrolled={scroll}/>
        <Project scrollFirstProject={scrollFirstProject} scrollSecondProject={scrollSecondProject} scrollThirdProject={scrollThirdProject}
        scrollStartProject={scrollStartProject} scrollFourthProject={scrollFourthProject}/>
        <Education scrollEducation={scrollEducation} scrollExperience={scrollExperience}/>
        <Contact scrollContact={scrollContact}/>

        <div className={`${animationLateral ? 'shortcut-2': ''}`}>
        <div className='git'>
          <a href='https://github.com/jonathan-robin' target='_blank'><img src={github} className='tag-shortcut'/></a>
        </div>
        <div className='Lnkdn'>
        <img src={linkedin} className='tag-shortcut'/>
        </div>
            <div className='dottedLine-2'>
            </div>
           
          </div>
        <div className={`${animationLateral2 ? 'shortcut': ''} ${shortcutAnimation ? 'scrolled':''}`}>
        <div className='resumeLink-2'>
        <a href='https://jonathan-robin.com/ROBIN_JONATHAN_CV.pdf' target='_blank' className='resume'>Resume</a>
            </div>
            <div className='logoNavigation-2' onClick={handleClickBack}>
                <svg className='svgNav' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="80px" viewBox="0 0 87.59 99.306">
                    <g>
                        <path className='pathNav' stroke="#64ffda" stroke-miterlimit="10" d="M45.377,98.392c-0.953,0.55-2.513,0.552-3.467,0.005l-39.68-22.75 c-0.954-0.547-1.732-1.895-1.729-2.995l0.139-45.739c0.003-1.1,0.785-2.45,1.738-3l39.837-23c0.953-0.55,2.513-0.552,3.467-0.005 l39.68,22.75c0.954,0.547,1.732,1.895,1.729,2.995l-0.139,45.739c-0.003,1.1-0.785,2.45-1.738,3L45.377,98.392z"/>
                    </g>
                </svg>
            </div>
            <div className='dottedLine'>
            </div>
          </div>
        </>
        }
        </> 
  );
}

export default App;
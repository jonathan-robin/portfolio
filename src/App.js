import './styles/App.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationHeader from '../src/components/NavigationHeader';
import About from '../src/components/About';
import AboutTwo from '../src/components/AboutTwo';
import Design from '../src/components/Design';
import Project from '../src/components/Project';
import Education from '../src/components/Education'; 
import Contact from '../src/components/Contact';
import Loading from '../src/components/Loading';
import github from './resources/github.svg'; 
import linkedin from './resources/Linkedin.svg'; 
import Cards from './components/Cards';
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
  function DisableToolTip(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.onmouseover = function() {
            this.setAttribute("org_title", this.title);
            this.title = "";
        };
        element.onmouseout = function() {
            this.title = this.getAttribute("org_title");
        };
        element.onmousedown = function() {
          this.title = this.getAttribute("org_title");
      };
      }
  }

useEffect(() => { 
    var links = document.getElementsByTagName("a");
    DisableToolTip(links);
    var images = document.getElementsByTagName("img");
    DisableToolTip(images);
    var videos = document.getElementsByTagName("video");
    DisableToolTip(videos);
})

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
<link rel='alternate' hreflang='fr-fr' href='https://www.jonathan-robin.com/' />
<link rel='alternate' hreflang='fr-ca' href='https://www.jonathan-robin.com/' />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {!loading && <Loading/>}
       {loading && 
        <>
       <NavigationHeader scrollStartProject={scrollStartProject} scroll={scroll} scrollProject={scrollProject} scrollEducation={scrollEducation} scrollContact={scrollContact}/>
        <AboutTwo scrolled={scroll}/>
        <Cards scrollStartProject={scrollStartProject}/>
        {/* <Project scrollFirstProject={scrollFirstProject} scrollSecondProject={scrollSecondProject} scrollThirdProject={scrollThirdProject}
        scrollStartProject={scrollStartProject} scrollFourthProject={scrollFourthProject}/> */}
        <Design />
        <Education scrollEducation={scrollEducation} scrollExperience={scrollExperience}/>
        <Contact scrollContact={scrollContact}/>

        <div className={`${animationLateral ? 'shortcut-2': ''}`}>
        <div className='git'>
          <a hreflang='en' author='ROBIN Jonathan' type="text/html" href='https://github.com/jonathan-robin' title='Portfolio ROBIN Jonathan fullstack dev web link to github' alt="logo github.com" target='_blank'>
              <img src={github} className='tag-shortcut' title='Link from ROBIN Jonathan portfolio to github' alt="logo github.com"/>
            </a>
        </div>
        <div className='Lnkdn'>
        <img src={linkedin} style={{cursor:'wait'}} className='tag-shortcut' title='Link from ROBIN Jonathan portfolio to linkedin Account' alt='linkedin Logo'/>
        </div>
            <div className='dottedLine-2'>
            </div>
           
          </div>
        <div className={`${animationLateral2 ? 'shortcut': ''} ${shortcutAnimation ? 'scrolled':''}`}>
        <div className='resumeLink-2'>
        <a href='https://jonathan-robin.com/ROBIN_JONATHAN_CV.pdf' hreflang='fr' author='ROBIN Jonathan' type='application/pdf' title='CV de Jonathan ROBIN fullstack développeur web' alt='Link to fullstack web developper ROBIN Jonathan resume' target='_blank' className='resume'>Resume</a>
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
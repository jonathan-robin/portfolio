import './styles/App.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationHeader from './components/NavigationHeader';
import About from './components/About';
import Project from './components/Project';
import Education from './components/Education'
import $ from 'jquery';

function App() {

  const [scroll, setFirstScroll] = useState(false)
  const [scrollProject, setScrollProject] = useState(false);
  const [scrollFirstProject, setScrollFirstProject] = useState(false);
  const [scrollSecondProject, setScrollSecondProject] = useState(false);
  const [scrollThirdProject, setScrollThirdProject] = useState(false);
  const [scrollStartProject, setScrollStartProject] = useState(false);
  const [scrollFourthProject, setScrollFourthProject] = useState(false);
  const refAbout = useRef();

  useEffect(() => { 
    window.addEventListener('scroll', (event) => { 
        setFirstScroll(true)
        if ($('html').scrollTop() > 900) { 
          setScrollStartProject(true)
          setScrollProject(true);
        }
        if ($('html').scrollTop() > 900) { 
          setScrollFirstProject(true)
        }
        if ($('html').scrollTop() > 1500) { 
          setScrollSecondProject(true)
        }
        if ($('html').scrollTop() > 2000) { 
          setScrollThirdProject(true)
        }
        if ($('html').scrollTop() > 2400) { 
          setScrollFourthProject(true)
        }
    })
  },[])

  return (
    <>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <NavigationHeader scrollStartProject={scrollStartProject} scroll={scroll} scrollProject={scrollProject}/> 
        <About scrolled={scroll}/>
        {scroll && 
        <Project scrollFirstProject={scrollFirstProject} scrollSecondProject={scrollSecondProject} scrollThirdProject={scrollThirdProject}
        scrollStartProject={scrollStartProject} scrollFourthProject={scrollFourthProject}/>
        }    
        {scrollFourthProject && <Education />}
        </> 
  );
}

export default App;

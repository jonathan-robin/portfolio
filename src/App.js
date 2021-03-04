import './styles/App.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationHeader from './components/NavigationHeader';
import About from './components/About';
import Project from './components/Project';
import $ from 'jquery';
function App() {

  const [scroll, setFirstScroll] = useState(false)
  const [scrollFirstProject, setScrollFirstProject] = useState(false);
  const [scrollSecondProject, setScrollSecondProject] = useState(false);
  const [scrollThirdProject, setScrollThirdProject] = useState(false);
  const [scrollStartProject, setScrollStartProject] = useState(false);
  const [scrollFourthProject, setScrollFourthProject] = useState(false);
  const refAbout = useRef();

  useEffect(() => { 
    window.addEventListener('scroll', (event) => { 
        setFirstScroll(true)
        if ($('html').scrollTop() > 800) { 
          setScrollStartProject(true)
        }
        if ($('html').scrollTop() > 1000) { 
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
    <div className='content' id='content'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <NavigationHeader />
        <About scrolled={scroll}/>
        {scroll && 
        <Project scrollFirstProject={scrollFirstProject} scrollSecondProject={scrollSecondProject} scrollThirdProject={scrollThirdProject}
        scrollStartProject={scrollStartProject} scrollFourthProject={scrollFourthProject}/>
        }
     
    </div>
  );
}

export default App;

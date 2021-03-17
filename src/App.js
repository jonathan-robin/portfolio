import './styles/App.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationHeader from '../src/components/NavigationHeader';
import About from '../src/components/About';
import AboutTwo from '../src/components/AboutTwo';
import Project from '../src/components/Project';
import Education from '../src/components/Education'; 
import Contact from '../src/components/Contact';
import Loading from '../src/components/Loading';
import $ from 'jquery';

function App() {

  const [scroll, setFirstScroll] = useState(true)
  const [scrollProject, setScrollProject] = useState(false);

  const [scrollEducation, setScrollEducation] = useState(false);
  const [scrollExperience, setScrollExperience] = useState(false);

  const [scrollContact, setScrollContact] = useState(false);

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
},[])

  const refAbout = useRef();

  useEffect(() =>{ 
    if(window.innerWidth <= 500){
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

	
  var tailleEcranX = window.innerWidth;
  var tailleEcranY = window.innerHeight;

  console.log(tailleEcranX, tailleEcranY)

  useEffect(() => { 
    window.addEventListener('scroll', (event) => { 
        if ($('html').scrollTop() > 400) { 
          setScrollStartProject(true)
          setScrollProject(true);
        }
        if ($('html').scrollTop() > 700) { 
          setScrollFirstProject(true)
        }
        if ($('html').scrollTop() > 900) { 
          setScrollSecondProject(true)
        }
        if ($('html').scrollTop() > 1400) { 
          setScrollThirdProject(true)
        }
        if ($('html').scrollTop() > 2000) { 
          setScrollFourthProject(true)
        }
        if ($('html').scrollTop() > 3150) { 
          setScrollEducation(true)
        }
        if ($('html').scrollTop() > 3150) { 
          setScrollExperience(true)
        }
        if ($('html').scrollTop() > 3700) { 
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
        </>
        }
        </> 
  );
}

export default App;
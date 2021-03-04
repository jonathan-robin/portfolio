import './styles/App.css';
import React, {useEffect, useRef, useState} from 'react';
import NavigationHeader from './components/NavigationHeader';
import About from './components/About';
import Project from './components/Project';

function App() {

  const [scroll, setFirstScroll] = useState(false)
  const refAbout = useRef();

  useEffect(() => { 
    window.addEventListener('scroll', (event) => { 
        setFirstScroll(true)
    })
  },[])

  return (
    <div className='content' >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <NavigationHeader />
        <About scrolled={scroll}/>
        {scroll && 
        <Project />
        }
     
    </div>
  );
}

export default App;

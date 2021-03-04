import picture from '../resources/picture.jpg';
import github from '../resources/GitHub-Mark.png'; 
import Instagram from '../resources/ig-logo-email.png'; 
import Linkedin from '../resources/LinkedIn-Logo.png'; 
import Gmail from '../resources/gmail-logo.jpg';
import '../styles/About.css';
import React, {useState, useEffect} from 'react';

function About(props){
    const [mouseMoved, setMouseMoved] = useState(false);
    const [line2, setLine2] = useState(false); 
    const [line3, setLine3] = useState(false);
    const [scrolled, setScrolled] = useState(props.scrolled);

    var firstMouseMove = () => {
        setMouseMoved(true);
        setTimeout(() => {
            setLine2(true)
        },200); 
        setTimeout(() => { 
            setLine3(true)
        },400)
    }

    useEffect(() => { 
        setScrolled(props.scrolled)
    },[props.scrolled])
    console.log(scrolled)

    return (
        <>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        {scrolled && <div className='TitreAbout'><p>01. </p><p>About</p></div>}
        <div className={`AboutPage ${scrolled? 'scrolled': ''}`} onMouseMove={firstMouseMove}> 
            <div className='mainContent'>
                <div className={`AboutMe ${scrolled? 'scrolled': ''}`}>
                    <div className='divSousTitre'>
                    <p className='sous-titre'>Hi, my name is</p>
                    </div>
                    <div className='divName'>
                    <h1 className='Name'>Jonathan Robin</h1>
                    </div>
                    <div className='divSousName'>
                    <h1 className='sous-Name'>{scrolled ? "Let's talk a bit about me" : "Welcome to my portfolio"}</h1>
                    </div>
                    <div className='pContent'>
                    {scrolled ? <div className='selfThaught'><p>I'm a self-thaught junior web-dev with communication&Marketing background.</p>
                    <p>I'm looking for jobs, internships, project opportunities!</p>
                    <p>I Spend the last months working with javascript/react & nodejs.</p>
                    <p> Let's dive in my project !</p></div> : 
                    "I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between." }
                    </div>
                    <div className='getInTouch'>
                        <a href="mailto:robinjonathan1993@gmail.com" className='getInTouchLink'> Get in touch </a> 
                    </div>
                </div>
                <div className={`mePicture ${scrolled? 'scrolled': ''}`}>
                    <img className={`Picture ${scrolled? 'scrolled': ''}`} src={picture}/>
                </div>
            </div>
        </div>
        <div className={`lesLines ${scrolled? 'scrolled': ''}`}>
    <div className={`line1 ${mouseMoved? 'loaded': ''}`} style={{visibility:mouseMoved?'visible':'hidden'}}>Start scrolling</div>
    <div className={`line2 ${line2? 'loaded': ''}`} style={{visibility:line2?'visible':'hidden'}}>to visit</div>
    <div className={`line3 ${line3? 'loaded': ''}`} style={{visibility:line3?'visible':'hidden'}}>the website</div>
        </div>
        {scrolled && <div className='infosContacts'> 
            <div className='cardContact'>
                <div className='GithubLink'>
                  <img src={github} className='contactLink'/> <a href='https://github.com/jonathan-robin'>/jonathan-robin</a>
                </div>
            </div>
            <div className='cardContact'>
            <div className='InstagramLink'>
                  <img src={Instagram} className='contactLink'/> @mojogrojo
                </div>
            </div>
            <div className='cardContact'>
            <div className='gmailLink'>
            <img src={Gmail} className='contactLink'/> <a href='mailto:robinjonathan1993@gmail.com'>mailto</a>
                </div>
            </div>
            <div className='cardContact'>
            <div className='LinkedinLink'>
            <img src={Linkedin} className='contactLink'/> 
                </div>
            </div>
        </div>}
        
</>
    )

}

export default About
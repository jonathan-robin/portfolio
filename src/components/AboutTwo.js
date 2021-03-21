import picture from '../resources/picture.png';
import github from '../resources/GitHub-Mark.png'; 
import Instagram from '../resources/ig-logo-email.png'; 
import Linkedin from '../resources/LinkedIn-Logo.png'; 
import Gmail from '../resources/gmail-logo.jpg';
import '../styles/About.css';
import '../styles/AboutTwo.css';
import React, {useState, useEffect} from 'react';

function AboutTwo(props){
    const [mouseMoved, setMouseMoved] = useState(false);
    const [scroll, setScroll] = useState(false); 
    const [animation, setAnimation] = useState(true);
    const [animation2, setAnimation2] = useState(true);

    useEffect(() => { 
        setTimeout(() => {
            setAnimation(false);
        }, 1000);
        setTimeout(() => { 
            setAnimation2(false);
        },1200)
    },[])

    var firstMouseMove = () => {
        setMouseMoved(true);
    }

    return (
        <>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <div className='TitreAbout' style={{visibility: animation? 'hidden': 'visible'}}><p>01. </p><p>About</p></div>
        <div className='AboutPage' style={{visibility: animation2? 'hidden': 'visible'}} onMouseMove={firstMouseMove}> 
            <div className='mainContent'>
                <div className="AboutMe">
                    <div className='divSousTitre'>
                    <p className='sous-titre'>Hi, my name is</p>
                    </div>
                    <div className='divName'>
                    <h1 className='Name'>Jonathan Robin</h1>
                    </div>
                    <div className='pContent'>
                    <div className='selfThaught'>
                    <div className='firstPhrase'>
                        {/* I'm a self-thaught junior web-dev with communication & Marketing background. */}
                        Développeur web junior autodidacte avec une appétence pour le front ! 
                    </div>
                    <div className='ProjectOpo'>
                        {/* I'm looking for jobs, internships or project opportunities! */}
                        Je recherche un stage, une alternance ou toute opportunité de projets !
                        </div>
                    <div className='spentMonths'>
                        {/* I Spent the last months working with javascript/react & nodejs. */}
                        J'ai passé les derniers mois à travailler en Javascript sur React avec Nodejs
                        </div>
                    <div className='dive'>
                        {/* Let's dive in my project ! */}
                        Découvrez mes projets !
                        </div>
                    </div> 
                        <div className='getInTouch'>
                            <a href="mailto:robinjonathan1993@gmail.com" className='getInTouchLink'>Contactez-moi !</a> 
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='mePicture'>
                        <img className='Picture' src={picture}/>
                    </div>
        </div>
</>
    )

}

export default AboutTwo
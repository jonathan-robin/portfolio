import picture from '../resources/picture.png';
import '../styles/About.css';
import '../styles/AboutTwo.css';
import React, {useState, useEffect} from 'react';
import $ from 'jquery';

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

    var handleClickGetInTouch = () => { 
        $('.ContactTitre')[0].scrollIntoView({ block: 'start', behavior: 'smooth' });
        setTimeout(() => {
        $('.ContactTitre')[0].scrollIntoView({ block: 'start', behavior: 'smooth' });
        }, 1200);
    }

    return (
        <>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <div className='TitreAbout' style={{visibility: animation? 'hidden': 'visible'}}><h1 style={{display:'flex', fontWeight:'inherit'}}><p>01. </p><p>About</p></h1></div>
        <div className='AboutPage' style={{visibility: animation2? 'hidden': 'visible'}} onMouseMove={firstMouseMove}> 
            <article style={{display:'inherit'}}>
            <div className='mainContent'>
                <div className="AboutMe">
                    <div className='divSousTitre'>
                    <p className='sous-titre'>Hi, my name is</p>
                    </div>
                    <div className='divName'>
                    <h2 className='Name'>Jonathan Robin</h2>
                    </div>
                    <div className='pContent'>
                    <div className='selfThaught'>
                    <div className='firstPhrase'>
                        <h3 style={{fontWeight:'inherit', fontSize:'inherit', marginBottom:'inherit'}}>Front web Développeur junior ! Objectif <b className='emph'>Full-stack</b> ! </h3>
                    </div>
                    <div className='ProjectOpo'>
                        A la recherche d'un <b className='emph'>stage</b>, d'une <b className='emph'>alternance</b> ou toute opportunité de <b className='emph'>projets</b> !
                        </div>
                    <div className='spentMonths'>
                        J'ai passé les derniers mois à travailler en <b className='emph'>Javascript</b> sur  <b className='emph'>React</b> avec <b className='emph'>Node.js/PHP</b>.
                        </div>
                    <div className='dive'>
                        Scrollez et découvrez mes projets !
                        </div>
                    </div> 
                        <div className='getInTouch' onClick={handleClickGetInTouch}>
                            <a href="mailto:contact@jonathan-robin.com" className='getInTouchLink'>Contactez-moi !</a> 
                        </div>
                    </div>
                </div>
            </div>
            </article>
            <div className='mePicture'>
                        <img className='Picture' src={picture}/>
                    </div>
        </div>
</>
    )

}

export default AboutTwo
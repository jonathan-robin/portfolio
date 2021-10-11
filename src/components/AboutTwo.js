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
    const [value, setValue] = useState(window.scrollY)

    useEffect(() =>{ 
     
    },[value])
    // const planete1 = document.getElementById('plan-1');
    let planete3 = document.getElementsByClassName('planete3 planete')[0];

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
        <img className='planete planete1' style={{visibility: animation? 'hidden': 'visible'}} id ="plan-1" src={require('../resources/planete1.png').default} />
        <img className='planete planete2' style={{visibility: animation? 'hidden': 'visible'}} id ="plan-2" src={require('../resources/planete2.png').default} />
        <img className='planete planete3' style={{visibility: animation? 'hidden': 'visible'}} id ="plan-3" src={require('../resources/planete3.png').default} />
            <article style={{display:'inherit'}}>
            <div className='mainContent'>
                <div className="AboutMe">
                    <div className='divSousTitre'>
                    <p className='sous-titre'>Hi, my name is</p>
                    </div>
                    <div className='divName'>
                    <div className='divJeff'>
                        Jeff</div>
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
                            <a media='screen' target='_blank' type="text/html" href="mailto:contact@jonathan-robin.com" hreflang='fr-fr' title='Contact me' author='ROBIN Jonathan' className='getInTouchLink'>Contactez-moi !</a> 
                        </div>
                    </div>
                </div>
            </div>
            </article>
            <div className='mePicture'>
                        <img className='Picture' author='ROBIN Jonathan' src={picture} alt='Photo de Jonathan Robin développeur Web | Portfolio' title="Jonathan Robin's portfolio picture"/>
                    </div>
        </div>
        <script> 
       { 
        window.addEventListener('scroll', function(){ 
            let planete1 = document.getElementById('plan-1');
            let planete2 = document.getElementById('plan-2');
            let planete3 = document.getElementById('plan-3');

            if (window.innerWidth > 800 && planete1){
                try{
                    planete1.style.left = 70 + value * 0.05 + "%" ;
                    planete1.style.top = 33 + value * -0.05 + "%" ;
                    planete2.style.height = 31 + value * 0.05 + "vw" ;
                    planete3.style.left = 6 + value * -0.05 + "%" ;
                    planete3.style.top = 29 + value * -0.05 + "%" ;
                }
                catch{
                    return
                }

            }
            // console.log(planete1.style.top)
            // console.log(planete1.style)

            setValue(window.scrollY);
        })}
               { 
        window.addEventListener('resize', function(){ 
            let planete1 = document.getElementById('plan-1');
            let planete2 = document.getElementById('plan-2');
            let planete3 = document.getElementById('plan-3');

            if (window.innerWidth > 800){
                planete1.style.left = 70 + value * 0.05 + "%" ;
                planete1.style.top = 33 + value * -0.05 + "%" ;
                planete2.style.height = 31 + value * 0.05 + "vw" ;
                planete3.style.left = 6 + value * -0.05 + "%" ;
                planete3.style.top = 29 + value * -0.05 + "%" ;
            }
            // console.log(planete1.style.top)
            // console.log(planete1.style)

            setValue(window.scrollY);
        })}
        </script>
</>
    )

}

export default AboutTwo
import '../styles/About.css';
import React, {useState, useEffect} from 'react';
import '../styles/Project.css'
import upload from '../resources/upload.svg'; 
import github from '../resources/github.svg'
import videoRGSTATS from '../resources/RG_STATS.m4v'; 
import videoTRACKER from '../resources/TRACKER.m4v'; 
import videoTRACKEREXE from '../resources/TRACKER_EXE.m4v';
import videoCopyFacebook from '../resources/copyFacebook.m4v';
import $ from 'jquery';

function Project(props){

    const [firstProject, setFirstProject] = useState(false);
    const [secondProject, setSecondProject] = useState(false);
    const [thirdProject, setThirdProject] = useState(false);
    const [fourthProject, setFourthProject] = useState(false);
    const [animation1, setAnimation1] = useState(false);
    const [animation12, setAnimation12] = useState(false);
    const [animation125, setAnimation125] = useState(false);
    const [animation13, setAnimation13] = useState(false);
    const [animation2, setAnimation2] = useState(false);
    const [animation21, setAnimation21] = useState(false);
    const [animation215, setAnimation215] = useState(false);
    const [animation3, setAnimation3] = useState(false);
    const [animation31, setAnimation31] = useState(false);
    const [animation315, setAnimation315] = useState(false);


    const [animation4, setAnimation4] = useState(false);
    const [animation41, setAnimation41] = useState(false);
    const [animation415, setAnimation415] = useState(false);
    const [scrollToPosition, setScrollToPosition] = useState(false);
    const [scrollToPosition2, setScrollToPosition2] = useState(false);
    const [scrollToPosition3, setScrollToPosition3] = useState(false);
    const [startProject, setStartProject] = useState(false); 

    useEffect(() => {
        setStartProject(props.scrollStartProject);
        setFirstProject(props.scrollStartProject)
            setTimeout(() => { 
                setAnimation1(props.scrollStartProject);
            },200)
            setTimeout(() => { 
                setAnimation12(props.scrollStartProject);
                setTimeout(() => { 
                    setAnimation125(props.scrollStartProject);
                },500)
            },400)
            setTimeout(() => { 
                setAnimation13(props.scrollStartProject);
            },1000)
    },[props.scrollStartProject])

    useEffect(() => {
        setSecondProject(props.scrollSecondProject)
        setTimeout(() => { 
            setAnimation2(props.scrollSecondProject);
        },200)
        setTimeout(() => { 
            setAnimation21(props.scrollSecondProject);
            setTimeout(() => { 
                setAnimation215(props.scrollSecondProject);
            },500)
        },600)
        setScrollToPosition2(true)
    },[props.scrollSecondProject])

    useEffect(() => {
        setThirdProject(props.scrollThirdProject)
        setTimeout(() => { 
            setAnimation3(props.scrollThirdProject);
        },200)
        setTimeout(() => { 
            setAnimation31(props.scrollThirdProject);
            setTimeout(() => { 
                setAnimation315(props.scrollThirdProject);
            },500)
        },600)
    },[props.scrollThirdProject])

    useEffect(() => { 
        setFourthProject(props.scrollFourthProject);
        setTimeout(() => { 
            setAnimation4(props.scrollThirdProject);
        },200)
        setTimeout(() => { 
            setAnimation41(props.scrollThirdProject);
            setTimeout(() => { 
                setAnimation415(props.scrollFourthProject);
            },500)
        },600)
    },[props.scrollFourthProject])

    useEffect(() => { 
        document.getElementById('videoProject1').addEventListener('play', function(){ setAnimation125(false) });
        document.getElementById('videoProject1').addEventListener('pause', function(){ setAnimation125(true) });
        document.getElementById('videoProject2').addEventListener('play', function(){ setAnimation215(false) });
        document.getElementById('videoProject2').addEventListener('pause', function(){ setAnimation215(true) });        
        document.getElementById('videoProject3').addEventListener('play', function(){ setAnimation315(false) });
        document.getElementById('videoProject3').addEventListener('pause', function(){ setAnimation315(true) });        
        document.getElementById('videoProject4').addEventListener('play', function(){ setAnimation415(false) });
        document.getElementById('videoProject4').addEventListener('pause', function(){ setAnimation415(true) });
    })

    return (
        <div className='ProjectOverAll'>
            <div className={`ProjectTitre ${startProject? 'ProjectTitre2': ''}`}><h1 style={{display:'flex', fontWeight:'inherit'}}><p>02. </p><p>Projets</p></h1></div>
            <div className={`ProjectContent ${animation1? 'loaded' : ''}`} style={{visibility:animation1?'visible':'hidden'}}>
                <div className='Project p1' >
                    <div className={` ${animation12? 'ProjectVideo': ''}`}  style={{visibility:animation12?'visible':'hidden'}}>
                        <video id='videoProject1' title='portfolio robin jonathan web fullstack project video of copyFacebook' author='ROBIN Jonathan' alt="Portfolio's video of jonathan robin project copyFacebook" controls className='videoProject2' preload='auto'>
                            <source src={videoCopyFacebook}  preload='auto' type="video/mp4"/>
                        </video>
                    </div>
                    <div className='borderUp'>
                        <div className='borderLeft'>
                            <div className={`ProjectBorder ${animation13? 'loaded': ''}`}></div>
                            <div className='ProjectCore'>
                                <div className='ProjectDescription1'>
                                        <div className='firstLine'>
                                            <div className='Titre'>
                                                <h2 style={{fontSize:'inherit', margin:'inherit', fontWeight:'inherit'}}>CopyFacebook</h2>
                                            </div>
                                            <div className='share'>
                                                <div className='tagR'>
                                                    <a author='ROBIN Jonathan' title='Portfolio Robin Jonathan web developper fullstack CopyFacebook project link to github repository' target='_blank' href='https://github.com/jonathan-robin/copyFacebook' hreflang='fr' type="text/html" media='screen'>
                                                        <img src={github} alt='logo github' title='logo github' author='www.github.com' className='tagResources'/>
                                                        </a>
                                                </div>
                                                <div className='tagR'>
                                                    <a title='Web fullStack developper Robin Jonathan CopyFacebook portfolio project link to live version' author='ROBIN Jonathan' href='https://copiefacebook.web.app/login-signup' hreflang='fr' type="text/html" media='screen' target='_blank'>
                                                        <img src={upload} alt='icon upload' title='icon upload' author='unknown' className='tagResources'/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className='Date'>
                                        Février 2021
                                    </div>
                                <div className='FullDescription'>
                                    <article>
                                        Copie CSS du site Facebook avec implémentation de logique de base. <br/>
                                        Système d'authentification avec Firebase-auth. <br/>
                                        Système d'upload, de cropping de photos et de storage de fichiers avec Firebase Storage. <br/>
                                        Système de messagerie instantannée privée, de publications, de Feed d'actualité et de liste d'amis, mise en place avec Firebase Cloud Firestore. <br/>
                                        Version live hebergée via Firebase Hosting. <br/>
                                    </article>
                                    </div>
                                <div className='tags'>
                                        <div className='tag'>Javascript</div>
                                        <div className='tag'>React</div>
                                        <div className='tag'>Firebase</div>
                                    </div>
                            </div>
                        </div>
                        <div className={` ${animation13? 'ProjectBorderLeft': ''}`}></div>
                    </div>
                </div>
            </div>

            <div className={`ProjectContent2 ${secondProject? 'loaded': ''}`} style={{visibility:secondProject?'visible':'hidden'}}>
                <div className='Project p2'>
                    <div className='borderUpRight'>
                        <div className={`ProjectBorderUpRight ${animation21? 'loaded': ''}`}></div>
                        <div className='borderRight'>
                            <div className={`ProjectBorderRight ${animation21? 'loaded': ''}`}></div>
                            <div className='ProjectCore'>
                                <div className='ProjectDescription2'>
                                    <div className='firstLine'>
                                        <div className='Titre'>
                                        <h2 style={{fontSize:'inherit', margin:'inherit', fontWeight:'inherit'}}>RG STATS</h2>
                                        </div>
                                        <div className='share'>
                                            <div className='tagR'>
                                                <a hreflang='fr' type="text/html" title='Portfolio web fullstack Robin Jonathan project Rolland Garros Stats' media='screen' author='ROBIN Jonathan' href='https://github.com/jonathan-robin/tracker' target='_blank' >
                                                    <img src={github} alt='logo Github' title='logo Github' className='tagResources'/>
                                                </a>
                                            </div>
                                            <span>
                                                <img src={upload} className='tagResources' style={{cursor:'wait'}} alt='icon download' title='coming soon...'/>
                                                </span>
                                        </div>
                                    </div>
                                    <div className='Date'>
                                        Octobre 2020
                                    </div>
                                    <div className='FullDescriptionL'>
                                    <article>
                                    Application web permettant de retrouver le résultat de n'importe quel match masculin qui s'est joué à Roland Garros depuis 1968, ainsi que
                                    le tableau complet de l'édition. <br/>
                                    Recherche par joueur pouvant être filtré avec une année ou un tour spécifique.  <br/>
                                    Recherche des confrontations entre deux joueurs. <br/>
                                    Recherche de tableau par année. Affichage de profil avec détails sur le joueur selectionné ; nationalité, première participation, pire résultat, ratio de victoire, nombre de matchs gagnés etc...
                                    </article>
                                    </div>
                                    <div className='tags'>
                                        <div className='tag'>Javascript</div>
                                        <div className='tag'>React</div>
                                        <div className='tag'>Python</div>
                                        <div className='tag'>PHP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={` ${animation2? 'ProjectVideo2': ''}`}  style={{visibility:animation2?'visible':'hidden'}}>
                        <video controls id='videoProject2' className='videoProject' preload='auto' title="video of Robin Jonathan RG_STATS' project for portfolio" author='ROBIN Jonathan' alt="Portfolio's video of jonathan robin project Rg_stats">
                            <source src={videoRGSTATS} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className={`ProjectContent ${thirdProject? 'loaded': ''}`} style={{visibility:thirdProject?'visible':'hidden'}}>
                <div className='Project p1'>
                    <div className={` ${animation3? 'ProjectVideo': ''}`}  style={{visibility:animation3?'visible':'hidden'}}>
                        <video title="ROBIN Jonathan Portfolio's video of Tracker project" author='ROBIN Jonathan' alt="Portfolio's video of jonathan robin project Tracker" id='videoProject3' controls className='videoProject2' preload='auto'>
                            <source src={videoTRACKER} type="video/mp4"/>
                        </video>
                    </div>
                    <div className='borderUp'>
                        <div className='borderLeft'>
                            <div className={`ProjectBorder ${animation31? 'loaded': ''}`}></div>
                            <div className='ProjectCore'>
                                <div className='ProjectDescription1'>
                                    <div className='firstLine'>
                                        <div className='Titre'>
                                        <h2 style={{fontSize:'inherit', margin:'inherit', fontWeight:'inherit'}}>Tracker</h2>
                                        </div>
                                        <div className='share'>
                                            <div className='tagR'>
                                                <a hreflang='fr' type="text/html" author='ROBIN Jonathan' media='screen' href='https://github.com/jonathan-robin/tracker_soft' title="ROBIN Jonathan fullstack web portfolio's project about Tracking software" target='_blank'>
                                                    <img src={github} alt='logo github' title='Repository on Github' className='tagResources'/>
                                                </a>
                                            </div>
                                            <div className='tagR'>
                                                <span>
                                                <img src={upload} className='tagResources' style={{cursor:'wait'}} alt='icon download' title='coming soon...'/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Date'>
                                        Janvier 2021
                                    </div>
                                    <div className='FullDescription'>
                                        <article>
                                    Application web permettant de représenter de manière visuelle les sessions de travail passés sur le poste.  <br/>
                                    Les sessions sont affichées sous forme de graphique, de courbes, de bulles ou de pie.  <br/>
                                    Les sessions affichées permettent d'avoir une vue d'ensemble pour une période donnée et chaque session est détaillée via des commentaires, urls, tags etc...  <br/>
                                    Différents type de recherche : période, domaine, dates précises...  <br/>
                                    Permet de suivre le temps nécessaire pour certaines tâches, le temps passé sur chaque projet, retrouver des documentations/codes spécifiques.  <br/>
                                    </article>
                                    </div>
                                    <div className='tags'>
                                        <div className='tag'>Javascript</div>
                                        <div className='tag'>React</div>
                                        <div className='tag'>Chart.js</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={` ${animation31? 'ProjectBorderLeft': ''}`}></div>
                    </div>
                </div>
            </div>
        
            <div className={`ProjectContent2 ${fourthProject? 'loaded': ''}`} style={{visibility:fourthProject?'visible':'hidden'}}>
                <div className='Project p2'>
                    <div className='borderUpRight'>
                        <div className={`ProjectBorderUpRight ${animation4? 'loaded': ''}`}></div>
                        <div className='borderRight'>
                            <div className={`ProjectBorderRight ${animation4? 'loaded': ''}`}></div>
                            <div className='ProjectCore'>
                                <div className='ProjectDescription2'>
                                    <div className='firstLine'>
                                            <div className='Titre'>
                                            <h2 style={{fontSize:'inherit', margin:'inherit', fontWeight:'inherit'}}>Tracker.exe</h2>
                                            </div>
                                            <div className='share'>
                                                <div className='tagR'>
                                                    <a hreflang='fr' type="text/html" author='ROBIN Jonathan' media='screen' title='Portfolio web fullstack developper ROBIN Jonathan link to tracker project' href='https://github.com/jonathan-robin/rg_stats' target='_blank'>
                                                        <img src={github} title='link to github repository' alt='github logo' className='tagResources'/>
                                                    </a>
                                                </div>
                                                <div className='tagR'>
                                                    <span>
                                                        <img src={upload} className='tagResources' style={{cursor:'wait'}} alt='download icon to visit live version' title='coming soon...'/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    <div className='Date'>
                                            Décembre 2020
                                        </div>
                                    <div className='FullDescriptionL'>
                                        <article>
                                    Application C# permettant d'enregistrer les données des sessions passées sur le PC. Système de timer avec possibilité de pause, reset, restart avec 
                                    formulaire détaillé à remplir après chaque session. Données stockées en localhost sur phpMyAdmin destinées à être fetch via l'application web Tracker.
                                    </article>
                                        </div>
                                    <div className='tags'>
                                            <div className='tag'>.NET</div>
                                            <div className='tag'>C#</div>
                                            <div className='tag'>PHP</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={` ${animation41? 'ProjectVideo2': ''}`}  style={{visibility:animation41?'visible':'hidden'}}>
                        <video title="Portfolio project from Jonathan ROBIN : Tracker.EXE" author='ROBIN Jonathan' alt="Portfolio's video of jonathan robin project Tracker.EXE" id='videoProject4' controls className='videoProject' preload='auto'>
                            <source src={videoTRACKEREXE}  preload='auto' type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project
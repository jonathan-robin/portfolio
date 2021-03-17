import '../styles/About.css';
import React, {useState, useEffect} from 'react';
import '../styles/Project.css'
import upload from '../resources/upload.svg'; 
import github from '../resources/github.svg'
import imageProject1 from '../resources/imagefbcopy.png'; 
import videoRGSTATS from '../resources/RG_STATS.mp4'; 
import videoTRACKER from '../resources/Tracker.mp4'; 
import videoTRACKEREXE from '../resources/Tracker.exe.mp4';
import videoCopyFacebook from '../resources/copyFacebook.mkv';
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

            <div className={`ProjectTitre ${startProject? 'ProjectTitre2': ''}`}><p>02. </p><p>Project</p></div>
            
            {/* <div className={` ${animation125? 'overLayProject1': ''}`}  style={{visibility:animation125?'visible':'hidden'}} id='Overlay1'></div> */}
            <div className={`ProjectContent ${animation1? 'loaded' : ''}`} style={{visibility:animation1?'visible':'hidden'}}>
                <div className='Project p1' >
                    <div className={` ${animation12? 'ProjectVideo': ''}`}  style={{visibility:animation12?'visible':'hidden'}}>
                        <video id='videoProject1' controls className='videoProject2' preload='auto'>
                            <source src={videoRGSTATS}  preload='auto' type="video/mp4"/>
                        </video>
                    </div>
                    <div className='borderUp'>
                        <div className='borderLeft'>
                            <div className={`ProjectBorder ${animation13? 'loaded': ''}`}></div>
                            <div className='ProjectCore'>
                                <div className='ProjectDescription1'>
                                        <div className='firstLine'>
                                            <div className='Titre'>
                                                CopyFacebook
                                            </div>
                                            <div className='share'>
                                                <div className='tagR'><a target='_blank' href='https://github.com/jonathan-robin/copyFacebook' ><img src={github} className='tagResources'/></a></div>
                                                <div className='tagR'><a target='_blank' href='https://copiefacebook.web.app/login-signup'><img src={upload} className='tagResources'/></a></div>
                                            </div>
                                        </div>
                                    </div>
                                <div className='Date'>
                                        February 2021
                                    </div>
                                <div className='FullDescription'>
                                        Copie CSS du site Facebook avec implémentations de logique de base. Système d'authentification avec Firebase Authentification. Système d'upload et cropping de photos, storage d'images, 
                                        avec Firebase Storage. Système de messagerie instantannée privée, de publications, de Feed d'actualité et de liste d'amis, mise en place avec Firebase Cloud Firestore. Version live hebergée via
                                        Firebase Hosting.
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

            {/* <div className={` ${animation215? 'overLayProject2': ''}`}  style={{visibility:animation215?'visible':'hidden'}}></div> */}
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
                                            Tracker
                                        </div>
                                        <div className='share'>
                                            <div className='tagR'><a href='https://github.com/jonathan-robin/tracker' target='_blank' ><img src={github} className='tagResources'/></a></div>
                                            <div className='tagR'><img src={upload} className='tagResources'/></div>
                                        </div>
                                    </div>
                                    <div className='Date'>
                                        January 2021
                                    </div>
                                    <div className='FullDescriptionL'>
                                        Application web visant à représenter visuellement les sessions de travail/jeux stockées dans une base de données, sous forme de graphique, courbes, bulles, camembert. Les sessions
                                        fetch sont visuellement 'évidentes' mais peuvent être détaillées via des commentaires, des urls, des tags etc... Différents types de recherche : par fourchette de temps, domaine ou dates précises.
                                        Permet de suivre le temps nécessaire pour certaines tâches, le temps passé sur certains sujets et de retrouver des documentations/codes spécifiques pour gagner en productivité.
                                    </div>
                                    <div className='tags'>
                                        <div className='tag'>Javascript</div>
                                        <div className='tag'>React</div>
                                        <div className='tag'>Chart.js</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={` ${animation2? 'ProjectVideo2': ''}`}  style={{visibility:animation2?'visible':'hidden'}}>
                        <video controls id='videoProject2' className='videoProject' preload='auto'>
                            <source src={videoTRACKER} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            {/* <div className={` ${animation315? 'overLayProject3': ''}`}  style={{visibility:animation315?'visible':'hidden'}}></div> */}
            <div className={`ProjectContent ${thirdProject? 'loaded': ''}`} style={{visibility:thirdProject?'visible':'hidden'}}>
                <div className='Project p1'>
                    <div className={` ${animation3? 'ProjectVideo': ''}`}  style={{visibility:animation3?'visible':'hidden'}}>
                        <video id='videoProject3' controls className='videoProject2' preload='auto'>
                            <source src={videoTRACKEREXE} type="video/mp4"/>
                        </video>
                    </div>
                    <div className='borderUp'>
                        <div className='borderLeft'>
                            <div className={`ProjectBorder ${animation31? 'loaded': ''}`}></div>
                            <div className='ProjectCore'>
                                <div className='ProjectDescription1'>
                                    <div className='firstLine'>
                                        <div className='Titre'>
                                            Tracker.exe
                                        </div>
                                        <div className='share'>
                                            <div className='tagR'><a href='https://github.com/jonathan-robin/tracker_soft' target='_blank'><img src={github} className='tagResources'/></a></div>
                                            <div className='tagR'><img src={upload} className='tagResources'/></div>
                                        </div>
                                    </div>
                                    <div className='Date'>
                                        December 2020
                                    </div>
                                    <div className='FullDescription'>
                                        Application C# permettant d'enregistrer les données des sessions passées sur le PC. Système de timer avec possibilité de pause, reset, restart avec formulaire
                                        détaillé à remplir après chaque session. Données stockées en localhost sur phpMyAdmin destinées à être fetch via l'application web Tracker. 
                                    </div>
                                    <div className='tags'>
                                        <div className='tag'>.NET</div>
                                        <div className='tag'>C#</div>
                                        <div className='tag'>PHP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={` ${animation31? 'ProjectBorderLeft': ''}`}></div>
                    </div>
                </div>
            </div>
        
            {/* <div className={` ${animation415? 'overLayProject4': ''}`}  style={{visibility:animation415?'visible':'hidden'}}></div> */}
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
                                                RG STATS
                                            </div>
                                            <div className='share'>
                                                <div className='tagR'><a href='https://github.com/jonathan-robin/rg_stats' target='_blank'><img src={github} className='tagResources'/></a></div>
                                                <div className='tagR'><img src={upload} className='tagResources'/></div>
                                            </div>
                                        </div>
                                    <div className='Date'>
                                            October 2020
                                        </div>
                                    <div className='FullDescriptionL'>
                                            Application web permettant de retrouver le résultat de n'importe quel match masculin qui s'est joué à Roland Garros depuis 1968, ainsi qu'afficher le tableau de n'importe
                                            quelle édition. Recherche par joueur pouvant être filtré avec une année ou un tour spécifique. Recherche de confrontation entre deux joueurs. Recherche par tableau. 
                                            Affichage de profil avec détails sur le joueur selectionné ; nationalité, première participation, pire résultat, ratio de victoire, nombre de matchs gagnés etc...
                                        </div>
                                    <div className='tags'>
                                            <div className='tag'>Javascript</div>
                                            <div className='tag'>React</div>
                                            <div className='tag'>Node.js</div>
                                            <div className='tag'>Python</div>
                                            <div className='tag'>PHP</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={` ${animation2? 'ProjectVideo2': ''}`}  style={{visibility:animation2?'visible':'hidden'}}>
                        <video controls id='videoProject2' className='videoProject' preload='auto'>
                            <source src={videoTRACKER} type="video/mp4"/>
                        </video>
                    </div> */}
                    <div className={` ${animation41? 'ProjectVideo2': ''}`}  style={{visibility:animation41?'visible':'hidden'}}>
                        <video id='videoProject4' controls className='videoProject' preload='auto'>
                            <source src={videoCopyFacebook}  preload='auto' type="video/mp4"/>
                        </video>
                    </div>
                    {/* <div className={` ${animation4? 'ProjectVideo2': ''}`}  style={{visibility:animation4?'visible':'hidden'}}>
                        <img id='videoProject4' src={imageProject1} className='imageProjet'/>
                    </div> */}
                </div>
            </div>
        
        </div>
    )
}
export default Project
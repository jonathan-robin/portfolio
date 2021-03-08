import '../styles/About.css';
import React, {useState, useEffect} from 'react';
import '../styles/Project.css'
import upload from '../resources/upload.svg'; 
import github from '../resources/github.svg'
import imageProject1 from '../resources/imagefbcopy.png'


function Project(props){

    const [firstProject, setFirstProject] = useState(false);
    const [secondProject, setSecondProject] = useState(false);
    const [thirdProject, setThirdProject] = useState(false);
    const [fourthProject, setFourthProject] = useState(false);
    const [scrollToPosition, setScrollToPosition] = useState(false);
    const [scrollToPosition2, setScrollToPosition2] = useState(false);
    const [scrollToPosition3, setScrollToPosition3] = useState(false);
    const [startProject, setStartProject] = useState(false); 

    useEffect(() => {
        setStartProject(props.scrollStartProject)
    },[props.scrollStartProject])
    useEffect(() => {
        setFirstProject(props.scrollFirstProject)
        setScrollToPosition(true);
    },[props.scrollFirstProject])
    useEffect(() => {
        setSecondProject(props.scrollSecondProject)
        setScrollToPosition2(true)
    },[props.scrollSecondProject])

    useEffect(() => {
        setThirdProject(props.scrollThirdProject)
    },[props.scrollThirdProject])

    useEffect(() => { 
        setFourthProject(props.scrollFourthProject);
    },[props.scrollFourthProject])

    return (
        <div className='ProjectOverAll'>
        
                <div className={`ProjectTitre ${startProject? 'ProjectTitre2': ''}`}><p>02. </p><p>Project</p>
            </div>
        <div className={`ProjectContent ${firstProject? 'loaded': ''}`} style={{visibility:firstProject?'visible':'hidden'}}>
            <div className='Project p1'>
                <div className='ProjectVideo'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
                <div className='borderUp'>
                <div className={`ProjectBorder2 ${firstProject? 'loaded': ''}`}></div>
                    <div className='borderLeft'>
                    <div className={`ProjectBorder ${firstProject? 'loaded': ''}`}></div>
                        <div className='ProjectCore'>
                <div className='ProjectDescription1'>
                    <div className='firstLine'>
                        <div className='Titre'>
                        CopyFacebook
                        </div>
                        <div className='share'>
                            <div className='tagR'><img src={github} className='tagResources'/></div>
                            <div className='tagR'><img src={upload} className='tagResources'/></div>
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
                </div>
            </div>
        </div>

        <div className={`ProjectContent2 ${secondProject? 'loaded': ''}`} style={{visibility:secondProject?'visible':'hidden'}}>
            <div className='Project p2'>
            <div className='borderUpRight'>
            <div className={`ProjectBorderUpRight ${secondProject? 'loaded': ''}`}></div>
                    <div className='borderRight'>
                    <div className={`ProjectBorderRight ${secondProject? 'loaded': ''}`}></div>
                        <div className='ProjectCore'>
                <div className='ProjectDescription2'>
                    <div className='firstLine'>
                        <div className='Titre'>
                        Tracker
                        </div>
                        <div className='share'>
                            <div className='tagR'><img src={github} className='tagResources'/></div>
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
                </div></div></div>
                <div className='ProjectVideo2'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
            </div>
            
        </div>


        <div className={`ProjectContent ${thirdProject? 'loaded': ''}`} style={{visibility:thirdProject?'visible':'hidden'}}>
            <div className='Project p1'>
                <div className='ProjectVideo'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
                       <div className='borderUp'>
                       <div className={`ProjectBorder2 ${thirdProject? 'loaded': ''}`}></div>
                    <div className='borderLeft'>
                    <div className={`ProjectBorder ${thirdProject? 'loaded': ''}`}></div>
                        <div className='ProjectCore'>
                <div className='ProjectDescription1'>
                    <div className='firstLine'>
                        <div className='Titre'>
                        Tracker.exe
                        </div>
                        <div className='share'>
                            <div className='tagR'><img src={github} className='tagResources'/></div>
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
        </div></div></div>
        
        <div className={`ProjectContent2 ${fourthProject? 'loaded': ''}`} style={{visibility:fourthProject?'visible':'hidden'}}>
            <div className='Project p2'>
            <div className='borderUpRight'>
            <div className={`ProjectBorderUpRight ${fourthProject? 'loaded': ''}`}></div>
                    <div className='borderRight'>
                    <div className={`ProjectBorderRight ${fourthProject? 'loaded': ''}`}></div>
                        <div className='ProjectCore'>
                <div className='ProjectDescription2'>
                    <div className='firstLine'>
                        <div className='Titre'>
                        RG STATS
                        </div>
                        <div className='share'>
                            <div className='tagR'><img src={github} className='tagResources'/></div>
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
                </div></div></div>
                <div className='ProjectVideo2'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Project
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
        <>
        
                <div className={`ProjectTitre ${startProject? 'ProjectTitre2': ''}`}><p>02. </p><p>Project</p>
            </div>
        <div className={`ProjectContent ${firstProject? 'loaded': ''}`} style={{visibility:firstProject?'visible':'hidden'}}>
            <div className='Project p1'>
                <div className='ProjectVideo'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
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
                    <div className='Date'>
                        February 2021
                    </div>
                    <div className='FullDescription'>
                    Le Lorem Ipsum est simplement du faux texte employé dans la c osition et la mise en page avant impression. Le Lorem Ipsum est le  osition et la mise en page avant impression. Le Lorem Ipsum est le omposition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de police
                    </div>
                    <div className='tags'>
                        <div className='tag'>Javascript</div>
                        <div className='tag'>React</div>
                        <div className='tag'>Firebase</div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`ProjectContent2 ${secondProject? 'loaded': ''}`} style={{visibility:secondProject?'visible':'hidden'}}>
            <div className='Project p2'>
              
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
                    <div className='FullDescription'>
                    Le Lorem Ipsum est simplement du faux texte employé dans la c osition et la mise en page avant impression. Le Lorem Ipsum est le  osition et la mise en page avant impression. Le Lorem Ipsum est le omposition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de police
                    </div>
                    <div className='tags'>
                        <div className='tag'>Javascript</div>
                        <div className='tag'>React</div>
                        <div className='tag'>Chart.js</div>
                    </div>
                </div>
                <div className='ProjectVideo2'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
            </div>
        </div>


        <div className={`ProjectContent ${thirdProject? 'loaded': ''}`} style={{visibility:thirdProject?'visible':'hidden'}}>
            <div className='Project p3'>
                <div className='ProjectVideo'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
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
                    Le Lorem Ipsum est simplement du faux texte employé dans la c osition et la mise en page avant impression. Le Lorem Ipsum est le  osition et la mise en page avant impression. Le Lorem Ipsum est le omposition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de police
                    </div>
                    <div className='tags'>
                        <div className='tag'>.NET</div>
                        <div className='tag'>C#</div>
                        <div className='tag'>PHP</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={`ProjectContent2 ${fourthProject? 'loaded': ''}`} style={{visibility:fourthProject?'visible':'hidden'}}>
            <div className='Project p2'>
              
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
                    <div className='FullDescription'>
                    Le Lorem Ipsum est simplement du faux texte employé dans la c osition et la mise en page avant impression. Le Lorem Ipsum est le  osition et la mise en page avant impression. Le Lorem Ipsum est le omposition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de police
                    </div>
                    <div className='tags'>
                    <div className='tag'>Javascript</div>
                        <div className='tag'>React</div>
                        <div className='tag'>Node.js</div>
                        <div className='tag'>Python</div>
                        <div className='tag'>PHP</div>
                    </div>
                </div>
                <div className='ProjectVideo2'>
                    <img src={imageProject1} className='imageProjet'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Project
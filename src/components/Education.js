import '../styles/About.css';
import '../styles/Education.css';
import '../styles/Project.css'
import React, {useState, useEffect} from 'react';

function About(props){
    const [scroll, setScroll] = useState(false);
    const [secondScroll, setSecondScroll] = useState(props.scrollExperience);
    const [animation, setAnimation] = useState(false); 
    const [animation1, setAnimation1] = useState(false); 
    const [animation2, setAnimation2] = useState(false);
    const [animation3, setAnimation3] = useState(false);
    const [animation4, setAnimation4] = useState(false);
    const [animation_cission, setAnimation_cission] = useState(props.scrollEducation);

    useEffect(() => {
        setScroll(props.scrollEducation);
        setAnimation_cission(props.scrollEducation)
        setTimeout(() => {
            setAnimation(props.scrollEducation);
        }, 200);
        setTimeout(() => {
            setAnimation1(props.scrollEducation);
        }, 400);
        setTimeout(() => {
            setAnimation2(props.scrollEducation);
        }, 600);
        setTimeout(() => {
            setAnimation3(props.scrollEducation);
        }, 800);
        setTimeout(() => {
            setAnimation4(props.scrollEducation);
        }, 1000);
    },[props.scrollEducation])

    return (
        <>
        <div className={`EducationTitre ${scroll? 'EducationTitre2' : ''}`}><h1 style={{display:'flex', fontWeight:'inherit'}}><p>03. </p><p>Expériences</p></h1></div>
        <div className={`Education ${scroll? 'EducationScroll' : ''}`}> 
                <div className='SchoolYear'>
                    <div className={` ${animation? 'OneSchool': ''}`}  style={{visibility:animation?'visible':'hidden'}}>
                            <article>
                            <div className='TitleSchoolY TSL'>
                                2020 - Now
                            </div>
                                <div className='SchoolY SchoolYL'>
                                    BTS Système d'information <br/>aux organisations 
                                    </div>
                                <div className='SchoolYA'>
                                    Solutions logiciels et applications métiers
                                    </div>
                                <div className='SchoolYE'>
                                    La Réunion - 97434 France
                                </div>
                                </article>
                </div>
                <div className={` ${animation1? 'OneSchool OneSchoolR': ''}`}  style={{visibility:animation1?'visible':'hidden'}}>
                <article>
                        <div className='TitleSchoolY TSR'>
                            2016 - 2019
                        </div>
                        <div className='SchoolY SchoolYL'>
                            Bachelor <br/> Marketing & Communication
                            </div>
                        <div className="SchoolYA">
                            Sport Management - ISEFAC
                        </div>
                        <div className='SchoolYE'>
                            Nantes  - 44000 France
                        </div>
                        </article>
                        </div>
                        <div className={` ${animation2? 'OneSchool': ''}`}  style={{visibility:animation2?'visible':'hidden'}}>
                        <article>
                        <div className='TitleSchoolY TSL'>
                            2013 - 2016
                        </div>
                        <div className='SchoolY SchoolYL'>
                            Langues étrangères appliquées <br/> Anglais & Chinois
                            </div>
                            <div className="SchoolYA">
                            Relations Internationales, Université Bordeaux-Montaigne
                            </div>
                            <div className="SchoolYE">
                            Bordeaux 33300 - France
                        </div>
                        </article>
                        </div>
                </div>  
                <div className={` ${animation_cission? 'Cission': ''}`}  style={{visibility:animation_cission?'visible':'hidden'}}>
                </div>
                <div className='Experience'>
                <div className={` ${animation3? 'OneExperience': ''}`}  style={{visibility:animation3?'visible':'hidden'}}>
                        <article>
                        <div className='ExperienceY'>
                        <div className='TitleExperienceY'>
                            Mars-Septembre 2019
                        </div>
                            <div className='TitleExperience'>
                            Chargé de communication
                            </div>
                            <div className='RoleExperience'>
                            Stage
                            </div>
                            <div className='LocationExperience'>
                            Union Bordeaux Métropole - Bordeaux 33000
                            </div>
                        </div>
                        </article>
                        </div>
                <div className={` ${animation4? 'OneExperience TwoExperience': ''}`}  style={{visibility:animation4?'visible':'hidden'}}>
                <article>
                        <div className='TitleExperienceY'>
                            June-September 2018
                        </div>
                        <div className='ExperienceY'>
                            <div className='TitleExperience'>
                            Chargé de communication
                            </div>
                            <div className='RoleExperience'>
                            Stage
                            </div>
                            <div className='LocationExperience'>
                            Ligue Réunionnaise de Golf - Réunion 97426 </div>
                        </div>
                        </article>
                        </div>
                </div>
                </div>
</>
    )
}
export default About
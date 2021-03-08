import '../styles/About.css';
import '../styles/Education.css';
import '../styles/Project.css'
import React, {useState, useEffect} from 'react';

function About(props){
    
    const [scroll, setScroll] = useState(false);
    const [secondScroll, setSecondScroll] = useState(props.scrollExperience);

    useEffect(() => {
        setScroll(props.scrollEducation);
    },[props.scrollEducation])
    useEffect(() => {
        setSecondScroll(props.scrollExperience);
    },[props.scrollExperience])

    return (
        <>
        <div className={`EducationTitre ${scroll? 'EducationTitre2' : ''}`}><p>03. </p><p>Education</p></div>
        <div className={`Education ${secondScroll? 'EducationScroll' : ''}`}>
                <div className='SchoolYear'>
                       
                        <div className='OneSchool'>
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
                        </div>
                        <div className='OneSchool OneSchoolR'>
                        <div className='TitleSchoolY TSR'>
                            2016 - 2019
                        </div>
                        <div className='SchoolY SchoolYL'>
                            Marketing & Communication <br/> bachelor
                            </div>
                        <div className="SchoolYA">
                            Sport Management - ISEFAC
                        </div>
                        <div className='SchoolYE'>
                            Nantes  - 44000 France
                        </div>
                        </div>



                        <div className='OneSchool'>
                        <div className='TitleSchoolY TSL'>
                            2013 - 2016
                        </div>
                        <div className='SchoolY SchoolYL'>
                            Applied Foreign Languages <br/> English & Chineese
                            </div>
                            <div className="SchoolYA">
                            Relations Internationales, Université Bordeaux-Montaigne
                            </div>
                            <div className="SchoolYE">
                            Bordeaux 33300 - France
                        </div>
                        </div>
                </div>  

                <div className='Cission'>
                </div>

                <div className='Experience'>


                    <div className='OneExperience'>
                        <div className='TitleExperienceY'>
                            March-September 2019
                        </div>
                        <div className='ExperienceY'>
                            <div className='TitleExperience'>
                            Communications officer
                            </div>
                            <div className='RoleExperience'>
                            Internship
                            </div>
                            <div className='LocationExperience'>
                            Union Bordeaux Métropole - Bordeaux 33000
                            </div>
                        </div>
                        </div>

                        <div className='OneExperience TwoExperience'>
                        <div className='TitleExperienceY'>
                            June-September 2018
                        </div>
                        <div className='ExperienceY'>
                            <div className='TitleExperience'>
                            Communications officer
                            </div>
                            <div className='RoleExperience'>
                            Internship
                            </div>
                            <div className='LocationExperience'>
                            Ligue Réunionnaise de Golf - Réunion 97426 </div>
                        </div>
                        </div>
                </div>
                </div>
</>
    )

}

export default About
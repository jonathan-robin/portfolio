import logo from '../resources/logo.jpg'
import React, {useEffect, useState} from 'react';
import '../styles/NavigationHeader.css';
import $ from 'jquery';

function NavigationHeader(props){
    const [scroll, setScroll] = useState(false); 
    const [scrollProject, setScrollProject] = useState(false);
    const [scrollAbout, setScrollAbout] = useState(false);
    const [scrollEducation, setScrollEducation] = useState(false);
    const [trigger, setTrigger] = useState(true);

    var handleClickAbout = () => { 
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    var handleClickProject = () => { 
        window.scrollTo({
            top: 1110,
            behavior: 'smooth',
        })
    }
    var handleClickEducation = () => {
        // if(trigger){
            // setTimeout(()=> {
                window.scrollTo({
                    top:3800, 
                    behavior:'smooth'
                })
            // },700)
        //         window.scrollTo({
        //         top: 3000,
        //         behavior: 'smooth',
        //     })
        //     setTrigger(false);
        // }
        // window.scrollTo({
        //     top:3800, 
        //     behavior:'smooth'
        // })
    }

    useEffect(() => { 
        window.addEventListener('scroll', (event) => { 
            if ($('html').scrollTop() < 600) { 
                setScrollProject(false);
                setScrollEducation(false);
                setScrollAbout(true);
            }
            if ($('html').scrollTop() > 1100 && $('html').scrollTop() < 3250) { 
                setScrollProject(true);
                setScrollAbout(false);
                setScrollEducation(false);
            }
            if ($('html').scrollTop() > 3250) { 
                setScrollProject(false);
                setScrollAbout(false);
                setScrollEducation(true);
            }
        })
      },[])

      useEffect(() => {
        setScrollEducation(props.scrollEducation)
        if(props.scrollEducation){ 
            setScrollAbout(false);
            setScrollProject(false);
        }
      },[props.scrollEducation])

    useEffect(() => { 
        setScroll(props.scroll);
        setScrollAbout(props.scroll);
        if(props.scroll){ 
            setScrollProject(false);
            setScrollEducation(true);
        }
        console.log('scroll:' , props.scroll);
    },[props.scroll])

    useEffect(() => { 
        setScrollProject(props.scrollProject);
        if(props.scrollProject){ 
            setScrollAbout(false);
            setScrollEducation(false)
        }
        console.log('scrollProject :', props.scrollProject);
    },[props.scrollProject])

    return (
        <div className={`headerNavigation ${scroll? 'scroll':''}`}>
            <div className='NavigationBar'>
                <div className='logoNavigation'>
                    <img className='imgLogoNavigation' src={logo} />
                </div>
                <ol className='olNav'>
                    <li className={`NavigationTag ${scrollAbout? 'scroll':''}`} onClick={handleClickAbout}>About</li>
                    <li className={`NavigationTag ${scrollProject? 'scrollProject':''}`} onClick={handleClickProject}>Project</li>
                    <li className={`NavigationTag ${scrollEducation? 'scrollEducation':''}`} onClick={handleClickEducation}>Education</li>
                    <li className='NavigationTag'>Contact</li>
                    <div className={`resumeLink ${scroll? 'scroll':''}`}>
                        Resume
                    </div>
                </ol>
            </div>
        </div>
    )
}
export default NavigationHeader
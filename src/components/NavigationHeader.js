import logo from '../resources/logo.jpg'
import React, {useEffect, useState} from 'react';
import '../styles/NavigationHeader.css';
import $ from 'jquery';

function NavigationHeader(props){
    const [scroll, setScroll] = useState(true); 
    const [scrollProject, setScrollProject] = useState(false);
    const [scrollAbout, setScrollAbout] = useState(false);
    const [scrollEducation, setScrollEducation] = useState(false);
    const [scrollContact, setScrollContact] = useState(false);
    const [animation1, setAnimation1] = useState(false);
    const [animation2, setAnimation2] = useState(false);
    const [animation3, setAnimation3] = useState(false);
    const [animation4, setAnimation4] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimation1(true);
        }, 100)
        setTimeout(() => {
            setAnimation2(true);
        }, 200)
        setTimeout(() => {
            setAnimation3(true);
        }, 300)
        setTimeout(() => {
            setAnimation4(true);
        }, 400)
    },[])

    useEffect(() => {
        console.log(scroll)
        $("#olNav li.NavigationTag").each(function(i) {
            console.log(i);
            $(this).delay(500 * i).fadeIn(500);
        });
    })

    var handleClickAbout = () => { 
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    var handleClickProject = () => { 
        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
        })
    }
    var handleClickContact = () => { 
        window.scrollTo({ 
            top:5500, 
            behavior:'smooth'
        })
    }
    var handleClickEducation = () => {
                window.scrollTo({
                    top:3300, 
                    behavior:'smooth'
                })
    }

    useEffect(() => { 
        window.addEventListener('scroll', (event) => { 
            if ($('html').scrollTop() < 600) { 
                setScrollAbout(true);
                setScrollProject(false);
                setScrollEducation(false);
                setScrollContact(false);
            }
            if ($('html').scrollTop() > 700 && $('html').scrollTop() < 3250) { 
                setScrollProject(true);
                setScrollAbout(false);
                setScrollEducation(false);
                setScrollContact(false);
            }
            if ($('html').scrollTop() > 2750  && $('html').scrollTop() < 5000) { 
                setScrollEducation(true);
                setScrollProject(false);
                setScrollAbout(false);
                setScrollContact(false);
            }
            if ($('html').scrollTop() > 3900) { 
                setScrollContact(true);
                setScrollProject(false);
                setScrollAbout(false);
                setScrollEducation(false);
            }

        })
      },[])

      useEffect(() => {
        setScrollEducation(props.scrollEducation)
        if(props.scrollEducation){ 
            setScrollAbout(false);
            setScrollProject(false);
            setScrollContact(false);
        }
      },[props.scrollEducation])

      useEffect(() => { 
        setScrollContact(props.scrollContact)
        if(props.scrollContact){ 
            setScrollAbout(false); 
            setScrollProject(false); 
            setScrollEducation(false);
        }
      },[props.scrollContact])  

    useEffect(() => { 
        setScroll(props.scroll);
        setScrollAbout(props.scroll);
        if(props.scroll){ 
            setScrollProject(false);
            setScrollEducation(false);
            setScrollContact(false);
        }
    },[props.scroll])

    useEffect(() => { 
        setScrollProject(props.scrollProject);
        if(props.scrollProject){ 
            setScrollAbout(false);
            setScrollEducation(false)
            setScrollContact(false);
        }
        console.log('scrollProject :', props.scrollProject);
    },[props.scrollProject])

    return (
        <div className={`headerNavigation ${scroll? 'scroll': ''}`}>
            <div className='NavigationBar'>
                <div className='logoNavigation'>
                    <img className='imgLogoNavigation' src={logo} />
                </div>
                <ol className='olNav' id='olNav'>
                    <li className={`NavigationTag ${scrollAbout? 'scroll':''}`}  onClick={handleClickAbout}>About</li>
                    <li className={`NavigationTag ${scrollProject? 'scrollProject':''}`} style={{visibility: animation1? 'visible':'hidden'}} onClick={handleClickProject}>Project</li>
                    <li className={`NavigationTag ${scrollEducation? 'scrollEducation':''}`} style={{visibility: animation2? 'visible':'hidden'}} onClick={handleClickEducation}>Education</li>
                    <li className={`NavigationTag ${scrollContact? 'scrollContact':''}`} style={{visibility: animation3? 'visible':'hidden'}} onClick={handleClickContact}>Contact</li>
                    <div className={`resumeLink ${scroll? 'scroll':''}`} style={{visibility: animation4? 'visible':'hidden'}}>
                        Resume
                    </div>
                </ol>
            </div>
        </div>
    )
}
export default NavigationHeader
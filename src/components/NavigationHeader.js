import logo from '../resources/logo.jpg'
import React, { useEffect, useState } from 'react';
import '../styles/NavigationHeader.css';
import $ from 'jquery';

function NavigationHeader(props) {
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
    }, [])

    useEffect(() => {
        $("#olNav li.NavigationTag").each(function (i) {
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
        $('.ProjectOverAll')[0].scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    var handleClickContact = () => {
        $('.ContactTitre')[0].scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    var handleClickEducation = () => {
        $('.EducationTitre')[0].scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    var getDevice = () => { 
    //Iphone X - landscape
          if(window.innerWidth == 812 && window.innerHeight == 375 || 
    //Iphone 6+,7+,8+
             window.innerWidth == 736 && window.innerHeight == 414 || 
    //Iphone 6,7,8
             window.innerWidth == 667 && window.innerHeight == 375 ||
    // Iphone 5,5c,5s,5se
             window.innerWidth == 568 && window.innerHeight == 320){
            return [600, 700, 2500, 3200]
        }
    //Iphone X - Portrait
        else if(window.innerWidth == 375 && window.innerHeight == 812 || 
    //Iphone 6+,7+,8+
            window.innerWidth == 414 && window.innerHeight == 736 ||
    //Iphone 6,7,8
             window.innerWidth == 375 && window.innerHeight == 667 ||
    // Iphone 5,5c,5s,5se
             window.innerWidth == 320 && window.innerHeight == 568){
            return [600, 700, 4400, 5150]
        }
        else if (window.innerWidth > 990 && window.innerWidth < 1375) {
            return [600, 700, 4000, 5000]
        }
        else if (window.innerWidth > 500 && window.innerWidth <= 1375) {
            return [600, 700, 5450, 6600]
        }
        else if (window.innerWidth < 550) {
            return [600, 700, 5500, 6900]
        }
        else if (window.innerWidth > 1375) {
            return [600, 700, 4250, 5600]
        }
        else{
            return [600,700,3000,4000];
        }
    }

    useEffect(() => {
        var device = [0];
        window.addEventListener('scroll', (event) => {
           device = getDevice();
            if ($('html').scrollTop() < device[0]) {
                setScrollAbout(true);
                setScrollProject(false);
                setScrollEducation(false);
                setScrollContact(false);
            }
            if ($('html').scrollTop() > device[1] && $('html').scrollTop() < device[2]) {
                setScrollProject(true);
                setScrollAbout(false);
                setScrollEducation(false);
                setScrollContact(false);
            }
            if ($('html').scrollTop() > device[2] && $('html').scrollTop() < device[3]) {
                setScrollEducation(true);
                setScrollProject(false);
                setScrollAbout(false);
                setScrollContact(false);
            }
            if ($('html').scrollTop() > device[3]) {
                setScrollContact(true);
                setScrollProject(false);
                setScrollAbout(false);
                setScrollEducation(false);
            }

        })
    }, [])

    useEffect(() => {
        setScrollEducation(props.scrollEducation)
        if (props.scrollEducation) {
            setScrollAbout(false);
            setScrollProject(false);
            setScrollContact(false);
        }
    }, [props.scrollEducation])

    useEffect(() => {
        setScrollContact(props.scrollContact)
        if (props.scrollContact) {
            setScrollAbout(false);
            setScrollProject(false);
            setScrollEducation(false);
        }
    }, [props.scrollContact])

    useEffect(() => {
        setScroll(props.scroll);
        setScrollAbout(props.scroll);
        if (props.scroll) {
            setScrollProject(false);
            setScrollEducation(false);
            setScrollContact(false);
        }
    }, [props.scroll])

    useEffect(() => {
        setScrollProject(props.scrollProject);
        if (props.scrollProject) {
            setScrollAbout(false);
            setScrollEducation(false)
            setScrollContact(false);
        }
    }, [props.scrollProject])

    return (
        <>
            <div className={`headerNavigation ${scroll ? 'scroll' : ''}`}>
                <div className='NavigationBar'>
                    <div className='logoNavigation' onClick={handleClickAbout}>
                        <svg className='svgNav' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="80px" viewBox="0 0 87.59 99.306">
                            <g>
                                <path className='pathNav-2' stroke="#ccd6f6" stroke-miterlimit="10" d="M45.377,98.392c-0.953,0.55-2.513,0.552-3.467,0.005l-39.68-22.75 c-0.954-0.547-1.732-1.895-1.729-2.995l0.139-45.739c0.003-1.1,0.785-2.45,1.738-3l39.837-23c0.953-0.55,2.513-0.552,3.467-0.005 l39.68,22.75c0.954,0.547,1.732,1.895,1.729,2.995l-0.139,45.739c-0.003,1.1-0.785,2.45-1.738,3L45.377,98.392z"/>
                            </g>
                        </svg>
                    </div>
                    <nav>
                    <ol className='olNav' id='olNav'>
                        <li className={`NavigationTag ${scrollAbout ? 'scroll' : ''}`} onClick={handleClickAbout}>About</li>
                        <li className={`NavigationTag ${scrollProject ? 'scrollProject' : ''}`} style={{ visibility: animation1 ? 'visible' : 'hidden' }} onClick={handleClickProject}>Projets</li>
                        <li className={`NavigationTag ${scrollEducation ? 'scrollEducation' : ''}`} style={{ visibility: animation2 ? 'visible' : 'hidden' }} onClick={handleClickEducation}>Expériences</li>
                        <li className={`NavigationTag ${scrollContact ? 'scrollContact' : ''}`} style={{ visibility: animation3 ? 'visible' : 'hidden' }} onClick={handleClickContact}>Contact</li>
                    </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default NavigationHeader
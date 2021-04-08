import '../styles/Contact.css';
import '../styles/About.css';
import '../styles/Education.css';
import '../styles/Project.css'
import React, {useState, useEffect, useRef} from 'react';
import github from '../resources/github.svg'; 
import Linkedin from '../resources/Linkedin.svg'; 
import $ from 'jquery';

function Contact(props){

    const [scroll, setScroll] = useState(false);
    const [animation, setAnimation] = useState(false);
    const emailRef = useRef(''); 
    const messageRef = useRef(''); 
    const nameRef = useRef(''); 
    const [messageSent, setMessageSent] = useState("N'hésitez pas à me contacter !");

    useEffect(() => {
        setScroll(props.scrollContact);
        setTimeout(() => { 
            setAnimation(props.scrollContact);
        },500)
    },[props.scrollContact])

    var handleSubmit = () => { 
        var data = {email : emailRef.current.value, 
                    name: nameRef.current.value, 
                    message: messageRef.current.value
                    }
                var xhr = new XMLHttpRequest();
                xhr.addEventListener('load', () => { 
                    emailRef.current.value = ''; 
                    messageRef.current.value = ''; 
                    nameRef.current.value = '';
                });
                xhr.open('GET', 'https://jonathan-robin.com/api/index.php?email='+data.email+'&name='+data.name+'&message='+data.message);
                xhr.send();

        setTimeout(() => {
            document.getElementById('sendMessage').style.visibility = 'hidden';   
        },3000)
        setMessageSent('Votre message a bien été envoyé !')
        document.getElementById('sendMessage').style.animation = 'fade-out 3s ease-in-out';
    }

    return (
        <>
        <div className={`ContactTitre ${scroll? 'ContactTitre2' : ''}`}><h1 style={{display:'flex', fontWeight:'inherit'}}><p>04. </p><p>Contact</p></h1></div>
        <div className={`ContactComponent ${animation? 'scrolled' : ''}`} style={{visibility:animation?'visible':'hidden'}}>
        <div className='ContactAdress'>
            <div className='ContactAd'>
                <a media='screen' hreflang='fr-fr' href='https://github.com/jonathan-robin' type="text/html" title='Github Page ROBIN Jonathan' author='ROBIN Jonathan' target='_blank'>
                <img className='imgReseau' alt='Github Logo' src={github}/></a></div>
            <div className='ContactAd'><img className='imgReseau' src={Linkedin}/></div>
            </div>
            <div className='sendMessage' id='sendMessage'>
            {messageSent}</div>
            <div className='ContactForm'>
            <iframe name="hiddenFrame" style={{width:"0", height:'0', border:'0', display:'none'}}></iframe>
            <form className='meform' id="contact-form" target='hiddenFrame' onSubmit={handleSubmit}>
                <label className="name" htmlFor='name'>Nom</label>
                    <div className="Name-group">
                        <input type="text" className="form-control" required ref={nameRef} name="name"/>
                    </div>
                    <label htmlFor="exampleInputEmail1" className='email'>Email</label>
                    <div className="email-group">
                        <input type="email" className="form-control"  ref={emailRef} required aria-describedby="emailHelp" name="email" />
                    </div>
                    <label htmlFor="message" className='message'>Message</label>
                    <div className="Message-group">
                        <textarea className="form-control fc-Message" ref={messageRef} required name="message"></textarea>
                    </div>
                    <button type="submit" className="butonSubmit">Send</button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Contact
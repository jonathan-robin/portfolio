import '../styles/Contact.css';
import '../styles/About.css';
import '../styles/Education.css';
import '../styles/Project.css'
import React, {useState, useEffect, useRef} from 'react';
import github from '../resources/GitHub-Mark.png'; 
import Linkedin from '../resources/LinkedIn-Logo.png'; 
import $ from 'jquery';

function Contact(props){

    const [scroll, setScroll] = useState(false);
    const [animation, setAnimation] = useState(false);
    const emailRef = useRef(''); 
    const messageRef = useRef(''); 
    const nameRef = useRef(''); 
    const [messageSent, setMessageSent] = useState('');

    useEffect(() => {
        setScroll(props.scrollContact);
        setTimeout(() => { 
            setAnimation(props.scrollContact);
        },500)
    },[props.scrollContact])

    var handleSubmit = () => { 
        setTimeout(() => {
            emailRef.current.value = ''; 
            messageRef.current.value = ''; 
            nameRef.current.value = '';
            setTimeout(() => {
                setMessageSent('');
            },3000)
        },1000)
        setMessageSent(<>
            <div className='messageSent'>Merci, votre message a bien été envoyé !</div>
        </>)
    }

    return (
        <>
        <div className={`ContactTitre ${scroll? 'ContactTitre2' : ''}`}><p>04. </p><p>Contact</p></div>
        <div className={`ContactComponent ${animation? 'scrolled' : ''}`} style={{visibility:animation?'visible':'hidden'}}>
        <div className='ContactAdress'>
            <div className='ContactAd'><img className='imgReseau' src={github}/></div>
            <div className='ContactAd'><img className='imgReseau' src={Linkedin}/></div>
            </div>
            {messageSent}
            <div className='ContactForm'>
            <iframe name="hiddenFrame" style={{width:"0", height:'0', border:'0', display:'none'}}></iframe>
            <form id="contact-form" method="POST" action="/send" target='hiddenFrame' onSubmit={handleSubmit}>
            <label className="name" htmlFor='name'>Name</label>
                <div className="Name-group">
                    <input type="text" className="form-control" required ref={nameRef} name="name"/>
                </div>
                <label htmlFor="exampleInputEmail1" className='email'>Email address</label>
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
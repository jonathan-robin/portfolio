import '../styles/Contact.css';
import '../styles/About.css';
import '../styles/Education.css';
import '../styles/Project.css'
import React, {useState, useEffect} from 'react';
import github from '../resources/GitHub-Mark.png'; 
import Linkedin from '../resources/LinkedIn-Logo.png'; 

function Contact(props){

    const [scroll, setScroll] = useState(false);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setScroll(props.scrollContact);
        setTimeout(() => { 
            setAnimation(props.scrollContact);
        },500)
    },[props.scrollContact])

    var handleSubmit = () => { 
        console.log("handleSubmit");
    }

    return (
        <>
        <div className={`ContactTitre ${scroll? 'ContactTitre2' : ''}`}><p>04. </p><p>Contact</p></div>
        <div className={`ContactComponent ${animation? 'scrolled' : ''}`} style={{visibility:animation?'visible':'hidden'}}>
        <div className='ContactAdress'>
            <div className='ContactAd'><img className='imgReseau' src={github}/></div>
            <div className='ContactAd'><img className='imgReseau' src={Linkedin}/></div>
            </div>
            <div className='ContactForm'>
            <form id="contact-form" onSubmit={handleSubmit()} method="POST">
            <label className="name" htmlFor='name'>Name</label>
                <div className="Name-group">
                    <input type="text" className="form-control" />
                </div>
                <label htmlFor="exampleInputEmail1" className='email'>Email address</label>
                <div className="email-group">
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <label htmlFor="message" className='message'>Message</label>
                <div className="Message-group">
                    <textarea className="form-control fc-Message" ></textarea>
                </div>
                <button type="submit" className="butonSubmit">Send</button>
            </form>
            </div>
        
            </div>
        </>
    )

}

export default Contact
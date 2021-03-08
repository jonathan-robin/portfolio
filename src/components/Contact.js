import '../styles/Contact.css';
import '../styles/About.css';
import '../styles/Education.css';
import '../styles/Project.css'
import React, {useState, useEffect} from 'react';

function Contact(props){

    const [scroll, setScroll] = useState(true);
    return (
        <>
            <div className='Contact'>
                CONTACT
        <div className={`EducationTitre ${scroll? 'EducationTitre2' : ''}`}><p>04. </p><p>Contact</p></div>
            </div>
        </>
    )

}

export default Contact
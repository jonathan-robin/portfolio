import React from 'react'; 
import '../styles/design.css';
import Gentecz1 from '../resources/Gentecz-1.PNG';
import Gentecz2 from '../resources/Gentecz-2.PNG';
import Gentecz3 from '../resources/Gentecz-3.PNG';
import Gentecz4 from '../resources/Gentecz-4.PNG';
import Gentecz5 from '../resources/Gentecz-5.PNG';
import Gentecz6 from '../resources/Gentecz-6.PNG';
import Gentecz7 from '../resources/Gentecz-7.PNG';
import Gentecz8 from '../resources/Gentecz-8.PNG';
import github from '../resources/github.svg'
import upload from '../resources/upload.svg'



function Design() {
    return (
        <div className='Design'>
            <div className='TitreAbout TitreDesign'><p>02.5 </p><p>Quelques Designs</p></div>
        <div className='Designs'>
            <div className='Design-1'>
                <div className='firstLine firstLine-2'>
                <div className='Date-design'>
                    Mars 2021
                    </div>
                <div className='tags-design'>
                    <a target="_blank" className='a-design' href='https://github.com/jonathan-robin/GenteczCopycat'><img src={github} className='tagResources'/></a>
                    <a target='_blank' className='a-design' href='http://gentecz.jonathan-robin.com/'><img src={upload} className='tagResources'/></a>
                </div>
                </div>
                <div className='Design-outter'>
                    <div className='Carrousel-design-1'>
                        <img src={Gentecz1} class='Design-img'/>
                        <img src={Gentecz2} class='Design-img'/>
                        <img src={Gentecz3} class='Design-img'/>
                        <img src={Gentecz4} class='Design-img'/>
                        <img src={Gentecz5} class='Design-img'/>
                        <img src={Gentecz6} class='Design-img'/>
                        <img src={Gentecz7} class='Design-img'/>
                        <img src={Gentecz8} class='Design-img'/>
                    </div>
                </div>
                <div className='Text-design-1'>
                    CopyCat du site <a href='https://gentacz.netlify.app/business-home.html#'>Gentecz.</a><br/>
                    Utilisation du framework css TailwindCss.<br/>
                    Site 100% responsive.
                </div>
                <div className='framework-design-1'>
                <div className='framework-design'>Javascript</div> 
                <div className='framework-design'>React</div> 
                <div className='framework-design'>TailwindCss</div> 
                </div>
            </div>

        
            </div>
        </div>
    )
}

export default Design

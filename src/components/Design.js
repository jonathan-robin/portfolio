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
                    <a target="_blank" type='text/html' title='Portfolio ROBIN Jonathan project Github' media='text/html' author='ROBIN Jonathan' hreflang='fr-fr' className='a-design' href='https://github.com/jonathan-robin/GenteczCopycat'>
                        <img src={github} alt='logo Github.com' title='logo Github' className='tagResources'/></a>
                    <a target='_blank' type='text/html' title='Portfolio ROBIN Jonathan Gentecz project live version' media='text/html' author='ROBIN Jonathan' hreflang='fr-fr' className='a-design' href='http://gentecz.jonathan-robin.com/'>
                        <img src={upload} alt='download icon' title='download icon' className='tagResources'/></a>
                </div>
                </div>
                <div className='Design-outter'>
                    <div className='Carrousel-design-1'>
                        <img src={Gentecz1} title='Picture from ROBIN Jonathan portfolio project Gentecz website' author='ROBIN Jonathan' alt='first picture of portfolio project copy-website' class='Design-img'/>
                        <img src={Gentecz2} title="Portfolio's ROBIN Jonathan picture-2" author='ROBIN Jonathan' alt='ROBIN jonathan portfolio project copy-website main page'  class='Design-img'/>
                        <img src={Gentecz3} title="Portfolio's ROBIN Jonathan picture-3" author='ROBIN Jonathan' alt='ROBIN jonathan portfolio project copy-website end of main page'  class='Design-img'/>
                        <img src={Gentecz4} title="Portfolio's ROBIN Jonathan picture-4" author='ROBIN Jonathan' alt='Portfolio project of ROBIN Jonathan picture' class='Design-img'/>
                        <img src={Gentecz5} title="Portfolio's ROBIN Jonathan picture-5" author='ROBIN Jonathan' alt='fullstack portfolio picture project copy-website' class='Design-img'/>
                        <img src={Gentecz6} title="Portfolio's ROBIN Jonathan picture-6" author='ROBIN Jonathan' alt='web fullstack portfolio picture project' class='Design-img'/>
                        <img src={Gentecz7} title="Portfolio's ROBIN Jonathan picture-7" author='ROBIN Jonathan' alt='ROBIN jonathan portfolio project copy-website carrousel' class='Design-img'/>
                        <img src={Gentecz8} title="Portfolio's ROBIN Jonathan picture-8" author='ROBIN Jonathan' alt='ROBIN jonathan portfolio project copy-website parralax' class='Design-img'/>
                    </div>
                </div>
                <div className='Text-design-1'>


                    CopyCat du site <a href='https://gentacz.netlify.app/business-home.html#' hreflang='en' media='text/html' author='Saptavarana' title='Saptavarana Gentencz page | porfolio ROBIN Jonathan web fullstack developper' type="text/html" target='_blank'>
                        Gentecz.</a><br/>
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

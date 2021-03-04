import logo from '../resources/logo.jpg'
import '../styles/NavigationHeader.css';
function NavigationHeader(){
    return (
        <div className='headerNavigation'>

            <div className='logoNavigation'>
                <img className='imgLogoNavigation' src={logo} />
            </div>

            <div className='NavigationBar'>
                <ol>
                    <li className='NavigationTag'>About</li>
                    <li className='NavigationTag'>Project</li>
                    <li className='NavigationTag'>Education</li>
                    <li className='NavigationTag'>Contact</li>
                    <div className='resumeLink'>
                        Resume
                    </div>
                </ol>
            </div>
        </div>
    )
}
export default NavigationHeader
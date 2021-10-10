import React,{useEffect, useState} from 'react'; 
import '../styles/Cards.css';
import VanillaTilt from 'vanilla-tilt';
import $ from 'jquery';
import upload from '../resources/upload.svg'; 
import github from '../resources/github.svg'
import '../styles/design.css';


function Cards(props) {
    const [toggle, setToggle] = useState(false);
    const [toggleGithub, setToggleGithub] = useState(false);
    const [startProject, setStartProject] = useState(false); 
    const [destroy, setDestroy] = useState(false);

   
    useEffect(() => { 
        setStartProject(props.scrollStartProject);
        // if (document.querySelectorAll('.card').length > 0){
        //     window.addEventListener('resize',function(){
        //         if (window.innerWidth <= 800){
        //             let destroyBox = document.querySelectorAll('.card');
        //             console.log(destroyBox)
        //             destroyBox.forEach(box => {
        //                 console.log('destroy')
        //                 box.vanillaTilt.destroy();
        //         });
               
        //     }
        // })
        // return () => document.removeEventListener('resize')
        // }


    },[props.scrollStartProject, window.innerWidth])

    const handleOnClick = (event) => { 
        console.log(event.target.classList);
        if (event.target.classList.contains("projet_1")){
            if (!toggle){
                document.getElementById("card-secundo").classList.remove('card_clicked'); 
                document.getElementById("card_blur_secundo").classList.remove('card_clicked'); 
                document.getElementById("card-trois").classList.remove('card_clicked'); 
                document.getElementById("card_blur_trois").classList.remove('card_clicked'); 
                document.getElementById("card-uno").classList.add('card_clicked'); 
                document.getElementById("card_blur_uno").classList.add('card_clicked');
                document.getElementById("card-uno").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

            }
            else{
                document.getElementById("card-uno").classList.remove('card_clicked');
                document.getElementById("card_blur_uno").classList.remove('card_clicked'); 
                document.getElementsByClassName("link_CTA_1")[0].classList.remove('clicked'); 
                document.getElementsByClassName("link_CTA_2")[0].classList.remove('clicked'); 
                setToggleGithub(false);
            }
            setToggle(!toggle);
        }
        if (event.target.classList.contains("projet_2")){
            if (!toggle){
                document.getElementById("card-uno").classList.remove('card_clicked'); 
                document.getElementById("card_blur_uno").classList.remove('card_clicked'); 
                document.getElementById("card-trois").classList.remove('card_clicked'); 
                document.getElementById("card_blur_trois").classList.remove('card_clicked'); 
                document.getElementById("card-secundo").classList.add('card_clicked'); 
                document.getElementById("card_blur_secundo").classList.add('card_clicked'); 
                document.getElementById("card-secundo").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

            }
            else{
                document.getElementById("card-secundo").classList.remove('card_clicked');
                document.getElementById("card_blur_secundo").classList.remove('card_clicked'); 
            }
            setToggle(!toggle);
        }
        if (event.target.classList.contains("projet_3")){
            if (!toggle){
                document.getElementById("card-uno").classList.remove('card_clicked'); 
                document.getElementById("card_blur_uno").classList.remove('card_clicked'); 
                document.getElementById("card-secundo").classList.remove('card_clicked'); 
                document.getElementById("card_blur_secundo").classList.remove('card_clicked'); 
                document.getElementById("card-trois").classList.add('card_clicked'); 
                document.getElementById("card_blur_trois").classList.add('card_clicked'); 
                document.getElementById("card-trois").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

            }
            else{
                document.getElementById("card-trois").classList.remove('card_clicked');
                document.getElementById("card_blur_trois").classList.remove('card_clicked'); 
            }
            setToggle(!toggle);
        }
    }
    const handleClickGithubProjet1 = () => { 
        if (!toggleGithub){
       document.getElementsByClassName("link_CTA_1")[0].classList.add('clicked'); 
       document.getElementsByClassName("link_CTA_2")[0].classList.add('clicked'); 
        }
        else{
            document.getElementsByClassName("link_CTA_1")[0].classList.remove('clicked'); 
            document.getElementsByClassName("link_CTA_2")[0].classList.remove('clicked'); 
        }
        setToggleGithub(!toggleGithub);
    }

    const handleClickPhotoProjet1 = (event) => { 
        console.log(event.currentTarget.src)
        document.getElementsByClassName('full_affiche')[0].attributes[0].value = event.target.currentSrc;
        document.getElementsByClassName('modal_photos')[0].classList.add('open');
    }
    const handleClickClosePhotos = () => {
        document.getElementsByClassName('modal_photos')[0].classList.remove('open');
    }

    return (
        <>
            <div className={`ProjectTitre ${startProject? 'ProjectTitre2': ''}`}><h1 style={{display:'flex', fontWeight:'inherit'}}><p>02. </p><p>Projets</p></h1></div>

<div className='modal_photos'>
    <h1 className="close-photos" onClick={handleClickClosePhotos}>X</h1>
    <img src={require('../resources/rgs-mo2.jpg').default} className='full_affiche'/>
</div>

            <div className={`container_container ${startProject? 'anim': ''}`}>
        <div className='container_card'> 


            <div className='card_blur projet_1' id="card_blur_uno" > 
            <div className='card projet_1' id="card-uno" onClick={(event) => handleOnClick(event)}> 
                <div className='content_card projet_1'> 
                    <h2 className='projet_1'>01</h2>
                    <div className="smallCTA">
                    <img src={github} onClick={handleClickGithubProjet1} alt='logo github' title='logo github' author='www.github.com' className='tagResources git_rgstats'/>
                    <img src={upload} alt='icon upload' title='icon upload' author='unknown' className='tagResources'/>
                    </div>
                    <div className="link_CTA_1"><a href="#">Lien vers le github du serveur</a></div>
                    <div className="link_CTA_2"><a href="#">Lien vers le github du client</a></div>
                    <h3 className="projet_1">RG STATS</h3>
                    <div className='text_photos'>
                        <div className='text'>
                    <p className="projet_1">Application web qui permet de retrouver le résultat de n'importe quel match masculin qui s'est joué à Roland Garros depuis 1968 ainsi que chacun des tableaux !
                    <br/>Les recherches peuvent être filtrées par année, tour ou joueur. Accès au profil des joueurs avec leurs statistiques etc...</p>
                    <p className="projet_1">Le serveur en nodejs est hebergé sur Heroku, la bdd aussi sur clearDB. <br/>
                    Le client est sur un sous-domaine de ce site api-rgstats.jonathan-robin.com</p>
                    <p className="projet_1">Le mieux c'est de tester la version Live !</p>

                    <div>
                    <div className='tags'>
                                        <div className='tag'>#React</div>
                                        <div className='tag'>#Typescript</div>
                                        <div className='tag'>#Sass</div>
                                        <div className='tag'>#Bootstrap</div>
                    </div>
                    <div className='tags'>
                                        <div className='tag'>#Nodejs</div>
                                        <div className='tag'>#Heroku</div>
                    </div>
                   </div> <a className="projet_1" href="#">Live version</a>
                    </div>
                    <div className="photos">
                    <img className="imgProjet" onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/rgs-mo1.jpg').default} />
                    <img className="imgProjet" onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/rgs-mo2.jpg').default} />
                    <img className="imgProjet" onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/rgs-mo4.png').default} />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='card_blur projet_2' id="card_blur_secundo"> 
        <div className='card projet_2' id="card-secundo" onClick={(event) => handleOnClick(event)}> 
                <div className='content_card projet_2'> 
                    <h2 className="projet_2">02</h2>
                    <div className="smallCTA">
                    <img src={github} alt='logo github' title='logo github' author='www.github.com' className='tagResources git_rgstats'/>
                    <img src={upload} alt='icon upload' title='icon upload' author='unknown' className='tagResources'/>
                    </div>
                    <h3 className="projet_2">Copy Facebook</h3>
                    <div className='text_photos'>
                        <div className='text'>
                    <p className="projet_2">Copycat du site Facebook. <br/>
                    Authentification, vérification avec Firebase-auth.<br/>
                    <p className="projet_2">Upload d'images vers Firebase storage, module de cropping de photos. <br/></p>
                    <p className="projet_2">Messagerie instantannée privée, système de publications, de Feed d'actualité et de liste d'amis, mise en place avec Cloud Firestore.<br/></p>
                    Pas loin de détrôner le vaisseau père.
                    Back via Firebase Hosting. Site live hébérgé sur le sous-domaine : copiefacebook.web.app</p>
                    <div className='tags'>
                                        <div className='tag'>#React</div>
                                        <div className='tag'>#Javascript</div>
                                        <div className='tag'>#Bootstrap</div>
                    </div>
                    <div className='tags'>
                                        <div className='tag'>#Firebase</div>
                    </div>
                    <a className="projet_1" href="#">Live version</a>
                   </div>
                    <div className="photos">
                    <img className="imgProjet" onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/copyfb.PNG').default} />
                    <img className="imgProjet" onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/copyfb2.PNG').default} />
                    <img className="imgProjet" onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/copyfb4.PNG').default} />
                    </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='card_blur projet_3' id="card_blur_trois"> 
        <div className='card projet_3' id="card-trois" onClick={(event) => handleOnClick(event)}> 
                <div className='content_card projet_3'> 
                    <h2 className="projet_3">03</h2>
                    <div className="smallCTA">
                    <img src={github} alt='logo github' title='logo github' author='www.github.com' className='tagResources git_rgstats'/>
                    <img src={upload} alt='icon upload' title='icon upload' author='unknown' className='tagResources'/>
                    </div>
                    <h3 className="projet_3">Intégration Gentecz</h3>
                    <div className='text_photos'>
                        <div className='text'>
                    <p className="projet_3">Copycat du site Gentecz. <br/>
                    Utilisation du framework CSS TailwindCss<br/>
                    <p className="projet_3">Site entièrement responsive<br/></p>
                    Site live hébérgé sur le sous-domaine : http://gentecz.jonathan-robin.com/</p>
                    <div className='tags'>
                                        <div className='tag'>#React</div>
                                        <div className='tag'>#Javascript</div>
                                        <div className='tag'>#TailwindCSS</div>
                    </div>
                    <a className="projet_3" href="#">Live version</a>
                   </div>
                    <div className="photos-gentecz">
                        <img onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/Gentecz-1.PNG').default} title='Picture from ROBIN Jonathan portfolio project Gentecz website' author='ROBIN Jonathan' alt='first picture of portfolio project copy-website' class='Design-img'/>
                        <img onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/Gentecz-2.PNG').default} title="Portfolio's ROBIN Jonathan picture-2" author='ROBIN Jonathan' alt='ROBIN jonathan portfolio project copy-website main page'  class='Design-img'/>
                        <img onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/Gentecz-3.PNG').default} title="Portfolio's ROBIN Jonathan picture-3" author='ROBIN Jonathan' alt='ROBIN jonathan portfolio project copy-website end of main page'  class='Design-img'/>
                        <img onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/Gentecz-4.PNG').default} title="Portfolio's ROBIN Jonathan picture-4" author='ROBIN Jonathan' alt='Portfolio project of ROBIN Jonathan picture' class='Design-img'/>
                        <img onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/Gentecz-5.PNG').default} title="Portfolio's ROBIN Jonathan picture-5" author='ROBIN Jonathan' alt='fullstack portfolio picture project copy-website' class='Design-img'/>
                        <img onClick={(event) => handleClickPhotoProjet1(event)} src={require('../resources/Gentecz-8.PNG').default} title="Portfolio's ROBIN Jonathan picture-8" author='ROBIN Jonathan' alt='ROBIN jonathan portfolio project copy-website parralax' class='Design-img'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <script type="text/javascript" src="vanilla-tilt.js"></script>
        <script type="text/javascript">
            {VanillaTilt.init(document.querySelectorAll(".card"), {
                max: 25,
                speed: 400, 
                glare:true, 
                "data-tilt-max-glare":1,
            })
            }
    </script>
        </>
    )
}

export default Cards

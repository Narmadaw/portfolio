import Github from './../../assets/images/tech-stack-icons/github-icon.svg';
import Linkdin from './../../assets/images/tech-stack-icons/linkedin-icon.svg';
import './Footer.scss';

const Footer = () =>{
    const linkToLinkedIn = () =>{
        window.open('https://www.linkedin.com/in/narmada-wijerathn');
    }

    const linkToGithub = () =>{
        window.open('https://github.com/Narmadaw');
    }
    return(
        <>
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__left'>
                    <h2 className='footer__header'>Narmada Wijerathne</h2>
                    <p className='footer__sub-header'>FullStack Software Engineer</p>
                    <p className='footer__text'>+1 (778) 223-3427</p>
                    <p className='footer__text'>narmadaw9@gmail.com</p>
                </div>
                <div className='footer__right'>
                    <div className='footer__icon-box'>
                        <img className='footer__icon' src={Github} alt='github' onClick={linkToGithub } />
                    </div>
                    <div className='footer__icon-box'>
                        <img className='footer__icon' src={Linkdin} alt='linkdin' onClick={linkToLinkedIn } />
                    </div>
                    
                </div>
            </div>
            <div className='footer__bottom'>
                <p className='footer__copy-text'>&copy; 2023. Made by Narmada Wijerathne </p>
            </div>          
        </div>
        </>
    );
}
export default Footer;
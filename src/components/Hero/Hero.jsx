import Github from './../../assets/images/tech-stack-icons/github-icon.svg';
import Linkdin from './../../assets/images/tech-stack-icons/linkedin-icon.svg';
import './Hero.scss';

const Hero = ()=>{
    const linkToLinkedIn = () =>{
        window.open('https://www.linkedin.com/in/narmada-wijerathn');
    }

    const linkToGithub = () =>{
        window.open('https://github.com/Narmadaw');
    }

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects'); // Replace 'projects' with the actual ID of your Projects section
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      };

    return(
        <>
        <div id='hero' className="hero"> 
            <div className='hero__text'>
                <h1 className='hero__text-header'>HEY, I'M NARMADA WIJERATHNE</h1>
                <p className='hero__text-small'>A FullStack Web Developer</p>
                <button className='hero__button' onClick={scrollToProjects}>PROJECTS</button>

                <div className='hero__icon-pannel'>
                <img className='hero__icon' src={Github} alt='github' onClick={linkToGithub } />
                <img className='hero__icon' src={Linkdin} alt='linkdin' onClick={linkToLinkedIn } />
            </div>
            </div>
            
        </div>
        </>
    );
}
export default Hero;
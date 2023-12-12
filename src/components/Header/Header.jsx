import ProfileImage from './../../assets/images/pro-pic.jpg' 
import './Header.scss';

const Header = ()=>{
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects'); // Replace 'projects' with the actual ID of your Projects section
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      };

    const scrollToHome = () => {
        const projectsSection = document.getElementById('hero'); // Replace 'projects' with the actual ID of your Projects section
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      };
    
      const scrollToAbout = () => {
        const projectsSection = document.getElementById('aboutme'); // Replace 'projects' with the actual ID of your Projects section
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      };

    
    return(
        <>
        <div className='header'>
            <div className='nav'>
            <div className='nav__profile'>
                    <img className='nav__img' src={ProfileImage} alt='avatar'/>
                    <h2 className='nav__profile-name'>Narmada Wijerathne</h2>
            </div>

            </div>

        </div>
        <div className='header'>
            <div className='nav'>
                <div className='nav__profile'>
                    <img className='nav__img' src={ProfileImage} alt='avatar'/>
                    <h2 className='nav__profile-name'>Narmada Wijerathne</h2>
                    {/* <button className='nav__resume-btn' onClick={handleDownload}>MY RESUME</button> */}
                    
                </div>
                
                <div className='nav__menu'>
                
                    <ul className='nav__manu-list'>
                        <li className='nav__menu-list-item' onClick={scrollToHome}>HOME</li>
                        <li className='nav__menu-list-item' onClick={scrollToAbout}>ABOUT</li>
                        <li className='nav__menu-list-item' onClick={scrollToProjects}>PROJECTS</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}
export default Header;
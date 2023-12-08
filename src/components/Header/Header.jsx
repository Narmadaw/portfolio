import ProfileImage from './../../assets/images/pro-pic.jpg' 
import './Header.scss';

const Header = ()=>{
    return(
        <>
        <div className='header'>
            <div className='nav'>
                <div className='nav__profile'>
                    <img className='nav__img' src={ProfileImage} alt='profile image' />
                    <h2 className='nav__profile-name'>Narmada Wijerathne</h2>
                </div>
                <div className='nav__menu'>
                    <ul className='nav__manu-list'>
                        <li className='nav__menu-list-item'>HOME</li>
                        <li className='nav__menu-list-item'>ABOUT</li>
                        <li className='nav__menu-list-item'>PROJECTS</li>
                        <li className='nav__menu-list-item'>CONTACT</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}
export default Header;
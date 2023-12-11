import Kingston from './../../assets/images/tech-stack-icons/Kingston-logo.svg';
import LongonMet from './../../assets/images/tech-stack-icons/lmu-logo.svg';
import BrainStation from './../../assets/images/tech-stack-icons/images.png';
import React from './../../assets/images/tech-stack-icons/react.svg';
import JavaScript from './../../assets/images/tech-stack-icons/javascript.svg';
import Node from './../../assets/images/tech-stack-icons/nodejs.svg';
import Html from './../../assets/images/tech-stack-icons/html-5.svg';
import Css from './../../assets/images/tech-stack-icons/css-3.svg';
import Sass from './../../assets/images/tech-stack-icons/sass.svg';
import Csharp from './../../assets/images/tech-stack-icons/c-sharp.svg';
import DotNet from './../../assets/images/tech-stack-icons/dotnet.svg';
import Git from './../../assets/images/tech-stack-icons/git-icon.svg';
import MySql from './../../assets/images/tech-stack-icons/mysql.svg';

import './AboutMe.scss';

const AboutMe = () =>{
    return(
        <>
        <div id='aboutme' className='aboutme'>
            <div className='aboutme__header'>
                <h1>About Me</h1>
                <hr className='aboutme__h-line' />
            </div>
            <div className='about-container'>
                <div className='about-container__left'>
                    <h2>It's me Narmada</h2>
                    <p>
                        I love coding. It brings me joy, and that's why I chose software engineering as my profession. The ability to create and solve problems through code is not just a job for me, it's my true passion.
                    </p>
                    <p> I was born and raised on the beautiful island of Sri Lanka. I pursued my <span className='about-container__special'>studies and worked</span> as a <span className='about-container__special'>C# & .Net</span> software engineer for <span className='about-container__special'>1+ years</span>.  
                        Later, I moved to Canada for further studies. 
                        Now, I am looking back to returning to the career I am most passionate about.</p>
                    <p>
                        As I dedicated my focus to furthering my education, I found that certain aspects of my work had faded from memory. 
                        To remedy this, I enrolled in a comprehensive 3-month boot camp to refresh my knowledge. I successfully completed the <span className='about-container__special'>web development</span> bootcamp at BrainStation, Vancouver, Canada. 
                        During this intensive program, I acquired expertise in <span className='about-container__special'>React, JavaScript and best practices</span> in the field.
                    </p>
                    <p>
                        Now, I am open to <span className='about-container__special'>Job</span> opportunities where I can contribute, learn and grow.
                    </p>
                </div>
                <div className="about-container__right">
                    <div className="about-container__education">
                        <div className='about-container__header'>
                            <h2>My Education</h2>
                        </div>
                        <div className='about-container__pannel'>
                            <div className='about-container__pannel-card'>
                                <img className='about-container__edu-icon about-container__edu-icon--king' src={Kingston} alt="" />
                                <p className='about-container__edu-text'>MSc Software Engineering</p>
                            </div>
                            <div className='about-container__pannel-card'>
                                <img className='about-container__edu-icon' src={LongonMet} alt="" />
                                <p className='about-container__edu-text'>BEng Software Engineering</p>
                            </div>
                            <div className='about-container__pannel-card'>
                                <img className='about-container__edu-icon' src={BrainStation} alt="" />
                                <p className='about-container__edu-text'>Diploma Web Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-container__skills">
                        <h2>My Skills</h2>
                        <div>
                            <img className='about-container__skill-icon' src={Csharp} alt="c-sharp" />
                            <img className='about-container__skill-icon' src={DotNet} alt="dot net" />
                            <img className='about-container__skill-icon' src={JavaScript} alt="javascript" />
                            <img className='about-container__skill-icon' src={React} alt="react" />

                            <img className='about-container__skill-icon' src={Node} alt="node" />
                            <img className='about-container__skill-icon' src={Html} alt="html" />
                            <img className='about-container__skill-icon' src={Css} alt="css" />
                            <img className='about-container__skill-icon' src={Sass} alt="sass" />
                            
                            <img className='about-container__skill-icon' src={Git} alt="git" />
                            <img className='about-container__skill-icon' src={MySql} alt="mysql" />
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default AboutMe;
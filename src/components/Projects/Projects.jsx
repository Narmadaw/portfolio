import TodoImage from './../../assets/images/todo-image.png';
import MongoDb from './../../assets/images/tech-stack-icons/mongodb.svg';
import Express from './../../assets/images/tech-stack-icons/express.svg';
import React from './../../assets/images/tech-stack-icons/react.svg';
import NodeJs from './../../assets/images/tech-stack-icons/nodejs.svg';
import Sass from './../../assets/images/tech-stack-icons/sass.svg';

import './Projects.scss';

const Projects = () =>{
    return (
        <>
        <div className='projects'>
            <div className='container'>
                <div className='container__left-card'>
                    <img src={TodoImage} alt='todo project image' />
                </div>
                <div className="container__right-card">
                    <div className='container__icon-pannel'>
                        <img className='container__icon' src={MongoDb} alt="" />
                        <img className='container__icon' src={Express} alt="" />
                        <img className='container__icon' src={React} alt="" />
                        <img className='container__icon' src={NodeJs} alt="" />
                        <img className='container__icon' src={Sass} alt="" />

                    </div>

                </div>

            </div>

        </div>
        
        </>
    );
}
export default Projects;
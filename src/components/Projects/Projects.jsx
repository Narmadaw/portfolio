import TodoImage from './../../assets/images/todo-image.png';
import MongoDb from './../../assets/images/tech-stack-icons/mongodb.svg';
import Express from './../../assets/images/tech-stack-icons/express.svg';
import React from './../../assets/images/tech-stack-icons/react.svg';
import NodeJs from './../../assets/images/tech-stack-icons/nodejs.svg';
import Sass from './../../assets/images/tech-stack-icons/sass.svg';

import './Projects.scss';

const Projects = () =>{
    const linktoTodo = () =>{
        window.open('https://todobynarmada.netlify.app');
    }

    const linktoTodogithub = () =>{
        window.open('https://github.com/Narmadaw/todo-client');
    }
    return (
        <>
        <div className='projects'>
            <div className='title'>
                <h1>Projects</h1>
                <hr className='aboutme__h-line' />
            </div>
            <div className='project-todo'>
                <div className='container'>
                    <div className='container__left-card'>
                        <img src={TodoImage} alt='todo project image' />
                    </div>
                    <div className="container__right-card">
                        <h3>Todo List</h3>
                        <p>This Todo application seamlessly integrates a user-friendly interface with efficient task management, 
                            providing a smooth experience for creating, updating, and deleting tasks. 
                            The use of modern technologies ensures scalability and responsiveness, making it a versatile and practical solution for effective task organization.</p>
                    
                        <div>
                                <h4>Tech Stack :</h4>
                                <ul>
                                    <li>React Js</li>
                                    <li>Node Js</li>
                                    <li>Express Js</li>
                                    <li>Mongo DB</li>
                                </ul>
                        </div>
                        <button className='container__button' onClick={linktoTodo}>Link to Website</button>
                        <button className='container__button' onClick={linktoTodogithub}>Link to GitHub</button>
                    </div>
                </div>
            </div> 
            {/* end of todo */}

            <div className='project-brainflix'>b
                <div className='container'>
                    <div className='container__left-card'>
                        <img src={TodoImage} alt='todo project image' />
                    </div>
                    <div className="container__right-card">
                        <p>This Todo application seamlessly integrates a user-friendly interface with efficient task management, 
                            providing a smooth experience for creating, updating, and deleting tasks. 
                            The use of modern technologies ensures scalability and responsiveness, making it a versatile and practical solution for effective task organization.</p>
                    
                        <div>
                                <h4>Tech Stack :</h4>
                                <ul>
                                    <li>React Js</li>
                                    <li>Node Js</li>
                                    <li>Express Js</li>
                                    <li>Mongo DB</li>
                                </ul>
                        </div>
                        <button className='container__button' onClick={linktoTodo}>Link to Website</button>
                        <button className='container__button' onClick={linktoTodogithub}>Link to GitHub</button>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    );
}
export default Projects;
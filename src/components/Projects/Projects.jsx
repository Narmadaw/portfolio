import TodoImage from './../../assets/images/todo-image.png';
import InstockImage from './../../assets/images/instock.png';
import BrainFlixImage from './../../assets/images/brainflix.png';
import React from './../../assets/images/tech-stack-icons/react.svg';

import './Projects.scss';

const Projects = () =>{
    const linktoTodo = () =>{
        window.open('https://todobynarmada.netlify.app');
    }

    const linktoTodogithub = () =>{
        window.open('https://github.com/Narmadaw/todo-client');
    }

    const linktoBrainflix = () =>{
        window.open('https://brain-flix-6a9f87740359.herokuapp.com');
    }
    const linktoBrainflixgithub = () =>{
        window.open('https://github.com/Narmadaw/narmada-wijerathne-brainflix.git');
    }
    const linktoInStockgithub = () =>{
        window.open('https://github.com/tmaxwell-96/team-3-instock-client');
    }

    return (
        
        <div id='projects'>

        
        <div  className='projects'>
            <div className='pannel'>
                <h1 className='title'>Projects</h1>
                <hr className='aboutme__h-line' />
            </div>
            <div className='container'>
                <div className='container__left-card'>
                    <img className='container__image' src={TodoImage} alt='todo-project' />
                </div>
                <div className="container__right-card">
                    <h3 className='container__p-title'>Todo List</h3>
                    <p> This Todo application seamlessly integrates a user-friendly interface with efficient task management, 
                        providing a smooth experience for creating, updating, and deleting tasks. 
                        The use of modern technologies ensures scalability and responsiveness, making it a versatile and practical solution for effective task organization.
                    </p>
                    <div>
                        <h4 className='container__p-title'>Tech Stack :</h4>
                        <ul>
                            <li>React Js</li>
                            <li>Node Js</li>
                            <li>Express Js</li>
                            <li>Mongo DB</li>
                        </ul>
                    </div>
                    <div className='container__button-pannel'>
                        <button className='container__button' onClick={linktoTodo}>Link to Website</button>
                        <button className='container__button' onClick={linktoTodogithub}>Link to GitHub</button>
                    </div>
                </div>
            </div> {/* end of todo */}
            
            <div className='container'>
                <div className='container__left-card'>
                    <img className='container__image' src={InstockImage} alt='instock-project' />
                </div>
                <div className="container__right-card">
                    <h3 className='container__p-title'>Instock</h3>
                    <p> Instock is a fullstack inventory management system developed using React and Express. 
                        We utilized Jira Scrum Board for project management and followed the style guide with Figma.
                    </p>
                    <div>
                        <h4 className='container__p-title'>Tech Stack :</h4>
                        <ul>
                            <li>React Js</li>
                            <li>Node Js</li>
                            <li>Express Js</li>
                            <li>Knex Js</li>
                            <li>MySql</li>
                        </ul>
                    </div>
                    <div className='container__button-pannel'>
                        <button className='container__button' onClick={linktoInStockgithub}>Link to GitHub</button>
                    </div>
                    
                </div>
            </div> {/* end of instock */}

            <div className='container'>
                <div className='container__left-card'>
                    <img className='container__image' src={BrainFlixImage} alt='brainflix-project' />
                </div>
                <div className="container__right-card">
                    <h3 className='container__p-title'>BrainFlix</h3>
                    <p> Brainflix is a mini YouTube clone developed using React and Node.js. You have the ability to upload videos and play through a curated video list. 
                        Additionally, you can engage with the community by adding comments or liking others' comments. 
                        Join Brainflix and explore a seamless blend of content creation and interactive viewing experience
                    </p>
                    <div>
                        <h4 className='container__p-title'>Tech Stack :</h4>
                            <ul>
                                <li>React Js</li>
                                <li>Node Js</li>
                                <li>Express Js</li>
                            </ul>
                    </div>
                    <div className='container__button-pannel'>
                        <button className='container__button' onClick={linktoBrainflix}>Link to Website</button>
                        <button className='container__button' onClick={linktoBrainflixgithub}>Link to GitHub</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
    );
}
export default Projects;
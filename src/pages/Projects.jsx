import React from 'react';
import ToggleP from '../components/ToggleP';

const Projects = ({lang,dark}) => {
    
    return (
        <div className='projectsContainer' id='projects'>
            <h1 className={dark? 'projectTitle1':'projectTitle1Light'}>Projects</h1>
            <ToggleP lang={lang} dark={dark}/>
        </div>
    );
};

export default Projects;


import React from 'react';
import ToggleP from '../components/ToggleP';

const Proyectos = ({lang,dark}) => {
    return (
        <div className='projectsContainer' id='projects'>
            <h1 className={dark? 'projectTitle1':'projectTitle1Light'}>Proyectos</h1>
            <ToggleP lang={lang} dark={dark}/>
            
        </div>
    );
};

export default Proyectos;
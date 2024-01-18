import React, { useState } from 'react';
import Toggle from '../components/Toggle';

const Skills = ({lang, dark}) => {
    const [skills, setSkill] = useState(false)
    return (
        <div className='skillsContainer' id='skills'>
         <h1 className={dark? 'skillsTitle' : 'skillsTitleLight'}>{skills ? "Soft skills" : "Technologies"}</h1>
           <div className='techSkillsBox'>
            
                <Toggle estado={skills} setEstado={setSkill} lang={lang} dark={dark}/>
                <div className='sfera'></div>
                <div className='sfera2'></div>
                
            </div> 
        </div>
    );
};

export default Skills;


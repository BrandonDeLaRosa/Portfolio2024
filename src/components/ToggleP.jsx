import React, { useState } from 'react';
import Front from '../components/Front';
import Back from '../components/Back';
import ProfessionalProjects from './ProfessionalProjects';

const ToggleP = ({ lang, dark }) => {
  const [selectedButton, setSelectedButton] = useState('professional');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='togglePCont'>
      <div className='projectSelection'>
        <button
          className={`selection ${selectedButton === 'professional' ? 'active' : ''}`}
          onClick={() => handleButtonClick('professional')}
        >
          {lang? "Professional Projects" : "Proyectos profesionales"}
        </button>
        <button
          className={`selection ${selectedButton === 'front' ? 'active' : ''}`}
          onClick={() => handleButtonClick('front')}
        >
          Front-end
        </button>
        <button
          className={`selection ${selectedButton === 'back' ? 'active' : ''}`}
          onClick={() => handleButtonClick('back')}
        >
          Back-end
        </button>
      </div>

      {selectedButton === 'front' ? (
        <Front lang={lang} dark={dark} />
      ) : selectedButton === 'back' ? (
        <Back lang={lang} dark={dark} />
      ) : (
        <div>
          <ProfessionalProjects lang={lang} dark={dark} />
        </div>
      )}
    </div>
  );
};

export default ToggleP;

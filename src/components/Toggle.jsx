import React from 'react';
import SoftSkills from './SoftSkills';
import Technologies from './Technologies';

const Toggle = ({ estado, setEstado, lang, dark }) => {
    return (
        <div className='toggleBox'>
            {/* <div class="checkbox-wrapper-5">
                <div class="check">
                    <input type="checkbox" id="check-5" onClick={() => setEstado(!estado)} />
                    <label for="check-5"></label>
                </div>
            </div> */}

            <label class="toggle-switch">
                <input type="checkbox" onClick={() => setEstado(!estado)}/>
                    <div class="toggle-switch-background">
                        <div class="toggle-switch-handle"></div>
                    </div>
            </label>


            <div className='techSkill'>
                {estado ? <SoftSkills lang={lang} dark={dark} /> : <Technologies lang={lang} dark={dark}/>}
            </div>

        </div>
    );
};

export default Toggle;

// onClick={() => setEstado(!estado)}
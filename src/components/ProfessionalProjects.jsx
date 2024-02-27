import React, { useState } from 'react';
import inolab from '../gifs/inolab.jpg'
import ecom from '../gifs/eComm.jpg'
import MoreInfoModal from './MoreInfoModal';

const ProfessionalProjects = ({ lang, dark }) => {

    return (
        <div className='animate__animated animate__fadeIn'>
            <h2 className={dark ? 'frontTitle' : 'frontTitleLight'}>{lang ? 'Professional Projects' : 'Proyectos profesionales'}</h2>
            <section className={dark ? 'gifContainer' : 'gifContainerLight'}>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Inolab e-Commerce">Inolab e-Commerce</h3>
                    <a className='gifLink' href="https://inolabecommerce.com/" target="_blank">
                        <img className='gif' src={ecom} alt="" />
                    </a>
                    {/* <div class="overlay">
                        <div class="overlay-content">
                            <h3>Tecnologias</h3>
                            <p>-React js</p>
                            <p>-Node js</p>
                            <p>-Express js</p>
                            <p>-React router / redux</p>
                            <p>-Bootstrap</p>
                            <p>-GraphQL</p>
                        </div>
                    </div> */}
                    {/* <button>More Info</button> */}
                </div>

                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Inolab">{lang ? 'Inolab Web Page' : 'Inolab Página web'}</h3>
                    <a className='gifLink' href="https://inolab.com/citometria/" target="_blank">
                        <img className='gif' src={inolab} alt="" />
                    </a>
                    {/* <div class="overlay">
                        <div class="overlay-content">
                            <h3>Tecnologias</h3>
                            <p>-Vue js</p>
                            <p>-PHP</p>
                            <p>-Bootstrap</p>
                        </div>
                    </div> */}
                    {/* <button>More Info</button> */}
                </div>
            </section>


        </div>
    );
};

export default ProfessionalProjects;
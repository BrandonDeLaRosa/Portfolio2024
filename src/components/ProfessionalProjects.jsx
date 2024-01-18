import React from 'react';
import inolab from '../gifs/inolab.jpg'
import ecom from '../gifs/eComm.jpg'

const ProfessionalProjects = ({ lang,dark }) => {

    return (
        <div className='animate__animated animate__fadeIn'>
                <h2 className={dark? 'frontTitle' : 'frontTitleLight'}>{lang ? 'Professional Projects' : 'Proyectos profesionales'}</h2>
            <section className={dark? 'gifContainer' : 'gifContainerLight'}>

                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Inolab e-Commerce">Inolab e-Commerce</h3>
                    <a className='gifLink' href="https://inolabecommerce.com/" target="_blank"> <img className='gif' src={ecom} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Inolab">{lang ? 'Inolab Web Page' : 'Inolab Página web'}</h3>
                    <a className='gifLink' href="https://inolab.com/citometria/" target="_blank"><img className='gif' src={inolab} alt="" /></a>
                </div>
              
            </section>
        </div>
    );
};

export default ProfessionalProjects;
import React from 'react';
import eComm from '../gifs/gifsBackEnd/eComm.gif'
import eCommCode from '../gifs/gifsBackEnd/Ecom.gif'
import foroCode from '../gifs/gifsBackEnd/foro.gif'
import rest from '../gifs/gifsBackEnd/rest.gif'

const Back = ({lang,dark}) => {
    return (
        <div className='animate__animated animate__fadeIn'>
                <h2 className={dark? 'frontTitle' : 'frontTitleLight'}>{lang ? 'Back-End Projects' : 'Proyectos Back-End'}</h2>
            <section className={dark? 'gifContainer' : 'gifContainerLight'}>

                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Rick&Morty">eCommerce Diagram</h3>
                    <a className='gifLink' href="https://dbdiagram.io/d/641b820d296d97641d8a0c68" target="_blank"> <img className='gif' src={eComm} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Pokedex">eCommerce CODE</h3>
                    <a className='gifLink' href="https://github.com/BrandonDeLaRosa/nodeJsEntregableFinal" target="_blank"><img className='gif' src={eCommCode} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="eCommerce">Forum Diagram</h3>
                    <a className='gifLink' href="https://dbdiagram.io/d/63feaafa296d97641d847b37" target="_blank"><img className='gif' src={rest} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Weather">Forum CODE</h3>
                    <a className='gifLink' href="https://github.com/BrandonDeLaRosa/nodeJsEntregable4" target="_blank" ><img className='gif' src={foroCode} alt="" /></a>
                </div>
            </section>
        </div>
    );
};

export default Back;
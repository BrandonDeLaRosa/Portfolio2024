import React from 'react';
import rick from '../gifs/rickMorty.gif'
import weather from '../gifs/weather.gif'
import pokedex from '../gifs/pokedex.gif'
import ecom from '../gifs/ecom.gif'

const Front = ({ lang,dark }) => {

    return (
        <div className='animate__animated animate__fadeIn'>
                <h2 className={dark? 'frontTitle' : 'frontTitleLight'}>{lang ? 'Front-End Projects' : 'Proyectos Front-End'}</h2>
            <section className={dark? 'gifContainer' : 'gifContainerLight'}>

                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Rick&Morty">Rick&Morty</h3>
                    <a className='gifLink' href="https://benevolent-elf-de37aa.netlify.app/" target="_blank"> <img className='gif' src={rick} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Pokedex">Pokedex</h3>
                    <a className='gifLink' href="https://coruscating-baklava-dc58d4.netlify.app/" target="_blank"><img className='gif' src={pokedex} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="eCommerce">eCommerce</h3>
                    <a className='gifLink' href="https://main--resilient-klepon-9fd703.netlify.app/#/" target="_blank"><img className='gif' src={ecom} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Weather">Weather</h3>
                    <a className='gifLink' href="https://soft-strudel-34df4f.netlify.app/" target="_blank" ><img className='gif' src={weather} alt="" /></a>
                </div>
            </section>
        </div>
    );
};

export default Front;
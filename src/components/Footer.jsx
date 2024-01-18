import React from 'react';
import { Link, ScrollLink } from 'react-scroll';
import footerLogo from '../img/logoNbG2.png'

const Footer = ({ lang }) => {
    return (
        <div className='footer'>
            <img className='footerLogo' src={footerLogo} alt="" />
            <section className='menuFoot'>
                <Link to='home' smooth={true} duration={1000}>
                    <button className='menuOpt'>{lang ? "About me" : "Sobre mi"}</button>
                </Link>
                <Link to='skills' smooth={true} duration={1000}>
                    <button className='menuOpt'>{lang ? "Skills" : "Habilidades"}</button>
                </Link>
                <Link to='projects' smooth={true} duration={1000}>
                    <button className='menuOpt'>{lang ? "Projects" : " Proyectos"}</button>
                </Link>
            </section>
            <p className='footerTxt'>Brandon De La Rosa 2023. All Rights Reserved</p>
        </div>
    );
};

export default Footer;
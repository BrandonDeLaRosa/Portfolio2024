import React from 'react';
import html from '../img/skillsImgs/html-5.png'
import css from '../img/skillsImgs/css-3.png'
// import js from '../img/skillsImgs/jsLogo.png'
import js from '../img/skillsImgs/java-script.png'
import git from '../img/skillsImgs/gitLogo.png'
// import git from '../img/skillsImgs/git-logo.png'
import github from '../img/skillsImgs/github.png'
import react from '../img/skillsImgs/structure.png'
import graph from '../img/skillsImgs/graph.png'
import api from '../img/skillsImgs/apiRest.png'
// import react from '../img/skillsImgs/react.png'
import redux from '../img/skillsImgs/redux.png'
import node from '../img/skillsImgs/nodeJsLogo.png'
import express from '../img/skillsImgs/xpressjs.png'
import sequelize from '../img/skillsImgs/sequelizepx.png'
import postgres from '../img/skillsImgs/postgreSQLLogo.png'
// import bootstrap from '../img/skillsImgs/bootstrapLogo.png'
import bootstrap from '../img/skillsImgs/btsLogo.png'
import  ts from '../img/skillsImgs/TSLogo.png'
import  vue from '../img/skillsImgs/vuejs.png'

import router from '../img/skillsImgs/router.webp'

const Technologies = ({lang,dark}) => {
    return (
        <div className={dark? 'technologies animate__animated animate__fadeIn' : 'technologiesLight animate__animated animate__fadeIn'}>


            <div className='imgText'>
                <img className='techImgs' src={html} alt="" />
                <p classname='techTxt'>HTML 5</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={css} alt="" />
                <p classname='techTxt'>CSS 3</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={js} alt="" />
                <p classname='techTxt'>JAVASCRIPT</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={react} alt="" />
                <p classname='techTxt'>REACT JS</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={vue} alt="" />
                <p classname='techTxt'>VUE JS</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={graph} alt="" />
                <p classname='techTxt'>GraphQL</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={api} alt="" />
                <p classname='techTxt'>API REST</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={router} alt="" />
                <p classname='techTxt'>REACT ROUTER</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={redux} alt="" />
                <p classname='techTxt'>REACT REDUX</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={node} alt="" />
                <p classname='techTxt'>NODE JS</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={express} alt="" />
                <p classname='techTxt'>EXPRESS JS</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={sequelize} alt="" />
                <p classname='techTxt'>SEQUELIZE</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={postgres} alt="" />
                <p classname='techTxt'>POSTGRE SQL</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={git} alt="" />
                <p classname='techTxt'>GIT</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={github} alt="" />
                <p classname='techTxt'>GITHUB</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={bootstrap} alt="" />
                <p classname='techTxt'>BOOTSTRAP</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={ts} alt="" />
                <p classname='techTxt'>TYPESCRIPT</p>
                <p className='process' data-text={lang? "In process..." : "En Proceso..."}>{lang? "In process..." : "En Proceso..."}</p>
            </div>

            {/* <div className='imgText'>
                <img className='techImgs' src={angular} alt="" />
                <p classname='techTxt'>ANGULAR</p>
                <p className='process' data-text={lang? "In process..." : "En Proceso..."}>{lang? "In process..." : "En Proceso..."}</p>
            </div>

            <div className='imgText'>
                <img className='techImgs' src={python} alt="" />
                <p classname='techTxt'>PYTHON</p>
                <p className='process' data-text={lang? "In process..." : "En Proceso..."}>{lang? "In process..." : "En Proceso..."}</p>
            </div> */}
        </div>
    );
};

export default Technologies;
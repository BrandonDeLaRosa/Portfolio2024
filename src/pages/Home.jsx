import React from 'react';
import Typewriter from 'typewriter-effect';
import cv from '../components/cv.pdf'


const Home = ({dark}) => {
    return (
        <div className='homeContainer' id='home'>
            
            <div className='homeTxt1 animate__animated animate__fadeIn'>
                <h1 className='homeTitle'>Hello, i am!</h1>
            </div>

            <section className={dark? 'typeWriter  animate__animated animate__fadeIn' : 'typeWriterLight animate__animated animate__fadeIn'}>

                <Typewriter
                    options={{
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Brandon De La Rosa.")
                        .pauseFor(2000)
                        .deleteAll()
                            .typeString('Full-stack web developer.')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />

            </section>

            <section className='about animate__animated animate__fadeIn'>

                <button className='dwnTp'><a className='aDwnTp' download="Cv BrandonDeLaRosa" href={cv}>Download CV</a></button>
                
                <div className='homeTxt2'>
                    <h1 className={dark? 'homeTitle2' : 'homeTitle2Light'}>About me</h1>
                    <p className='homeTxt3'>
                        Full stack web developer,
                        Passionate about music, videogames and sports.
                        Proactive, self-taught, creative.
                        In constant search of growth
                        personal and professional.
                    </p>

                </div>
            </section>
            
            <section className='extras'>
                <div className={dark? 'xtraBx animate__animated animate__fadeInLeft' : 'xtraBxLight animate__animated animate__fadeInLeft'}>
                    <i class="fa-regular fa-handshake"></i>
                    <p><b>Languages</b></p>
                    <p className='xBA'>English C 1 / Spanish Native</p>
                </div>
                <div className={dark? 'xtraBx animate__animated animate__fadeInRight' : 'xtraBxLight animate__animated animate__fadeInRight'}>
                    <i class="fa-brands fa-medapps"></i>
                    <p className='exp'><b>Experience</b></p>
                    <p className='xBA1'>2 years </p> <br />
                    {/* <p className='xBA2'>1 months</p> */}
                </div>
            </section>        

            
        </div>
    );
};

export default Home;

/*


            {/* <section>
                <div><i class="fa-light fa-face-exhaling"></i></div>
                <div></div>
            </section>        



*/
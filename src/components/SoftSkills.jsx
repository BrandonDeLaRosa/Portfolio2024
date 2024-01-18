import React from 'react';

const SoftSkills = ({ lang,dark }) => {
    return (
        <div className='list'>

            <section className={dark? 'secList' : 'secListLight'}>
                <div className='skillbox'>
                    <i class="fa-solid fa-right-long "></i>
                    <h3 className='listItem' data-text={lang ? "Proactive" : "Proactivo"}  >{lang ? "Proactive" : "Proactivo"}</h3>
                </div>
                <div className='skillbox'>
                    <i class="fa-solid fa-right-long"></i>
                    <h3 className='listItem' data-text={lang ? "Persevering" : "Perseverante"}>{lang ? "Persevering" : "Perseverante"}</h3>
                </div>
                <div className='skillbox'>
                    <i class="fa-solid fa-right-long"></i>
                    <h3 className='listItem' data-text={lang ? "Assertive" : "Asertivo"}>{lang ? "Assertive" : "Asertivo"}</h3>
                </div>
                <div className='skillbox'>
                    <i class="fa-solid fa-right-long"></i>
                    <h3 className='listItem' data-text={lang ? "Attitude" : "Actitud"}>{lang ? "Attitude" : "Actitud"}</h3>
                </div>
                <div className='skillbox'>
                    <i class="fa-solid fa-right-long"></i>
                    <h3 className='listItem' data-text={lang ? "Gentle" : "Amable"}>{lang ? "Gentle" : "Amable"}</h3>
                </div>
                <div className='skillbox'>
                    <i class="fa-solid fa-right-long"></i>
                    <h3 className='listItem' data-text={lang ? "Empathic" : "Empatico"}>{lang ? "Empathic" : "Empatico"}</h3>
                </div>
            </section>

                <section className={dark? 'secList' : 'secListLight'}>
                    <div className='skillbox'>
                        <i class="fa-solid fa-right-long"></i>
                        <h3 className='listItem' data-text={lang ? "Adaptability" : "Adaptabilidad"}>{lang ? "Adaptability" : "Adaptabilidad"}</h3>
                    </div>
                    <div className='skillbox'>
                        <i class="fa-solid fa-right-long"></i>
                        <h3 className='listItem' data-text={lang ? "Autodidact" : "Autodidacta"}>{lang ? "Autodidact" : "Autodidacta"}</h3>
                    </div>
                    <div className='skillbox'>
                        <i class="fa-solid fa-right-long"></i>
                        <h3 className='listItem' data-text={lang ? "Organized" : "Organizado"}>{lang ? "Organized" : "Organizado"}</h3>
                    </div>
                    <div className='skillbox'>
                        <i class="fa-solid fa-right-long"></i>
                        <h3 className='listItem' data-text={lang ? "Responsible" : "Responsable"}>{lang ? "Responsible" : "Responsable"}</h3>
                    </div>
                    <div className='skillbox'>
                        <i class="fa-solid fa-right-long"></i>
                        <h3 className='listItem' data-text={lang ? "Teamwork" : "Colaborativo"}>{lang ? "Teamwork" : "Colaborativo"}</h3>
                    </div>
                    <div className='skillbox'>
                        <i class="fa-solid fa-right-long"></i>
                        <h3 className='listItem' data-text={lang ? "Reliable" : "Confiable"}>{lang ? "Reliable" : "Confiable"}</h3>
                    </div>
                </section>
        </div>
    );
};

export default SoftSkills;
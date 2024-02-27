import React, { useRef, useState } from 'react';
import cv from '../components/cv.pdf';
import emailjs from '@emailjs/browser';

const Contacto = ({ dark }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(form.current);
            await axios.post('https://api.emailjs.com/api/v1.0/email/send-form', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                params: {
                    service_id: 'service_qdqbjoa',
                    template_id: 'template_gvywpeh',
                    user_id: 'QaoZuJq5ETT2r1MbN'
                }
            });
            console.log("Email sent successfully");
            alert("Your message was sent successfully");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error, please try again.");
        }

        setName("");
        setEmail("");
        setMessage("");
    };
      
    return (
        <form className='contactContainer' id='contact' ref={form} onSubmit={sendEmail}>
            <h1 className={dark? 'contactTitle':'contactTitleLight'}>Contactame</h1>

            <div className='contactBox'>

                <div class="form-control">
                    <div class="inputbox" id='inputName'>
                        <input required="required" type="text" name='to_name' 
                        value={name} onChange={(e) => setName(e.target.value)} />
                        <span>Nombre</span>
                        <i></i>
                    </div>
                </div>

                <div class="form-control">
                    <div class="inputbox" id='inputEmail'>
                        <input required="required" type="text" name='from_name' 
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span>Correo</span>
                        <i></i>
                    </div>
                </div>
                <textarea className={dark ? 'formText' : 'lightFormText'} name="message" rows={7} cols={35} placeholder='   Hola, trabajemos juntos...' required
                value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button className={dark?'submit':'submitLight'} type="submit">
                    Enviar
                </button>

                <section className='contactLink'>
                    <a href="https://www.linkedin.com/in/brandon-de-la-rosa-3b0870259/" target="_blank"><h6></h6><i class="fa-brands fa-linkedin-in"></i></a>
                    <a download="Cv BrandonDeLaRosa" href={cv}><i class="fa-regular fa-file"></i></a>
                    <a href="https://github.com/BrandonDeLaRosa" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="https://wa.me/5522979911?text=Hola%20me%20interesa%20ponerme%20en%20contacto%20contigo. " target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </section>
                
            </div>
        </form>
    );
};

export default Contacto;
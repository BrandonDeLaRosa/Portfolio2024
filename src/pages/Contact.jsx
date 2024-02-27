import React, { useRef, useState } from 'react';
import cv from '../components/cv.pdf';
import emailjs from '@emailjs/browser';

const Contact = ({ dark }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm('service_qdqbjoa', 'template_gvywpeh', form.current, 'QaoZuJq5ETT2r1MbN');
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
        <form ref={form} onSubmit={sendEmail} className='contactContainer' id='contact' >
            <h1 className={dark ? 'contactTitle' : 'contactTitleLight'}>Contact me</h1>
            <div className='contactBox'>
                <div className="form-control">
                    <div className="inputbox" id='inputName'>
                        <input className='inputWidth' required="required" type="text" name='to_name'
                            value={name} onChange={(e) => setName(e.target.value)} />
                        <span>Name</span>
                        <i></i>
                    </div>
                </div>
                <div className="form-control">
                    <div className="inputbox" id='inputEmail'>
                        <input className='inputWidth' required="required" type="email" name='from_name'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span>Email</span>
                        <i></i>
                    </div>
                </div>
                <textarea className={dark ? 'formText' : 'lightFormText'} name="message" rows={7} cols={35} placeholder='   Hey! let´s work together...' required
                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className={dark ? 'submit' : 'submitLight'} type="submit">
                    Submit
                </button>
                <section className='contactLink'>
                    <a href="https://www.linkedin.com/in/brandon-de-la-rosa-3b0870259/" target="_blank"><h6></h6><i className="fa-brands fa-linkedin-in"></i></a>
                    <a download="Cv BrandonDeLaRosa" href={cv}><i className="fa-regular fa-file"></i></a>
                    <a href="https://github.com/BrandonDeLaRosa" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://wa.me/5522979911?text=Hola%20me%20interesa%20ponerme%20en%20contacto%20contigo. " target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                </section>
            </div>
        </form>
    );
};

export default Contact;

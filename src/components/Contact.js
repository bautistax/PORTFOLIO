import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // Cambia "tudireccion@gmail.com" por tu dirección de correo electrónico
  const email = 'jbautistabauza@gmail.com';
  const subject = 'Mensaje para ti'; // Asunto del correo
  const body = 'Escribe tu mensaje aquí'; // Cuerpo del correo

  // Crear el enlace "mailto" con la dirección de correo electrónico y el asunto
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  // Enlace específico de Gmail para abrir el cliente de correo con un mensaje predeterminado
  const gmailLink = `https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new&to=${encodeURIComponent(
    email
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleGmailClick = (e) => {
    e.preventDefault();
    const isGmail = /gmail\.com/.test(email);
    const mailtoLink = isGmail ? gmailLink : `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
  };



  // Cambia "tu-número-de-WhatsApp" por tu número de WhatsApp (incluyendo el código de país)
  const phoneNumber = '+542616471133';
  const message = '¡Hola!'; // Puedes personalizar el mensaje predeterminado

  // Enlace de WhatsApp para abrir el cliente de WhatsApp con un mensaje predeterminado
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  const handleWhatsappClick = (e) => {
    e.preventDefault();
    window.open(whatsappLink, '_blank');
  };


  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!
              </h2>
            </div>

          </motion.div>

            {/* Container for icons */}
            <motion.div variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex  items-center'>
            <div className='flex items-center'>
              <a href='https://www.linkedin.com/in/bautista-bauz%C3%A1-8ba37325b/' className='mx-4 text-gray-500 hover:text-blue-700'>
                <FaLinkedin className='text-6xl' />
              </a>

              <a href={whatsappLink} onClick={handleWhatsappClick} className='mx-4 text-gray-500 hover:text-green-500'>
                <FaWhatsapp className='text-6xl' />
              </a>

              <a href={mailtoLink} onClick={handleGmailClick} className="mx-4 text-gray-500 hover:text-red-700">
                <FaEnvelope className="text-6xl" />
              </a>
            </div>
            </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Contact;

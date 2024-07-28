import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../../client';
import './Footer.scss';
import { IoIosMail } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: username,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

      const templateParams = {
        from_name: contact.name,
        from_email: contact.email,
        message: contact.message,
      };
      setLoading(true);
      emailjs.send('service_rx2fgjb', 'template_empatzr', templateParams, 'IR8mmuURfstZEi51Q')
      .then((response) => {
        setLoading(false);
        toast.success("Got your message, Thanks!", {
          autoClose: 3000
        });
      }, (error) => {
        setLoading(false);
        toast.error("Oops! Please try again.", {
          autoClose: 3000
        });
      });
  };

  return (
    <>
      <h2 className="head-text">Gratitude in every byte – let's thrive together!</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <IoIosMail />
          <a href="mailto:ram8176970175@gmail.com"  className="p-text">ram8176970175@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <FaMobile />
          <p className="p-text">+91 8299565210</p>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
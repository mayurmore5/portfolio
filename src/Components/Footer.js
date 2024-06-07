import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xxx', 'template_yyy', e.target, 'user_zzz')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
      <div className="collaborate-section">
        <h2>Let's Collaborate</h2>
        <p>If you'd like to work together on a project or have any questions, feel free to reach out through my social media channels or by using the contact form.</p>
        <div className="social-links">
          <a href="https://github.com/mayurmore5" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="www.linkedin.com/in/mayurmore5" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://x.com/Mayurm517" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer"><FaMedium size={30} /></a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

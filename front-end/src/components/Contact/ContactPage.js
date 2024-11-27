import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

import './ContactPage.css';


const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_nq90eqi';
    const templateId = 'template_a5u5ihp';
    const publicKey = '8c6K-HxnY-eb5_DlV';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: formData["name"],
      from_email: formData["email"],
      to_name: 'Bill',
      message: formData["message"],
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Email sent successfully');
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((error) => {
        alert('Error sending email');
      });
    }

  return (
    <div className='contact-page'>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group" id = "name">
            <label htmlFor="name"> Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} required />
          </div>
          <div className="form-group" id = "email">
            <label htmlFor="email"> Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-group" id = "message">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="10" cols="50" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button className="form-submit-btn" id = "form-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

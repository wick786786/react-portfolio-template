import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box className="contact-info">
            <div className="contact-item">
              <EmailIcon />
              <span>thesatyam786786@gmail.com</span>
            </div>
            <div className="contact-item">
              <PhoneIcon />
              <span>+91 9984024764</span>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;

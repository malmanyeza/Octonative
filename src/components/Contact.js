import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <ContactContainer id="contact">
      <Helmet>
        <title>Contact Us | Octonative - Get in Touch with Our Zimbabwean Tech Experts</title>
        <meta name="description" content="Get in touch with Octonative, a Zimbabwe-based mobile app development company, to discuss your project and tech needs." />
        <meta name="keywords" content="contact Octonative, mobile app development Zimbabwe, IT consulting Zimbabwe, tech experts Zimbabwe" />
      </Helmet>
      <h1>Contact Octonative</h1>
      <p>If you’re looking to develop innovative mobile apps, custom software, or get expert tech consulting, get in touch with Octonative today. We’re here to help Zimbabwean businesses thrive.</p>
      <ContactForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

// Styled Components
const ContactContainer = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  input,
  textarea {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
  textarea {
    height: 150px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;


const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #6a1b9a;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #ff4081;
  }
`;

export default Contact;

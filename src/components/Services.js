import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <Helmet>
            <title>Services | Octonative - Mobile App & Web Development for Zimbabwean Startups</title>
            <meta name="description" content="Octonative offers mobile app development, web solutions, and tech consulting services specifically for Zimbabwean startups and businesses." />
            <meta name="keywords" content="mobile app development, web development, Zimbabwean startups, tech consulting, IT solutions, React Native, cross-platform app development" />
        </Helmet>
        <h1>Our Services</h1>
        <p>Octonative provides top-notch mobile app development, web development, and IT consulting services for Zimbabwean startups, SMEs, and large businesses. Whether you’re looking to develop a mobile app or streamline your business operations with cutting-edge software, we’ve got you covered.</p>
        <ul>
            <li><strong>Mobile App Development:</strong> Cross-platform apps using React Native, built to scale with your business.</li>
            <li><strong>Web Development:</strong> Custom websites and web applications tailored for your business needs.</li>
            <li><strong>IT Consulting:</strong> Expert advice to help your business leverage technology for growth and efficiency.</li>
        </ul>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ServiceItem = styled.div`
  width: 250px;
  margin: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;



export default Services;

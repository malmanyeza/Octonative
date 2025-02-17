import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <AboutContainer id="about">
        <Helmet>
            <title>About Us | Octonative - Empowering Zimbabwean Businesses</title>
            <meta name="description" content="Learn about Octonative, a Zimbabwe-based mobile app development and software solutions company, providing innovative solutions for local businesses." />
            <meta name="keywords" content="Octonative, mobile app development, software solutions, Zimbabwe, tech consulting, business empowerment, React Native, local tech startups" />
        </Helmet>
        <h1>About Octonative</h1>
        <p>At Octonative, we specialize in building mobile apps and custom software solutions designed to help businesses thrive in Zimbabwe and across Africa. Our team of developers and tech consultants is dedicated to delivering high-quality solutions that align with your goals.</p>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;


export default AboutUs;

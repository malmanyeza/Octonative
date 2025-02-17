import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Octonative. All Rights Reserved.</p>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #6a1b9a;
  color: white;
  text-align: center;
`;

export default Footer;

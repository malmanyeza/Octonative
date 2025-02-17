// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  z-index: 1000;  /* Ensure it appears on top */
  
  
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    padding: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  
  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

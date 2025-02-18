// components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
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
    font-family: 'Poppins', sans-serif;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }

    &.active {
      background: rgba(255, 255, 255, 0.4);  /* Active link background */
      color: #ff7f50; /* Active link text color */
      transform: scale(1.1); /* Ensures it doesn't shrink */
      box-shadow: 0 0 10px rgba(255, 127, 80, 0.5); /* Optional shadow for emphasis */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavLinks>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

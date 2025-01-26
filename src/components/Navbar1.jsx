import React from "react";
import styled from "styled-components";

const Navbar1 = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink href="#">Home</NavLink></NavItem>
        <NavItem><NavLink href="#">About</NavLink></NavItem>
        <NavItem><NavLink href="#">Services</NavLink></NavItem>
        <NavItem><NavLink href="#">Contact</NavLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar1;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  height: 5vh;
  padding: 10px 0;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 15px;
  transition: background-color 0.3s ease, border-radius 0.3s ease;

  &:hover {
    background-color: #575757;
    border-radius: 5px;
  }
`;

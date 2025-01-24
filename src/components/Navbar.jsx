import React from 'react';
import styled from 'styled-components';
import Image from '../assets/Vector.png';


const Navbar = () => {
  return (
    <NavbarContainer>
      
      <Logo src={Image} ></Logo>

      
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Products</NavLink>
        <NavLink>Blogs</NavLink>
      </NavLinks>

      <SearchIcon>🔍</SearchIcon>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  display: flex;
  height: 25px;
  /* width: 25px; */
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: black;

  &:hover {
    color: gray;
  }
`;

const SearchIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;



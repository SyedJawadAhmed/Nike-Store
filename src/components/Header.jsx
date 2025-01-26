import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Menu } from "lucide-react"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    background-color: #f8f9fa;
    transition: left 0.3s ease-in-out;
    z-index: 1000;
  }
`

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <HeaderContainer>
      <Logo>Saylani Microfinance</Logo>
      <MenuButton onClick={() => setIsNavOpen(!isNavOpen)}>
        <Menu />
      </MenuButton>
      <Nav isOpen={isNavOpen}>
        <NavList>
          <li>
            <StyledLink to="/" onClick={() => setIsNavOpen(false)}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/calculator" onClick={() => setIsNavOpen(false)}>
              Loan Calculator
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/register" onClick={() => setIsNavOpen(false)}>
              Apply Now
            </StyledLink>
          </li>
        </NavList>
      </Nav>
    </HeaderContainer>
  )
}

export default Header


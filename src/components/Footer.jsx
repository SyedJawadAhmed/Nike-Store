import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Saylani Microfinance. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer


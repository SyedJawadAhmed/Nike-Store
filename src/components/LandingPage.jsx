import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HeroSection = styled.div`
  text-align: center;
  padding: 50px 0;
`

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #45a049;
  }
`

const LoanCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 50px;
`

const CategoryCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin: 0 auto 20px;
`

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: #2196F3;
  margin: 0 auto 20px;
`

const LandingPage = () => {
  return (
    <div>
      <HeroSection>
        <Title>Saylani Welfare Microfinance Program</Title>
        <Subtitle>Empowering communities through accessible financial support</Subtitle>
        <CTAButton to="/calculator">Calculate Your Loan</CTAButton>
      </HeroSection>
      <LoanCategories>
        <CategoryCard>
          <Circle />
          <h3>Wedding Loans</h3>
          <p>Up to PKR 5 Lakh for 3 years</p>
        </CategoryCard>
        <CategoryCard>
          <Square />
          <h3>Home Construction Loans</h3>
          <p>Up to PKR 10 Lakh for 5 years</p>
        </CategoryCard>
        <CategoryCard>
          <Circle />
          <h3>Business Startup Loans</h3>
          <p>Up to PKR 10 Lakh for 5 years</p>
        </CategoryCard>
        <CategoryCard>
          <Square />
          <h3>Education Loans</h3>
          <p>Based on requirement for 4 years</p>
        </CategoryCard>
      </LoanCategories>
    </div>
  )
}

export default LandingPage


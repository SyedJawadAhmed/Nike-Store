import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import LandingPage from "./components/LandingPage"
import LoanCalculator from "./components/LoanCalculator"
import UserRegistration from "./components/UserRegistration"
import UserDashboard from "./components/UserDashboard"
import AdminDashboard from "./components/AdminDashboard"
import Header from "./components/Header"
import Footer from "./components/Footer"

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/calculator" element={<LoanCalculator />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App


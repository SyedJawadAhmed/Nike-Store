import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase"

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const WelcomeMessage = styled.h2`
  margin-bottom: 20px;
`

const LoanStatus = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`

const DocumentUpload = styled.div`
  margin-top: 20px;
`

const UserDashboard = () => {
  const [user, setUser] = useState(null)
  const [loans, setLoans] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth()
        const user = auth.currentUser
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid))
          if (userDoc.exists()) {
            setUser(userDoc.data())
          }

          const loansSnapshot = await getDocs(query(collection(db, "loans"), where("userId", "==", user.uid)))
          const loansData = loansSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          setLoans(loansData)
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <DashboardContainer>
      {user && <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>}
      {loans.map((loan) => (
        <LoanStatus key={loan.id}>
          <h3>Loan Status: {loan.status}</h3>
          <p>Loan Type: {loan.loanType}</p>
          <p>Amount: PKR {loan.amount}</p>
        </LoanStatus>
      ))}
      <DocumentUpload>
        <h3>Upload Documents</h3>
        <p>Please upload any additional documents required for your loan application.</p>
        {/* Add file upload component here */}
      </DocumentUpload>
    </DashboardContainer>
  )
}

export default UserDashboard


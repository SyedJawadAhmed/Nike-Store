import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { db, functions } from "../firebase"
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore"
import { httpsCallable } from "firebase/functions"

const DashboardContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const FilterSection = styled.div`
  margin-bottom: 20px;
`

const ApplicationList = styled.div`
  display: grid;
  gap: 20px;
`

const ApplicationCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
`

const ActionButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const AdminDashboard = () => {
  const [filter, setFilter] = useState("all")
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const loansSnapshot = await getDocs(collection(db, "loans"))
        const loansData = await Promise.all(
          loansSnapshot.docs.map(async (doc) => {
            const loan = { id: doc.id, ...doc.data() }
            const userDoc = await getDoc(doc(db, "users", loan.userId))
            loan.userName = userDoc.exists() ? userDoc.data().name : "Unknown"
            return loan
          }),
        )
        setApplications(loansData)
      } catch (error) {
        console.error("Error fetching applications:", error)
      }
    }

    fetchLoans()
  }, [])

  const handleStatusChange = async (loanId, newStatus) => {
    try {
      await updateDoc(doc(db, "loans", loanId), { status: newStatus })

      // Use Firebase Cloud Function to send status update email
      const sendStatusUpdateEmail = httpsCallable(functions, "sendStatusUpdateEmail")
      await sendStatusUpdateEmail({ loanId, newStatus })

      setApplications(applications.map((app) => (app.id === loanId ? { ...app, status: newStatus } : app)))
    } catch (error) {
      console.error("Error updating loan status:", error)
    }
  }

  const filteredApplications =
    filter === "all" ? applications : applications.filter((app) => app.status.toLowerCase() === filter)

  return (
    <DashboardContainer>
      <h2>Admin Dashboard</h2>
      <FilterSection>
        <label htmlFor="filter">Filter by status: </label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </FilterSection>
      <ApplicationList>
        {filteredApplications.map((app) => (
          <ApplicationCard key={app.id}>
            <h3>{app.userName}</h3>
            <p>Loan Type: {app.loanType}</p>
            <p>Amount: PKR {app.amount}</p>
            <p>Status: {app.status}</p>
            <ActionButton onClick={() => handleStatusChange(app.id, "approved")}>Approve</ActionButton>
            <ActionButton onClick={() => handleStatusChange(app.id, "rejected")}>Reject</ActionButton>
          </ApplicationCard>
        ))}
      </ApplicationList>
    </DashboardContainer>
  )
}

export default AdminDashboard


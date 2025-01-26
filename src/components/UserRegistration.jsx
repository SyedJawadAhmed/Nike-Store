import React, { useState } from "react"
import styled from "styled-components"
import { auth, db, functions } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { httpsCallable } from "firebase/functions"

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`

const ErrorMessage = styled.p`
  color: red;
`

const UserRegistration = () => {
  const [cnic, setCnic] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, "temporaryPassword")
      const user = userCredential.user

      await setDoc(doc(db, "users", user.uid), {
        cnic,
        email,
        name,
      })

      // Use Firebase Cloud Function to send email
      const sendWelcomeEmail = httpsCallable(functions, "sendWelcomeEmail")
      await sendWelcomeEmail({ email, name })

      alert("Registration successful! Please check your email for further instructions.")
    } catch (error) {
      setError("An error occurred during registration. Please try again.")
      console.error(error)
    }
  }

  return (
    <FormContainer>
      <h2>User Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="CNIC" value={cnic} onChange={(e) => setCnic(e.target.value)} required />
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Button type="submit">Register</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormContainer>
  )
}

export default UserRegistration


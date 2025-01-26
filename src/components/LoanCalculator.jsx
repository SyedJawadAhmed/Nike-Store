import React, { useState } from "react"
import styled from "styled-components"
import { functions } from "../firebase"
import { httpsCallable } from "firebase/functions"

const CalculatorContainer = styled.div`
  max-width: 500px;
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

const Label = styled.label`
  font-weight: bold;
`

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
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

const Result = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
`

const LoanCalculator = () => {
  const [loanType, setLoanType] = useState("")
  const [amount, setAmount] = useState("")
  const [period, setPeriod] = useState("")
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const calculateLoan = httpsCallable(functions, "calculateLoan")
      const response = await calculateLoan({
        loanType,
        amount: Number.parseFloat(amount),
        period: Number.parseFloat(period),
      })
      setResult(response.data)
    } catch (error) {
      console.error("Error calculating loan:", error)
      setResult(null)
    }
  }

  return (
    <CalculatorContainer>
      <h2>Loan Calculator</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="loanType">Loan Type</Label>
          <Select id="loanType" value={loanType} onChange={(e) => setLoanType(e.target.value)} required>
            <option value="">Select a loan type</option>
            <option value="personal">Personal Loan</option>
            <option value="business">Business Loan</option>
            <option value="education">Education Loan</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="amount">Loan Amount (PKR)</Label>
          <Input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="period">Loan Period (Years)</Label>
          <Input type="number" id="period" value={period} onChange={(e) => setPeriod(e.target.value)} required />
        </div>
        <Button type="submit">Calculate</Button>
      </Form>
      {result && (
        <Result>
          <h3>Loan Calculation Result</h3>
          <p>Total Amount to be Paid: PKR {result.totalAmount.toFixed(2)}</p>
          <p>Monthly Payment: PKR {result.monthlyPayment.toFixed(2)}</p>
        </Result>
      )}
    </CalculatorContainer>
  )
}

export default LoanCalculator


import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
  }
`;

const SmallInput = styled(Input)`
  width: 100%;
  padding: 0.8rem;
  max-width: 372px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
  }
`;

const ErrorText = styled.p`
  font-size: 0.85rem;
  color: #ff4d4d;
  margin-top: 0.3rem;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoanForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    loanPeriod: "",
    initialDeposit: "",
    loanAmount: "",
  });

  const [errors, setErrors] = useState({});

  const categories = ["Home Loan", "Car Loan", "Personal Loan", "Education Loan"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.category) tempErrors.category = "Category is required.";
    if (!/^[0-9]{1,2}$/.test(formData.loanPeriod))
      tempErrors.loanPeriod = "Loan period must be up to 2 digits.";
    if (!/^[0-9]{1,9}$/.test(formData.initialDeposit))
      tempErrors.initialDeposit = "Initial deposit must be up to 9 digits.";
    if (!/^[0-9]{1,10}$/.test(formData.loanAmount))
      tempErrors.loanAmount = "Loan amount must be up to 10 digits.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ category: "", loanPeriod: "", initialDeposit: "", loanAmount: "" });
    }
  };

  return (
    <FormContainer>
      <Title>Loan Application Form</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Select Category</Label>
          <Select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">-- Select a Category --</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </Select>
          {errors.category && <ErrorText>{errors.category}</ErrorText>}
        </div>

        <div>
          <Label>Loan Period (in months)</Label>
          <SmallInput
            type="text"
            name="loanPeriod"
            value={formData.loanPeriod}
            onChange={handleChange}
            maxLength="2"
          />
          {errors.loanPeriod && <ErrorText>{errors.loanPeriod}</ErrorText>}
        </div>

        <div>
          <Label>Initial Deposit</Label>
          <SmallInput
            type="text"
            name="initialDeposit"
            value={formData.initialDeposit}
            onChange={handleChange}
            maxLength="9"
          />
          {errors.initialDeposit && <ErrorText>{errors.initialDeposit}</ErrorText>}
        </div>

        <div>
          <Label>Loan Amount</Label>
          <SmallInput
            type="text"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            maxLength="10"
          />
          {errors.loanAmount && <ErrorText>{errors.loanAmount}</ErrorText>}
        </div>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default LoanForm;

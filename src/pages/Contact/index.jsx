import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Styled Components for the form
const FormContainer = styled.div`
  grid-column: span 2;
  padding-top: 1rem;
  text-align: center;

`;

const FormTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled(motion.input)`
  width: 100%;
  padding: 0.75rem;
  background-color: #333;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;

  ::placeholder {
    color: #bbb;
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: #444;
    border-color: #007bff;
  }

  &:focus {
    background-color: #444;
    border-color: #007bff;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5);
  }
`;

const StyledButton = styled(motion.button)`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #00408d;
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

// Framer Motion Variants
const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({
        userName: "",
        businessName: "",
        yearsInBusiness: "",
        email: "",
        yrlyInc: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Here you could integrate with an API or handle the form submission differently
        alert('Form submitted! Check the console for data.');
        console.log(formData);
      };
  return (
    <FormContainer>
      <FormTitle>Contact Us</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Name"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <StyledInput
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Business Name"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <StyledInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <StyledInput
          type="number"
          name="yearsInBusiness"
          value={formData.yearsInBusiness}
          onChange={handleChange}
          placeholder="Years in Business"
          min={0}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <StyledInput
          type="number"
          name="yrlyInc"
          value={formData.yrlyInc}
          onChange={handleChange}
          placeholder="Annual Revenue"
          min={0}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <StyledButton
          type="submit"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Submit
        </StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm;

import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

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
  color: white;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const FullRow = styled.div`
  grid-column: span 2;
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

const StyledTextarea = styled(motion.textarea)`
  width: 100%;
  padding: 0.75rem;
  background-color: #333;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 200px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;
  resize: vertical;

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
  background-color: #1ba6b9;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
      const formattedValue = cleanedValue
        ? `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3, 6)}-${cleanedValue.slice(6, 10)}`
        : "";
      setFormData((prevData) => ({
        ...prevData,
        phone: formattedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address",
      });
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid phone number in the format 000-000-0000",
      });
      return;
    }

    const templateData = {
      to_name: "Support",
      from_name: formData.userName,
      from_email: formData.email,
      reply_to: formData.email,
      from_phone: formData.phone,
      business_name: formData.businessName,
      message: formData.message,
    };

    emailjs
      .send(
        "service_bivi22i",
        "template_27xtcik",
        templateData,
        "KV7QTvxeh4v4MjV8b"
      )
      .then(() => {
        Swal.fire({
          title: "Thank you for Contacting Us!",
          text: "Your message was submitted!",
          icon: "success",
        }).then(() => {
          setFormData({
            userName: "",
            businessName: "",
            email: "",
            phone: "",
            message: "",
          });
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Unable to authenticate account! Please Log back in.",
        });
      });
  };

  return (
    <FormContainer id="contact">
      <FormTitle>Contact Me</FormTitle>
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
          required
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
          required
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
          required
        />
        <StyledInput
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          required
        />
        <FullRow>
          <StyledTextarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            required
          />
        </FullRow>
        <FullRow>
          <StyledButton
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Submit
          </StyledButton>
        </FullRow>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm;

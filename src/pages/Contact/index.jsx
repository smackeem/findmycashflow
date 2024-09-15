import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
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
  color: white; // Ensuring the title color is white for consistency
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
  color: white; // Changed the text color to white
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
  color: white; // Changed the text color to white
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 200px; // Increase the default size of the textarea
  transition: background-color 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;
  resize: vertical; // Allows vertical resizing only

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
  // &:active {
  //   background-color: #00408d;
  //   transform: translateY(0);
  //   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  // }

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
    email: "",
    phone: "",
    message: "",
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

    const templateData = {
      to_name: "Support",
      from_name: formData.userName,
      from_email: formData.email,
      reply_to: formData.email,
      from_phone: formData.phone,
      business_name: formData.businessName,
      message: formData.message,
    };

    // Using EmailJS to send email
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
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
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
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          required
        />
        <StyledTextarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="6" // Adjusting the rows for more height
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          required
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

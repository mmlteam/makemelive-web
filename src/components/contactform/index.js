import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import axios from "axios";
import "./contactform.scss";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [thankyoumsg, setThankyoumsg] = useState("");
  const [fnameValidate, setFnameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [phoneValidate, setPhoneValidate] = useState(false);

  const [projectDetailsValidate, setProjectDetailsValidate] = useState(false);
  const [formValid, setFormValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonClass, setButtonClass] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateUsername = fname => {
    let errorMsgCaret = { ...errorMsg };
    if (fname.length === 0) {
      setFnameValidate(true);
      errorMsgCaret.fname = "Please enter your name";
    } else {
      setFnameValidate(false);
    }
    setErrorMsg(errorMsgCaret);
  };

  const validateProjectDetails = project => {
    let errorMsgCaret = { ...errorMsg };
    if (project.length === 0) {
      setProjectDetailsValidate(true);
      errorMsgCaret.project =
        "Please enter your project details or just say hi :)";
    } else {
      setProjectDetailsValidate(false);
    }
    setErrorMsg(errorMsgCaret);
  };

  const validateUserEmail = email => {
    let errorMsgCaret = { ...errorMsg };
    // checks for format _@_._
    if (email.length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailValidate(true);
      errorMsgCaret.email = "Invalid email format";
    } else {
      setEmailValidate(false);
    }
    setErrorMsg(errorMsgCaret);
  };

  const validateUserPhone = phone => {
    let rule = /^\d+$/
    let errorMsgCaret = { ...errorMsg };
    if (!phone.match(rule)) {
      setPhoneValidate(true);
      errorMsgCaret.phone = "Invalid phone format ";
    } else if(phone.length < 10) {
      setPhoneValidate(true);
      errorMsgCaret.phone = "Enter 10 digit mobile number";
    } else if(phone.length > 10) {
      setPhoneValidate(true);
      errorMsgCaret.phone = "Enter 10 digit mobile number";
    } else {
      setPhoneValidate(false);
    }
    setErrorMsg(errorMsgCaret);
  }

  const updateUsername = fname => {
    setFirstName(fname);
    validateUsername(fname);
  };

  const updateUserEmail = email => {
    setEmail(email);
    validateUserEmail(email);
  };

  const updateUserCompany = company => {
    setCompany(company);
  };

  const updateUserProjectDetails = project => {
    setProjectDetails(project);
    validateProjectDetails(project);
  };

  const updateUserPhone = phone => {
    setPhone(phone);
    validateUserPhone(phone);
  };

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setTimeout(() => {
      setButtonText("Submit");
      setButtonClass("");
    }, 5000);
  };

  useEffect(() => {
    if (
      email.length === 0 ||
      firstName.length === 0 ||
      phone.length === 0
    ) {
      setFormValid(true);
    } else if (fnameValidate || emailValidate || phoneValidate) {
      setFormValid(true);
    } else if (!fnameValidate && !emailValidate && !phoneValidate) {
      setFormValid(false);
    }
  }, [
    fnameValidate,
    emailValidate,
    phoneValidate,
    phone,
    email,
    firstName
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (!formValid) {
        setLoader(true);
        setButtonText("Submitting...");
        setButtonClass("loading");
        axios
          .post("/sendmail", {
            timeout: 2000,
            data: {
              fname: firstName,
              email: email,
              message: company,
              phone: phone,
              checkbox: isChecked
            }
          })
          .then(response => {
            if (response.data.status) {
              setLoader(false);
              setThankyoumsg("Message Sent.");
              setButtonText("Message Sent. We will reply you soon!");
              setButtonClass("sent-msg");
              resetForm();
            } else if (!response.data.status) {
              setLoader(true);
              setThankyoumsg("");
              setButtonText("something went wrong. sorry!");
              setButtonClass("");
              setFormValid(true);
              resetForm();
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form
        id="contact-form"
        method="POST"
        action="send"
        onSubmit={handleSubmit}
      >
        <FormField
          label="Your Name"
          value={firstName}
          fieldName="firstName"
          type="text"
          className="field"
          fieldFn={updateUsername}
          textAreaField={false}
        />
        {fnameValidate && <div className="error">{errorMsg.fname}</div>}
        <FormField
          label="Your Email"
          value={email}
          fieldName="email"
          type="text"
          className="field"
          fieldFn={updateUserEmail}
          textAreaField={false}
        />
        {emailValidate && <div className="error">{errorMsg.email}</div>}
        
        {/* <FormField
          label="Project Details"
          value={projectDetails}
          fieldName="project"
          type="text"
          className="field"
          fieldFn={updateUserProjectDetails}
        />
        {projectDetailsValidate && (
          <div className="error">{errorMsg.project}</div>
        )} */}

        <FormField
          label="Your Phone"
          value={phone}
          fieldName="phone"
          type="text"
          className="field"
          fieldFn={updateUserPhone}
          textAreaField={false}
        />
        {phoneValidate && (
          <div className="error">{errorMsg.phone}</div>
        )}
        <FormField
          label="Message"
          value={company}
          fieldName="company"
          type="text"
          className="field"
          fieldFn={updateUserCompany}
          textAreaField={true}
        />
        <button
          type="submit"
          className={`submit-button ${buttonClass}`}
          disabled={formValid}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useState, useEffect } from "react";
import PopupFormField from "./formfield";
import axios from "axios";
import "./popupform.scss";

const PopupContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [thankyoumsg, setThankyoumsg] = useState("");
  const [fnameValidate, setFnameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
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

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setCompany("");
    setProjectDetails("");
    setTimeout(() => {
      setButtonText("Submit");
      setButtonClass("");
    }, 5000);
  };

  useEffect(() => {
    if (
      email.length === 0 ||
      firstName.length === 0 ||
      projectDetails.length === 0
    ) {
      setFormValid(true);
    } else if (fnameValidate || emailValidate || projectDetailsValidate) {
      setFormValid(true);
    } else if (!fnameValidate && !emailValidate && !projectDetailsValidate) {
      setFormValid(false);
    }
  }, [
    fnameValidate,
    emailValidate,
    projectDetailsValidate,
    email,
    firstName,
    projectDetails
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
              message: projectDetails,
              company: company,
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
    <div>
      <form
        id="contact-form"
        method="POST"
        action="send"
        onSubmit={handleSubmit}
      >
        <PopupFormField
          label="Your Name"
          value={firstName}
          fieldName="firstName"
          type="text"
          className="field"
          fieldFn={updateUsername}
        />
        {fnameValidate && <div className="error">{errorMsg.fname}</div>}
        <PopupFormField
          label="Your Email"
          value={email}
          fieldName="email"
          type="text"
          className="field"
          fieldFn={updateUserEmail}
        />
        {emailValidate && <div className="error">{errorMsg.email}</div>}
        <PopupFormField
          label="Company"
          value={company}
          fieldName="company"
          type="text"
          className="field"
          fieldFn={updateUserCompany}
        />
        <PopupFormField
          label="Project Details"
          value={projectDetails}
          fieldName="project"
          type="text"
          className="field"
          fieldFn={updateUserProjectDetails}
        />
        {projectDetailsValidate && (
          <div className="error">{errorMsg.project}</div>
        )}
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

export default PopupContactForm;

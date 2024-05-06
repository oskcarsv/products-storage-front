/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "./Input";
import {
  emailValidationMessage,
  validatePasswordMessage,
  passwordConfirmationMessage,
  validateUsernameMessage,
  validateName,
  validateUsername,
  validateConfirPassword,
  validateEmail,
  validatePassword,
  validateNameMessage,
} from "../shared/validators";
import { useRegister } from "../shared/hooks/useRegister";
import "../components/styles/Register.css"


export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    name: {
      value: "",
      isValid: false,
      showError: false,
    },
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConfirm: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "name":
        isValid = validateName(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "passwordConfirm":
        isValid = validateConfirPassword(formState.password.value, value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(formState.name.value ,formState.email.value, formState.password.value, formState.username.value);
  };

  const isSubmitButtonDisabled = isLoading ||
    !formState.password.isValid ||
    !formState.email.isValid ||
    !formState.passwordConfirm.isValid ||
    !formState.username.isValid;
  return (
    <div className="register-container">
  <form className="auth-form">
    <div className="input-container">
      <label htmlFor="name" className={formState.name.value ? "input-label input-label-active" : "input-label"}>
        Name
      </label>
      <input
        type="text"
        id="name"
        value={formState.name.value}
        onChange={(e) => handleInputValueChange(e.target.value, "name")}
        onBlur={() => handleInputValidationOnBlur(formState.name.value, "name")}
      />
    </div>
    <div className="input-container">
      <label htmlFor="email" className={formState.email.value ? "input-label input-label-active" : "input-label"}>
        Email
      </label>
      <input
        type="text"
        id="email"
        value={formState.email.value}
        onChange={(e) => handleInputValueChange(e.target.value, "email")}
        onBlur={() => handleInputValidationOnBlur(formState.email.value, "email")}
      />
    </div>
    <div className="input-container">
      <label htmlFor="username" className={formState.username.value ? "input-label input-label-active" : "input-label"}>
        Username
      </label>
      <input
        type="text"
        id="username"
        value={formState.username.value}
        onChange={(e) => handleInputValueChange(e.target.value, "username")}
        onBlur={() => handleInputValidationOnBlur(formState.username.value, "username")}
      />
    </div>
    <div className="input-container">
      <label htmlFor="password" className={formState.password.value ? "input-label input-label-active" : "input-label"}>
        Password
      </label>
      <input
        type="password"
        id="password"
        value={formState.password.value}
        onChange={(e) => handleInputValueChange(e.target.value, "password")}
        onBlur={() => handleInputValidationOnBlur(formState.password.value, "password")}
      />
    </div>
    <div className="input-container">
      <label htmlFor="passwordConfirm" className={formState.passwordConfirm.value ? "input-label input-label-active" : "input-label"}>
        Password Confirmation
      </label>
      <input
        type="password"
        id="passwordConfirm"
        value={formState.passwordConfirm.value}
        onChange={(e) => handleInputValueChange(e.target.value, "passwordConfirm")}
        onBlur={() => handleInputValidationOnBlur(formState.passwordConfirm.value, "passwordConfirm")}
      />
    </div>
    <button
      onClick={handleRegister}
      disabled={isSubmitButtonDisabled}
    >
      Register
    </button>
  </form>
  <span onClick={switchAuthHandler} className="auth-form-switch-label">
    Do you already have an account? Log in here!...
  </span>
</div>
  );
};
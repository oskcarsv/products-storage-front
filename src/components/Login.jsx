/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "./Input";
import {
  validatePasswordMessage,
  validatePassword,
  validateUsernameOrEmail,
  validateUsernameOrEmailMessage
} from "../shared/validators";
import { useLogin } from "../shared/hooks";
import "../components/styles/Login.css"

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState({
    usernameOrEmail: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
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
      case "usernameOrEmail":
        isValid = validateUsernameOrEmail(value)
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid
      }
    }))
  };

  const handleLogin = (event) => {
    event.preventDefault()
    login(formState.usernameOrEmail.value, formState.password.value)
  }

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.usernameOrEmail.isValid
  return (
    <div className="container">
      <div className="left-panel">
        <img src="src\assets\img\logo.jpg" alt="logo" className="logo" />
        <h1>Extremely powerful. Surprisingly simple.</h1>
        <p>Discover why we're the leading storage platform for tasks around the globe.</p> 
      </div>
      <div className="right-panel">
        <h2>¡Welcome!</h2>
        <form>
          <div className="input-container">
            <Input label='Email or User' field="usernameOrEmail" value={formState.usernameOrEmail.value} onChangeHandler={handleInputValueChange} type='text' onBlurHandler={handleInputValidationOnBlur} showErrorMessage={formState.usernameOrEmail.showError} validationMessage={validateUsernameOrEmailMessage} />
          </div>
          <div className="input-container">
            <Input label='password' field="password" value={formState.password.value} onChangeHandler={handleInputValueChange} type='password' onBlurHandler={handleInputValidationOnBlur} showErrorMessage={formState.password.showError} validationMessage={validatePasswordMessage}/>
          </div>
        </form>
        <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>Sign in</button>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
          Do not you have an account yet? Sign up...!
        </span>
      </div>
    </div>
  );
};

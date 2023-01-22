import "./styles/AuthForm.scss";
import Logo from "./Logo";
import Button from "./Button";
import { useState, useEffect } from "react";
import signInSuccess from "./images/sign-in-success.json";
import { Link } from "react-router-dom";
import LottieGif from "./LottieGif";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {};

  return (
    <div className="AuthForm">
      <div className="AuthForm-form-wrapper">
        <div className="content">
          <Logo />
          <p className="title">Welcome Back!</p>
          <p className="subtitle">
            Happy to see you back. Consistency is the key! Login to your account
            to view today's challenge.
          </p>
          <form className="form">
            <label className="form-label" name="email">
              Email:
              <input
                className="form-input"
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="example@gmail.com"
              />
              <ion-icon name="at-outline"></ion-icon>
            </label>
            <label className="form-label" name="password">
              Password:
              <input
                className="form-input"
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Your password"
              />
              <ion-icon name="lock-closed-outline"></ion-icon>
            </label>
            <Button submit fullWidth text="Login" />
          </form>

          <div className="no-account">
            <span className="no-account-text">Don't have an account yet? </span>
            <Link to="/signup" className="no-account-link" href="to-sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="AuthForm-illustration">
        <LottieGif illustration={signInSuccess} width={500} height={500} />
      </div>
    </div>
  );
}

export default Login;

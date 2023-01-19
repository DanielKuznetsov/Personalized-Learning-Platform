import Button from "./Button";
import Logo from "./Logo";
import "./styles/AuthForm.scss";
import signInSuccess from "./images/sign-in-success.json";
import signupGif from "./images/signup.json";
import LottieGif from "./LottieGif";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AuthForm({ login, signup }) {
  const [gif, setGif] = useState();

  useEffect(() => {
    if (login) {
      setGif(signInSuccess);
    }

    if (signup) {
      setGif(signupGif);
    }
  }, [login, signup]);

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
        <LottieGif illustration={gif} width={500} height={500} />
      </div>
    </div>
  );
}

export default AuthForm;

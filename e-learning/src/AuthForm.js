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
  const [form, setForm] = useState();

  useEffect(() => {
    if (login) {
      setGif(signInSuccess);
      setForm(
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
      );
    }

    if (signup) {
      setGif(signupGif);
      setForm(
        <div className="content">
          <Logo />
          <p className="title">Let's get started!</p>
          <p className="subtitle">
            Join the community of learners and discover new opportunities for
            growth and development.
          </p>
          <form className="form">
            <label className="form-label" name="name">
              Full Name:
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Daniel Kuznetsov"
              />
              <ion-icon name="person-outline"></ion-icon>
            </label>
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
            <label className="form-label" name="password">
              Confirm Password:
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
            <span className="no-account-text">Already have an account? </span>
            <Link to="/login" className="no-account-link" href="to-sign-up">
              Login
            </Link>
          </div>
        </div>
      );
    }
  }, [login, signup]);

  return (
    <div className="AuthForm">
      <div className="AuthForm-form-wrapper">{form}</div>

      <div className="AuthForm-illustration">
        <LottieGif illustration={gif} width={500} height={500} />
      </div>
    </div>
  );
}

export default AuthForm;

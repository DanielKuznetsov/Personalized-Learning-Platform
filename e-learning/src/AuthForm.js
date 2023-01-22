import Button from "./Button";
import Logo from "./Logo";
import "./styles/AuthForm.scss";
import signInSuccess from "./images/sign-in-success.json";
import signupGif from "./images/signup.json";
import LottieGif from "./LottieGif";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, reset } from "./features/auth/authSlice";
import { toast } from "react-toastify";

function AuthForm({ login, signupAni, encryptData }) {
  const [gif, setGif] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { student, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Renderring animation
    if (login) {
      setGif(signInSuccess);
    }
    if (signupAni) {
      setGif(signupGif);
    }

    if (isError) {
      toast.error(message);
    }

    if (isSuccess || student) {
      navigate("/");
    }

    dispatch(reset());
  }, [
    login,
    signupAni,
    dispatch,
    isError,
    isSuccess,
    message,
    navigate,
    student,
  ]);

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords don't match!");
    } else {
      const studentData = {
        name,
        email,
        password,
      };

      dispatch(signup(studentData));
    }
  };

  return (
    <div className="AuthForm">
      <div className="AuthForm-form-wrapper">
        {login && (
          <div className="content">
            <Logo />
            <p className="title">Welcome Back!</p>
            <p className="subtitle">
              Happy to see you back. Consistency is the key! Login to your
              account to view today's challenge.
            </p>
            {/* <form onSubmit={handleSubmitLogin} className="form"> */}

            <form className="form">
              <label className="form-label" name="email">
                Email:
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
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
                  value={formData.password}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
                  placeholder="Your password"
                />
                <ion-icon name="lock-closed-outline"></ion-icon>
              </label>
              <Button submit fullWidth text="Login" />
            </form>

            <div className="no-account">
              <span className="no-account-text">
                Don't have an account yet?{" "}
              </span>
              <Link to="/signup" className="no-account-link" href="to-sign-up">
                Sign Up
              </Link>
            </div>
          </div>
        )}

        {signupAni && (
          <div className="content">
            <Logo />
            <p className="title">Let's get started!</p>
            <p className="subtitle">
              Join the community of learners and discover new opportunities for
              growth and development.
            </p>
            {/* <form onSubmit={handleSubmitSignup} className="form"> */}
            <form onSubmit={handleOnSubmit} className="form">
              <label className="form-label" name="name">
                Full Name:
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleOnChange}
                  placeholder="Enter your name"
                />
                <ion-icon name="person-outline"></ion-icon>
              </label>
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
                  placeholder="Enter password"
                />
                <ion-icon name="lock-closed-outline"></ion-icon>
              </label>
              <label className="form-label" name="password">
                Confirm Password:
                <input
                  className="form-input"
                  type="password"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={handleOnChange}
                  placeholder="Confirm password"
                />
                <ion-icon name="lock-closed-outline"></ion-icon>
              </label>
              <Button submit fullWidth text="Signup" />
            </form>
            <div className="no-account">
              <span className="no-account-text">Already have an account? </span>
              <Link to="/login" className="no-account-link" href="to-sign-up">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="AuthForm-illustration">
        <LottieGif illustration={gif} width={500} height={500} />
      </div>
    </div>
  );
}

export default AuthForm;

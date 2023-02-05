import "../styles/AuthForm.scss";
import Button from "../components/Button";
import Logo from "../components/Logo";
import signupGif from "../images/signup.json";
import LottieGif from "../components/LottieGif";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorFields, setErrorFields] = useState({
    name: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const { name, email, password, passwordConfirm } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { student, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if(!student?.student?.token) {
      toast.error(student?.message);
    } else {
      navigate("/dashboard");
      toast.success("Signed-up successfully!");
    }

    dispatch(reset());
  }, [dispatch, isError, message, navigate, student]);

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!name && !email && !password && !passwordConfirm) {
      setErrorFields({
        name: true,
        email: true,
        password: true,
        passwordConfirm: true,
      });
      return toast.error("All fields are empty!");
    } else if (!name && !email && !password) {
      setErrorFields({
        name: true,
        email: true,
        password: true,
        passwordConfirm: false,
      });
      return toast.error("Name, email, and password fields is empty!");
    } else if (!name && !email) {
      setErrorFields({
        name: true,
        email: true,
        password: false,
        passwordConfirm: false,
      });
      return toast.error("Name and email fields is empty!");
    } else if (!name) {
      setErrorFields({
        name: true,
        email: false,
        password: false,
        passwordConfirm: false,
      });
      return toast.error("Name field is empty!");
    }

    if (password !== passwordConfirm) {
      toast.error("Passwords don't match!");
    } else {
      const studentData = {
        name,
        email,
        password,
      };

      dispatch(signup(studentData));
      setFormData({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
      setErrorFields({
        name: false,
        email: false,
        password: false,
        passwordConfirm: false,
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="AuthForm">
      <div className="AuthForm-form-wrapper">
        <div className="content">
          {/* <Logo />
          <p className="title">Let's get started!</p>
          <p className="subtitle">
            Join the community of learners and discover new opportunities for
            growth and development.
          </p> */}
          {/* <form onSubmit={handleSubmitSignup} className="form"> */}
          <form onSubmit={handleOnSubmit} className="form">
            <label className="form-label" name="name">
              Full Name:
              <input
                className={errorFields.name ? "form-input error" : "form-input"}
                type="text"
                name="name"
                value={name}
                onChange={handleOnChange}
                placeholder="Enter your name"
              />
              <ion-icon name="person-outline"></ion-icon>
            </label>
            {errorFields.name ? (
              <span className="error">Name field is empty *</span>
            ) : (
              ""
            )}

            <label className="form-label" name="email">
              Email:
              <input
                className={
                  errorFields.email ? "form-input error" : "form-input"
                }
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="example@gmail.com"
              />
              <ion-icon name="at-outline"></ion-icon>
            </label>
            {errorFields.email ? (
              <span className="error">Email field is empty *</span>
            ) : (
              ""
            )}

            <label className="form-label" name="password">
              Password:
              <input
                className={
                  errorFields.password ? "form-input error" : "form-input"
                }
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter password"
              />
              <ion-icon name="lock-closed-outline"></ion-icon>
            </label>
            {errorFields.password ? (
              <span className="error">Password field is empty *</span>
            ) : (
              ""
            )}

            <label className="form-label" name="password">
              Confirm Password:
              <input
                className={
                  errorFields.passwordConfirm
                    ? "form-input error"
                    : "form-input"
                }
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleOnChange}
                placeholder="Confirm password"
              />
              <ion-icon name="lock-closed-outline"></ion-icon>
            </label>
            {errorFields.passwordConfirm ? (
              <span className="error">
                Conforming password field is empty *
              </span>
            ) : (
              ""
            )}

            <Button submit fullWidth text="Signup" />
          </form>
          <div className="no-account">
            <span className="no-account-text">Already have an account? </span>
            <Link to="/login" className="no-account-link" href="to-sign-up">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="AuthForm-illustration">
        <Logo />
        <p className="title">Let's get started!</p>
        <p className="subtitle">
          Join the community of learners and discover new opportunities for
          growth and development.
        </p>
        <LottieGif illustration={signupGif} width={500} height={500} />
      </div>
    </div>
  );
}

export default Signup;

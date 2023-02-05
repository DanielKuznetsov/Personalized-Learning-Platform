import "../styles/AuthForm.scss";
import Logo from "../components/Logo";
import Button from "../components/Button";
import signInSuccess from "../images/sign-in-success.json";
import LottieGif from "../components/LottieGif";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorFields, setErrorFields] = useState({
    email: false,
    password: false,
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { student, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (student) {
      navigate("/dashboard");
      toast.success("Logged-in successfuly!");
    }

    dispatch(reset());
  }, [isError, dispatch, navigate, student, message]);

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setErrorFields({
        email: true,
        password: true,
      });
      return toast.error("Fill out both fields!");
    } else if (!email) {
      setErrorFields({
        email: true,
        password: false,
      });
      return toast.error("Email field is empty!");
    } else if (!password) {
      setErrorFields({
        email: false,
        password: true,
      });
      return toast.error("Password field is empty!");
    }

    const studentData = {
      email,
      password,
    };

    dispatch(login(studentData));
    setFormData({
      email: "",
      password: "",
    });
    setErrorFields({
      email: false,
      password: false,
    });
  };

  if (isLoading) {
    return <Spinner />
  }

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
          <form onSubmit={handleOnSubmit} className="form">
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
                placeholder="Your password"
              />
              <ion-icon name="lock-closed-outline"></ion-icon>
            </label>
            {errorFields.password ? (
              <span className="error">Password field is empty *</span>
            ) : (
              ""
            )}

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

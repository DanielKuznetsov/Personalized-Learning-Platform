import Button from "./Button";
import Logo from "./Logo";
import "./styles/AuthForm.scss";
import signInSuccess from "./images/sign-in-success.json";
import signupGif from "./images/signup.json";
import LottieGif from "./LottieGif";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AuthForm({ login, signup, encryptData }) {
  const navigate = useNavigate();
  const [gif, setGif] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  async function handleSubmitLogin(event) {
    event.preventDefault();

    try {
      const data = await axios.post(
        "http://localhost:4000/api/v1/pets/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      localStorage.setItem("id", data.data.data.pet._id);
      localStorage.setItem("jwt", data.data.token);
      encryptData(data.data.token);
      navigate("/");
    //   window.location.reload();
      setFormData({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (err) {
      console.log(err.response.data);
      
    }
  }

  async function handleSubmitSignup(event) {
    event.preventDefault();

    try {
      const data = await axios.post(
        "http://localhost:4000/api/v1/pets/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          passwordConfirm: formData.passwordConfirm,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      localStorage.setItem("id", data.data.data.pet._id);
      localStorage.setItem("jwt", data.data.token);
      encryptData(data.data.token);
      navigate("/");
      window.location.reload();
      setFormData({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (err) {
      console.log(err.response.data);
    }
  }

  useEffect(() => {
    // Renderring an animation
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
        {login && (
          <div className="content">
            <Logo />
            <p className="title">Welcome Back!</p>
            <p className="subtitle">
              Happy to see you back. Consistency is the key! Login to your
              account to view today's challenge.
            </p>
            <form onSubmit={handleSubmitLogin} className="form">
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

        {signup && (
          <div className="content">
            <Logo />
            <p className="title">Let's get started!</p>
            <p className="subtitle">
              Join the community of learners and discover new opportunities for
              growth and development.
            </p>
            <form onSubmit={handleSubmitSignup} className="form">
              <label className="form-label" name="name">
                Full Name:
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
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
                  value={formData.passwordConfirm}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
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

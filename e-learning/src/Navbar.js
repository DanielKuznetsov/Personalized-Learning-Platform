import React, { useEffect } from "react";
import Button from "./Button";
import "./styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "./features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { student } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!student) {
      navigate("/");
    }
  }, [navigate, student]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    
    toast.success("Successfully Logged Out!");
    navigate("/");
  };

  return (
    <>
      <div className="Navbar">
        <div className="branding">
          <Logo />

          {/* ONLY WHEN LOGGED IN */}
          {/* <a className="back-home" href="back-home">
          <ion-icon className="back-icon" name="arrow-back-outline"></ion-icon>
          <span className="back-direction">Course Overview | Home</span>
        </a> */}
        </div>

        {student ? (
          <div className="user">
            <ion-icon name="notifications-outline"></ion-icon>
            <div className="user-image">User Image</div>
            <div className="user-name-role">
              <p className="name">Daniel Kuznetsov</p>
              <p className="role">Student</p>
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="auth">
            <Link to="/login">
              <Button text="Login" />
            </Link>
            <Link to="/signup">
              <Button text="Sign Up" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import Button from "./Button";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ loggedIn }) {
  return (
    <div className="Navbar">
      <div className="branding">
        <Logo />

        {/* ONLY WHEN LOGGED IN */}
        {/* <a className="back-home" href="back-home">
          <ion-icon className="back-icon" name="arrow-back-outline"></ion-icon>
          <span className="back-direction">Course Overview | Home</span>
        </a> */}
      </div>

      {loggedIn ? (
        <div className="user">
          <ion-icon name="notifications-outline"></ion-icon>
          <div className="user-image">User Image</div>
          <div className="user-name-role">
            <p className="name">Daniel Kuznetsov</p>
            <p className="role">Student</p>
          </div>
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
  );
}

export default Navbar;

import React from "react";
import Button from "./Button";
import "./styles/Navbar.scss";

function Navbar({ loggedIn }) {
  return (
    <div className="Navbar">
      <div className="branding">
        <a className="logo" href="later-home">
          <img
            className="logo-gif"
            src="https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif"
            alt="Logo"
          ></img>
          <p className="logo-text">theknown.io</p>
        </a>

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
          <Button text="Login" />
          <Button text="Sign Up" />
        </div>
      )}
    </div>
  );
}

export default Navbar;

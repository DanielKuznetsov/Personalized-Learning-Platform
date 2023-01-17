import React from "react";
import Button from "./Button";
import "./styles/Navbar.scss";

function Navbar({ loggedIn }) {
  return (
    <div className="Navbar">
      <div className="branding">
        <a className="logo-link" href="nothing-yet">
          <svg
            width="159"
            height="75"
            viewBox="0 0 159 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M39.5 0L73.708 56.25H5.292L39.5 0Z" fill="#FF0000" />
            <path d="M119.5 0L153.708 56.25H85.292L119.5 0Z" fill="#0000FF" />
            <path d="M79.5 0L113.708 56.25H45.292L79.5 0Z" fill="#008000" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M87.0705 56.25H111.929C112.709 56.25 113.189 55.3968 112.784 54.7304L99.5 32.887L86.2161 54.7304C85.8109 55.3968 86.2906 56.25 87.0705 56.25Z"
              fill="#16FFFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.0016 56.363H71.8605C72.6405 56.363 73.1202 55.5098 72.7149 54.8434L59.431 33L46.1472 54.8434C45.7419 55.5098 46.2216 56.363 47.0016 56.363Z"
              fill="#FFFF00"
            />
          </svg>
        </a>
        <a className="back-home" href="back-home">
          <ion-icon className="back-icon" name="arrow-back-outline"></ion-icon>
          <span className="back-direction">Course Overview | Home</span>
        </a>
      </div>
      {/* <div>
        <Button text="Login" />
        <Button text="Sign Up" />
      </div> */}
      {/* {loggedIn ? (
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
          <button className="auth-login">Login</button>
        </div>
      )} */}
    </div>
  );
}

export default Navbar;

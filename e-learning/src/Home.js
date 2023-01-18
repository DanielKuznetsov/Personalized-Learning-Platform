import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import "./styles/Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="Home-wrapper">
        <Navbar />
        <div className="first-block">
          <div className="content">
            {/* <p className="title">All You need to Know for your class is here</p> */}
            <p className="title">
              All you need for your class{" "}
              <span className="highlight">in one place</span>
            </p>
            <p className="subtitle">
              The Known is a quiz-based platform designed to help students
              increase their confidence and reduce stress while completing
              homework. Its goal is to save time by providing easily accessible
              practice problems.
            </p>
            <div className="signup">
              <label className="signup-label">
                <ion-icon name="book-outline"></ion-icon>
                <input
                  className="signup-input"
                  placeholder="What are you studying?"
                ></input>
              </label>
              <a href="to-signup">
                <Button text="Start Practicing" />
              </a>
            </div>
          </div>
          <div className="gif-hw">
            <img
              className="gif"
              src="https://media.giphy.com/media/q1mHcB8wOCWf6/giphy.gif"
              alt="Stressed Homer Simpson Cramming Homework"
            ></img>
            <p className="sub-text">
              We will help not to be like stressed like Homer Simpson!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import "./styles/Home.scss";
import homework from "./images/homework.json";
import Lottie from "react-lottie";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homework,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            <Lottie options={defaultOptions} height={400} width={400} />
            {/* <img
              className="gif"
              src="https://media.giphy.com/media/q1mHcB8wOCWf6/giphy.gif"
              alt="Stressed Homer Simpson Cramming Homework"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

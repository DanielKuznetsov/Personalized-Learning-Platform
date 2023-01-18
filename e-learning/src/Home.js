import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import "./styles/Home.scss";
import homework from "./images/homework.json";
import solution from "./images/solution.json";
import Lottie from "react-lottie";

function Home() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: solution,
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
            <Lottie options={defaultOptions1} height={400} width={450} />
          </div>
        </div>
        <div className="features">
          <div className="features-wrapper">
            <div className="feature">
              <Lottie
                className="icon"
                options={defaultOptions2}
                height={120}
                width={90}
              />
              <p className="title">Thorough Explanations</p>
              <p className="subtitle">Thorough ExplanationsThorough ExplanationsThorough Explanations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import "./styles/Home.scss";
import homework from "./images/homework.json";
import solution from "./images/solution.json";
import question from "./images/question.json";
import test from "./images/test.json";
import Lottie from "react-lottie";
import FeatureCard from "./FeatureCard";

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
            <Lottie options={defaultOptions} height={400} width={450} />
          </div>
        </div>
        <div className="features">
          <div className="features-wrapper">
            <FeatureCard
              illustrationName={solution}
              title="Thorough Explanations"
              subtitle="Thorough ExplanationsThorough ExplanationsThorough Explanations"
            />
            <FeatureCard
              illustrationName={question}
              title="Thorough Explanations"
              subtitle="Thorough ExplanationsThorough ExplanationsThorough Explanations"
            />
            <FeatureCard
              illustrationName={test}
              title="Thorough Explanations"
              subtitle="Thorough ExplanationsThorough ExplanationsThorough Explanations"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

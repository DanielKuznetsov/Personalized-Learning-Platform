import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import "./styles/Home.scss";
import homework from "./images/homework.json";
import solution from "./images/solution.json";
import question from "./images/question.json";
import practicing from "./images/practicing.json";
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

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: practicing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const topics = [
    "Asymptotes",
    "Continuity",
    "Trig Derivatives",
    "Average Rate of Change",
    "Chain Rule",
    "Related Rates",
    "Optimization",
    "Disc Method",
    "L'Hopital's Rule",
    "Power Rule",
    "Washer Method",
    "Trig Integrals",
    "Area Between Two Curves",
    "Mean Value Theorem",
    "Fundamental Theorem of Calculus",
  ];

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
                <Button shadow text="Start Practicing" />
              </a>
            </div>
          </div>
          <div className="gif-hw">
            <Lottie options={defaultOptions} height={400} width={450} />
          </div>
        </div>

        <div className="tags">
          <h2>Tags</h2>
          <h3>Find content based on a topic</h3>
          {/* MOVE INTO ITS OWN COMPONENT */}
          <div className="tags-row">
            {topics.map((topic, index) => (
              <a
                href="to-the-topic or signup"
                key={index}
                className="tags-single"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>

        <div className="features">
          <div className="features-wrapper">
            <div className="advantages">
              <span>Our</span>
              <span>Advantages</span>
              <p>This is a list of notable features we've implemented.</p>
            </div>
            <FeatureCard
              illustrationName={solution}
              title="Thorough Explanations"
              subtitle="Understand the reasoning behind the solutions, detailed explanations and a focus on the why, not just the how."
            />
            <FeatureCard
              illustrationName={question}
              title="Practice questions"
              subtitle="Practice with our customizable difficulty feature, choose from various levels to challenge yourself."
            />
            <FeatureCard
              illustrationName={test}
              title="Test Yourself"
              subtitle="Create custom tests, easily design and administer assessments tailored to your specific needs."
            />
          </div>
        </div>

        <div className="cta">
          <p className="cta-title">CALL TO ACTION</p>
          <p className="cta-subtitle">
            text to support my claimtext to support my claimtext to support my
            claimtext to support my claim text to support my claimtext to
            support my claimtext to support my claimtext to support my claim
          </p>
          <div className="cta-gif">
            <Lottie options={defaultOptions2} height={400} width={450} />
          </div>
          <Button shadow text="Start Practicing" />
        </div>
      </div>
    </div>
  );
}

export default Home;

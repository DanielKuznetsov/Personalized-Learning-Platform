import { useEffect } from "react";
import Button from "./Button";
import "./styles/Home.scss";
import homework from "./images/homework.json";
import solution from "./images/solution.json";
import question from "./images/question.json";
import practicing from "./images/practicing.json";
import test from "./images/test.json";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";
import LottieGif from "./LottieGif";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo";

function Home() {
  const navigate = useNavigate();

  const { student, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess || student) {
      navigate("/dashboard");
    }
  }, [isSuccess, navigate, student]);

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
        <div className="Home-wrapper-navbar">
          <Logo />
          <div className="auth-btns">
            <Link to="/login">
              <Button text="Login" />
            </Link>
            <Link to="/signup">
              <Button text="Sign Up" />
            </Link>
          </div>
        </div>

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
              <Link to="/login">
                <Button shadow text="Start Practicing" />
              </Link>
            </div>
          </div>
          <div className="gif-hw">
            {/* <Lottie options={defaultOptions} height={400} width={450} /> */}
            <LottieGif illustration={homework} width={450} height={400} />
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
          <p className="cta-title">
            Free{" "}
            <span className="tutoring">
              Tutoring <span className="overlay">Tutoring </span>
            </span>
            Help
          </p>
          <p className="cta-subtitle">
            Unsure of how to solve a proble or need some guidance? We've got you
            covered! Each and every one of our students gets assigned with a
            tutor to facilitate their learning.
          </p>
          <div className="cta-gif">
            <LottieGif illustration={practicing} width={550} height={400} />
          </div>
          <Button shadow text="Start Practicing" />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;

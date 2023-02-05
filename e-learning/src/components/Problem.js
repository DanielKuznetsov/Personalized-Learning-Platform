import React from "react";
import ConceptHeader from "./ConceptHeader";
import OverviewCard from "./OverviewCard";
import Solution from "./Solution";
import "../styles/Problem.scss";

function Problem({ correct, wrong, solution, question }) {
  return (
    <div className="Problem">
      {/* Pass a prop with a title and an image */}
      <ConceptHeader />
      <div className="Problem-wrapper">
        <div className="question">
          <div className="question-description">
            <p className="content">
              How would we express, mathematically, the limit of the function
              f(x) = x2 − x + 2 as x approaches 3?
            </p>
            {/* <p>Additonal information - given formula, etc</p> */}
          </div>

          {/* Pass a prop whether correct or not, and move into its own component */}

          {solution ? (
            <div className="question-solution">
              <Solution />
              <Solution />
              <Solution />
              <Solution />
            </div>
          ) : (
            <div className="question-options">
              <div className={correct ? "option correct" : "option"}>
                <span className="letter">A</span>
                <span className="answer">Four</span>
              </div>
              <div className="option">
                <span className="letter">B</span>
                <span className="answer">Four</span>
              </div>
              <div className="option">
                <span className="letter">C</span>
                <span className="answer">Four</span>
              </div>
              <div className={wrong ? "option wrong" : "option"}>
                <span className="letter">D</span>
                <span className="answer">Four</span>
              </div>
            </div>
          )}

          {solution ? (
            <div className="Problem-buttons">
              <a href="try-new" className="btn">
                try new
              </a>
            </div>
          ) : (
            <div className="Problem-buttons">
              <button className="btn">view solution</button>
              <button className="btn">check</button>
            </div>
          )}
        </div>
        <div className="Problem-more">
          <p className="title">Additional Problems</p>
          <div className="collection">
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;

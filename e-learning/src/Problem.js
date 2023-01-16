import React from "react";
import ConceptHeader from "./ConceptHeader";
import OverviewCard from "./OverviewCard";
import "./styles/Problem.scss";

function Problem({ correct, wrong }) {
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
          <div className="question-options">
            <div
              className={correct ? "option correct" : "option"}
              href="link-to-concept"
            >
              <span className="letter">A</span>
              <span className="answer">Four</span>
            </div>
            <div className="option" href="link-to-concept">
              <span className="letter">B</span>
              <span className="answer">Four</span>
            </div>
            <div className="option" href="link-to-concept">
              <span className="letter">C</span>
              <span className="answer">Four</span>
            </div>
            <div
              className={wrong ? "option wrong" : "option"}
              href="link-to-concept"
            >
              <span className="letter">D</span>
              <span className="answer">Four</span>
            </div>
          </div>
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

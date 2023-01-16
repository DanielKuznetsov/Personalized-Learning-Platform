import React from "react";
import ConceptHeader from "./ConceptHeader";
import OverviewCard from "./OverviewCard";
import "./styles/Problem.scss";

function Problem() {
  return (
    <div className="Problem">
      {/* Pass a prop with a title and an image */}
      <ConceptHeader />
      <div className="Problem-wrapper">
        <div className="question">
          <div className="question-description">
            <p className="content">
              How would we express, mathematically, the limit of the function
              f(x) = x2 − x + 2 as x apprhematically, the limit of the function
              f(x) = x2 − x + 2 as x approacoaches 3?
            </p>
            {/* <p>Additonal information - given formula, etc</p> */}
          </div>
          <div className="question-options">
            <a className="link" href="link-to-concept">
              One
            </a>
            <a className="link" href="link-to-concept">
              Two
            </a>
            <a className="link" href="link-to-concept">
              Three
            </a>
            <a className="link" href="link-to-concept">
              Four
            </a>
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

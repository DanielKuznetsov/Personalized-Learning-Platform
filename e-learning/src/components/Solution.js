import React, { useState } from "react";
import "../styles/Solution.scss";

function Solution() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Solution">
      <div className="Solution-wrapper">
        <div className="step-description">
          <span className="step">Step 1:</span>
          <span className="answer">Four</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>

      {isOpen ? (
        <div className="why-content">
          <p className="why-text">
            dsfdsfksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdasdsfdsfdsfdsfksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdasksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdas
          </p>
          <a className="concept-link" href="go-to-concept">
            <span>Go to the Concept </span>
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Solution;

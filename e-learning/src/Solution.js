import React, { useState } from "react";
import "./styles/Solution.scss";

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
        <p className="why">
          dsfdsfksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdasdsfdsfdsfdsfksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdasksjabfnjksadbnfkjdasdsfdsfksjabfnjksadbnfkjdas
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Solution;

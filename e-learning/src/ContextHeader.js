import React from "react";
import "./styles/ContextHeader.scss";

function ContextHeader({ concept }) {
  return (
    <div className="ContextHeader">
      {concept ? (
        <div className="ContextHeader-info">
          <div className="ContextHeader-image">Concept image</div>
          <p className="ContextHeader-subject-name concept">
            <span className="subtitle">Calculus 1</span>
            <span className="title">Limits</span>
          </p>
        </div>
      ) : (
        <div className="ContextHeader-info">
          <div className="ContextHeader-image">Calculus 1 image</div>
          <p className="ContextHeader-subject-name">Calculus 1</p>
        </div>
      )}

      {concept && (
        <button className="ContextHeader-button">Practice Limits</button>
      )}
    </div>
  );
}

export default ContextHeader;

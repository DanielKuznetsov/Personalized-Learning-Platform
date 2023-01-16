import React from "react";
import "./styles/SubjectOverview.scss";

function SubjectOverview() {
  return (
    <div className="SubjectOverview">
      <div className="SubjectOverview-wrapper">
        <div className="header">
          <div className="header-info">
            <div className="header-image">Calculus 1 image</div>
            <p className="header-subject-name">Calculus 1</p>
          </div>
        </div>
        <div className="main">
          <div className="main-sidebar">
            <ul className="main-sidebar-list">
              <li className="main-sidebar-item">Limits</li>
              <li className="main-sidebar-item">Derivatives</li>
              <li className="main-sidebar-item">Differentiation Rules</li>
              <li className="main-sidebar-item">Applications of Derivatives</li>
              <li className="main-sidebar-item">Integrals</li>
              <li className="main-sidebar-item">Techniques of integration</li>
              <li className="main-sidebar-item">Applications of Integrals</li>
              <li className="main-sidebar-item">Areas Under a Graph</li>
            </ul>
          </div>
          <div className="main-concepts"></div>
        </div>
      </div>
    </div>
  );
}

export default SubjectOverview;

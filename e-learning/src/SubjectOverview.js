import "./styles/SubjectOverview.scss";
import ConceptHeader from "./ConceptHeader";
import ConceptContent from "./ConceptContent";

function SubjectOverview() {
  return (
    <div className="SubjectOverview">
      <div className="SubjectOverview-wrapper">
        <ConceptHeader />
        <div className="main">
          <div className="main-sidebar">
            <ul className="main-sidebar-list">
              <li className="main-sidebar-item active">
                <a className="link" href="-">
                  Limits
                </a>
              </li>
              <li className="main-sidebar-item">
                {" "}
                <a className="link" href="-">
                  Derivatives
                </a>
              </li>
              <li className="main-sidebar-item">
                <a className="link" href="-">
                  Differentiation Rules
                </a>
              </li>
              <li className="main-sidebar-item">
                <a className="link" href="-">
                  Applications of Derivatives
                </a>
              </li>
              <li className="main-sidebar-item">
                <a className="link" href="-">
                  Integrals
                </a>
              </li>
              <li className="main-sidebar-item">
                <a className="link" href="-">
                  Techniques of integration
                </a>
              </li>
              <li className="main-sidebar-item">
                <a className="link" href="-">
                  Applications of Integrals
                </a>
              </li>
              <li className="main-sidebar-item">
                <a className="link" href="-">
                  Areas Under a Graph
                </a>
              </li>
            </ul>
          </div>
          <ConceptContent />
        </div>
      </div>
    </div>
  );
}

export default SubjectOverview;

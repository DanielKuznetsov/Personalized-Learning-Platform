import OverviewCard from "./OverviewCard";
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
          <div className="main-context">
            <p className="subtitle-name">Limits</p>
            <p className="context">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, magna at blandit malesuada, ipsum magna congue felis, non
              ornare ipsum massa non erat. Sed bibendum, magna in hendrerit
              tempor, odio dolor placerat nibh, at aliquet ligula augue quis
              nulla. Nam euismod, risus id porttitor congue, velit nibh
              tincidunt ipsum, vel semper velit velit in ipsum. Sed id nulla a
              quam suscipit hendrerit. Sed auctor, elit a dictum malesuada, eros
              massa suscipit ligula, id euismod nulla risus at libero. Lorem
              <br />
              <br />
              ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
              magna at blandit malesuada, ipsum magna congue felis, non ornare
              ipsum massa non erat. Sed bibendum, magna in hendrerit tempor,
              odio dolor placerat nibh, at aliquet ligula augue quis nulla. Nam
              euismod, risus id porttitor congue, velit nibh tincidunt ipsum,
              vel semper velit velit in ipsum. Sed id nulla a quam suscipit
              hendrerit. Sed auctor, elit a dictum malesuada, eros massa
              suscipit ligula, id euismod nulla risus at libero.
            </p>
            <div className="main-cards">
              <OverviewCard />
              <OverviewCard />
              <OverviewCard />
              <OverviewCard />
              <OverviewCard />
              <OverviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectOverview;

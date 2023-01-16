import OverviewCard from "./OverviewCard";
import "./styles/SubjectOverview.scss";
import ContextHeader from "./ContextHeader";

function SubjectOverview() {
  return (
    <div className="SubjectOverview">
      <div className="SubjectOverview-wrapper">
        <ContextHeader />
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

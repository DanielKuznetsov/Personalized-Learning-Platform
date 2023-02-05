import "./styles/ConceptContent.scss";
import OverviewCard from "./OverviewCard";

function ConceptContent({ subject }) { // subject or concept -> depends on what is fetching
  return (
    <div className="ConceptContent-context">
      <p className="subtitle-name">Limits</p>
      <p className="context">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
        magna at blandit malesuada, ipsum magna congue felis, non ornare ipsum
        massa non erat. Sed bibendum, magna in hendrerit tempor, odio dolor
        placerat nibh, at aliquet ligula augue quis nulla. Nam euismod, risus id
        porttitor congue, velit nibh tincidunt ipsum, vel semper velit velit in
        ipsum. Sed id nulla a quam suscipit hendrerit. Sed auctor, elit a dictum
        malesuada, eros massa suscipit ligula, id euismod nulla risus at libero.
        Lorem
        <br />
        <br />
        ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna at
        blandit malesuada, ipsum magna congue felis, non ornare ipsum massa non
        erat. Sed bibendum, magna in hendrerit tempor, odio dolor placerat nibh,
        at aliquet ligula augue quis nulla. Nam euismod, risus id porttitor
        congue, velit nibh tincidunt ipsum, vel semper velit velit in ipsum. Sed
        id nulla a quam suscipit hendrerit. Sed auctor, elit a dictum malesuada,
        eros massa suscipit ligula, id euismod nulla risus at libero.
      </p>
      <div className="ConceptContent-cards">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
    </div>
  );
}

export default ConceptContent;

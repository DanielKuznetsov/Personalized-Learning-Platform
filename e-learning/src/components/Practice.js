import React from "react";
import ConceptHeader from "./ConceptHeader";
import OverviewCard from "./OverviewCard";
import "../styles/Practice.scss";
import "../styles/ConceptContent.scss";

function Practice() {
  return (
    <div className="Practice">
      <ConceptHeader concept shuffle />
      <div className="ConceptContent-cards">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
      <div className="Practice-load-more">
        <button className="load-btn">Load More</button>
      </div>
    </div>
  );
}

export default Practice;

import React from "react";
import "./styles/Concept.scss";
import ConceptHeader from "./ConceptHeader";
import ConceptContent from "./ConceptContent";

function Concept() {
  return (
    <div className="Concept">
      <ConceptHeader concept />
      <ConceptContent />
    </div>
  );
}

export default Concept;

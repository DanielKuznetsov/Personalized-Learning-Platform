import React from "react";
import "./styles/Concept.scss";
import ConceptHeader from "./ConceptHeader";
import ConceptContent from "./ConceptContent";
import { Navigate } from "react-router-dom";

function Concept({ isLogged }) {
  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="Concept">
      <ConceptHeader concept />
      <ConceptContent />
    </div>
  );
}

export default Concept;
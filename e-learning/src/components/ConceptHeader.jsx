import "./styles/ConceptHeader.scss";

function ConceptHeader({ concept, shuffle }) {
  return (
    <div className="ConceptHeader">
      {concept ? (
        <div className="ConceptHeader-info">
          <div className="ConceptHeader-image">Concept image</div>
          <p className="ConceptHeader-subject-name concept">
            <span className="subtitle">Calculus 1</span>
            <span className="title">Some Concept from Limits</span>
          </p>
        </div>
      ) : (
        <div className="ConceptHeader-info">
          <div className="ConceptHeader-image">Calculus 1 image</div>
          <p className="ConceptHeader-subject-name">Calculus 1</p>
        </div>
      )}

      {concept && (
        <button className="ConceptHeader-button">
          {shuffle ? "Shuffle new" : "Practice the concept"}
        </button>
      )}
    </div>
  );
}

export default ConceptHeader;

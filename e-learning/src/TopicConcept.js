import React from "react";
import { Link } from "react-router-dom";

function TopicConcept() {
  return (
    <li className="Topic-concept">
      <p className="Topic-concept-title width-75">Limits at Infinity</p>
      <p className="Topic-concept-description width-2">
        Evaluate limits at infinity and asymptotes
      </p>
      <Link to="to-certain-concept" className="Topic-concept-link width-1">
        <span>Read More</span>
      </Link>
    </li>
  );
}

export default TopicConcept;

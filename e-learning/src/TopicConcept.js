import { Link } from "react-router-dom";

function TopicConcept({ concept }) {
  return (
    <li className="Topic-concept">
      <p className="Topic-concept-title width-75">{concept.title}</p>
      <p className="Topic-concept-description width-2">
        {concept.conceptDescription}
      </p>
      <Link to={concept.link} className="Topic-concept-link width-1">
        <span>Read More</span>
      </Link>
    </li>
  );
}

export default TopicConcept;

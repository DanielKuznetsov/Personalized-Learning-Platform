import "./styles/Topic.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Topic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Topic">
      <div className="Topic-header">
        <p className="Topic-title width-1">Limits</p>
        <p className="Topic-description width-3">
          Some Description About Limits
        </p>
        <Link className="Topic-link width-1" to="/link-to-concept">
          View
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
        <span className="Topic-more-concepts-btn width-1">
          <button onClick={() => setIsOpen(!isOpen)} className="btn">
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>
        </span>
      </div>

      {isOpen ? (
        <ul className="Topic-ul">
          <li className="Topic-concept">
            <p className="Topic-concept-title width-75">Intro to Limits</p>
            <p className="Topic-concept-description width-2">
              Basic concept and its usage in functions
            </p>
            <Link
              to="to-certain-concept"
              className="Topic-concept-link width-1"
            >
              <span>Read More</span>
            </Link>
          </li>

          <li className="Topic-concept">
            <p className="Topic-concept-title width-75">L'Hopital's rule</p>
            <p className="Topic-concept-description width-2">
              Evaluating limits involving indeterminate forms
            </p>
            <Link
              to="to-certain-concept"
              className="Topic-concept-link width-1"
            >
              <span>Read More</span>
            </Link>
          </li>

          <li className="Topic-concept">
            <p className="Topic-concept-title width-75">Limits at Infinity</p>
            <p className="Topic-concept-description width-2">
              Evaluate limits at infinity and asymptotes
            </p>
            <Link
              to="to-certain-concept"
              className="Topic-concept-link width-1"
            >
              <span>Read More</span>
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Topic;

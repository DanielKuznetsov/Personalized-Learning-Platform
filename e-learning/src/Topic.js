import "./styles/Topic.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import TopicConcept from "./TopicConcept";

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
          {[12, 23, 34].map((el) => (
            <TopicConcept key={el} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Topic;

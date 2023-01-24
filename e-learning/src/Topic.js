import "./styles/Topic.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import TopicConcept from "./TopicConcept";

function Topic({ chapter }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Topic">
      <div className="Topic-header">
        <p className="Topic-title width-1">{chapter.title}</p>
        {/* <p className="Topic-description width-3">
          {chapter.chapterDescription}
        </p> */}
        <Link className="Topic-link width-1" to={chapter.link}>
          View
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
        <span className="Topic-more-concepts-btn width-1">
          <button onClick={() => setIsOpen(!isOpen)} className="btn">
            {isOpen ? (
              <ion-icon name="remove-circle-outline"></ion-icon>
            ) : (
              <ion-icon name="add-circle-outline"></ion-icon>
            )}
          </button>
        </span>
      </div>

      {isOpen ? (
        <ul className="Topic-ul">
          {chapter.concepts.map((concept, index) => (
            <TopicConcept concept={concept} key={index * 1242} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Topic;

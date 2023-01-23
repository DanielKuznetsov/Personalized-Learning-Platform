import { Link } from "react-router-dom";
import Header from "./Header";

function DashboardContent() {
  const handleOnClick = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement.className);
  };

  return (
    <div className="subject-content">
      <Header />

      <div className="Table">
        <div className="Table-head">
          <p className="item width-1">Title</p>
          <p className="item width-3">Description</p>
          <p className="item width-1">Link</p>
          <p className="item width-1">Expand</p>
        </div>

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
              <button onClick={handleOnClick} className="btn">
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
            </span>
          </div>

          <ul className="Topic-ul">
            <li className="Topic-concept">
              <p className="Topic-concept-title width-1">Intro to Limits</p>
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
              <p className="Topic-concept-title width-1">L'Hopital's rule</p>
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
              <p className="Topic-concept-title width-1">Limits at Infinity</p>
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
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;

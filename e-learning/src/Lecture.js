import "./styles/Lecture.scss";
import Navbar from "./Navbar";
import Header from "./Header";
import Text from "./Text";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

function Lecture({ data }) {
  const location = useLocation();
  const subject = location.pathname.split("/")[1];
  const chapter = location.pathname.split("/")[2];
  const concept = location.pathname.split("/")[3]?.toLowerCase();

  const chapterData = data
    .filter((el) => el.urlTitle === subject)[0]
    .chapters.filter((el) => el.urlTitle === chapter);

  // Active sidebar :hover, :active styles
  const [isActive, setIsActive] = useState(
    chapterData[0].concepts.map((el) => ({
      [el.urlTitle]: false,
    }))
  );

  const handleOnClick = (e) => {
    // Fully reset the state
    setIsActive(
      chapterData[0].concepts.map((el) => ({
        [el.urlTitle]: false,
      }))
    );

    // Set active only on clicked
    setIsActive((prevState) => ({
      ...prevState,
      [e.target.attributes[0].value]: true,
    }));
  };

  // ADD USEEFFECT FOR DATA RENDERING BASED ON URL AND WATCH FOR CHANGES IN PATHNAME

  return (
    <div className="Lecture">
      <Navbar />
      <div className="wrapper">
        <nav className="subject-nav">
          <ul className="subject-nav-list">
            {/* <li className="subject-nav-item">{chapterData[0].title}</li> */}
            {chapterData[0].concepts.map((concept, index) => (
              <Link className="link" key={index * 432} to={concept.link}>
                <li
                  onClick={handleOnClick}
                  name={concept.urlTitle}
                  className={
                    isActive[concept.urlTitle]
                      ? "subject-nav-item active"
                      : "subject-nav-item"
                  }
                >
                  {concept.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="Content">
          <Header
            title={
              chapterData[0].concepts.filter((el) => el.urlTitle === concept)[0]
                ? chapterData[0].concepts.filter(
                    (el) => el.urlTitle === concept
                  )[0].title
                : chapterData[0].title
            }
            description={
              chapterData[0].concepts.filter((el) => el.urlTitle === concept)[0]
                ? chapterData[0].concepts.filter(
                    (el) => el.urlTitle === concept
                  )[0].conceptDescription
                : chapterData[0].conceptDescription
            }
          />
          <Text />
        </div>
      </div>
    </div>
  );
}

export default Lecture;

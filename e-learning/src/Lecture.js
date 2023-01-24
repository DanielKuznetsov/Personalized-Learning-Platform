import "./styles/Lecture.scss";
import Navbar from "./Navbar";
import Header from "./Header";
import Text from "./Text";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Lecture({ data }) {
  const location = useLocation();
  const subject = location.pathname.split("/")[1];
  const chapter = location.pathname.split("/")[2];

  const chapterData = data
    .filter((el) => el.urlTitle === subject)[0]
    .chapters.filter((el) => el.urlTitle === chapter);

  // Title and description
  const [content, setContent] = useState({
    title: chapterData[0].title,
    description: chapterData[0].chapterDescription,
  });

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

    // Finds title and description on clicked 
    setContent({
      title: chapterData[0].concepts.filter(
        (el) => el.urlTitle === e.target.attributes[0].value
      )[0].title,
      description: chapterData[0].concepts.filter(
        (el) => el.urlTitle === e.target.attributes[0].value
      )[0].conceptDescription,
    });
  };

  return (
    <div className="Lecture">
      <Navbar />
      <div className="wrapper">
        <nav className="subject-nav">
          <ul className="subject-nav-list">
            {/* <li className="subject-nav-item">{chapterData[0].title}</li> */}
            {chapterData[0].concepts.map((concept, index) => (
              <li
                onClick={handleOnClick}
                key={index * 432}
                name={concept.urlTitle}
                className={
                  isActive[concept.urlTitle]
                    ? "subject-nav-item active"
                    : "subject-nav-item"
                }
              >
                {concept.title}
              </li>
            ))}
          </ul>
        </nav>

        <div className="Content">
          <Header title={content.title} description={content.description} />
          <Text />
        </div>
      </div>
    </div>
  );
}

export default Lecture;

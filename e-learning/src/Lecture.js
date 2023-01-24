import "./styles/Lecture.scss";
import "./styles/Dashboard.scss";
import Navbar from "./Navbar";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function Lecture({ data }) {
  const location = useLocation();
  const subject = location.pathname.split("/")[1];
  const chapter = location.pathname.split("/")[2];

  const chapterData = data
    .filter((el) => el.urlTitle === subject)[0]
    .chapters.filter((el) => el.urlTitle === chapter);

  return (
    <div className="Lecture">
      <Navbar />
      <div className="wrapper">
        <nav className="subject-nav">
          <ul className="subject-nav-list">
            {chapterData[0].concepts.map((concept, index) => (
              <li key={index * 432} className="subject-nav-item">
                {concept.title}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Header
            title={chapterData[0].title}
            description={chapterData[0].chapterDescription}
          />
        </div>
      </div>
    </div>
  );
}

export default Lecture;

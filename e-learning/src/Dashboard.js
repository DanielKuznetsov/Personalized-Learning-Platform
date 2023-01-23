import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/Dashboard.scss";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navbar />
      <div className="wrapper">
        <nav className="subject-nav">
          <ul className="subject-nav-list">
            <li className="subject-nav-item active">Calculus</li>
            <li className="subject-nav-item">Pre-Calculus</li>
            <li className="subject-nav-item">Algebra 1</li>
            <li className="subject-nav-item">Algebra 2</li>
            <li className="subject-nav-item">Algebra 2</li>
            <li className="subject-nav-item">Trigonometry</li>
            <li className="subject-nav-item">Geometry</li>
          </ul>
        </nav>
        <div className="subject-content">
          <header className="Header">
            <div className="Header-svg">
              <svg
                enableBackground="new 0 0 30.74 35.142"
                height="43"
                viewBox="0 0 30.74 35.142"
                width="31"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2.598 18.385c-1.316-.54-1.945-2.045-1.405-3.361l5.395-13.141c.54-1.316 1.69-.913 3.006-.373 1.316.54 2.3 1.013 1.759 2.329l-5.393 13.141c-.541 1.316-2.046 1.945-3.362 1.405z"
                  fill="#e24122"
                />
                <path
                  d="m3.572 19.578c-.452 0-.91-.086-1.353-.268-1.824-.749-2.698-2.842-1.95-4.666l5.394-13.141c.944-2.301 3.219-1.366 4.311-.918 1.136.466 3.249 1.334 2.305 3.634l-5.394 13.141c-.567 1.381-1.905 2.218-3.313 2.218zm-.594-2.118c.804.33 1.726-.056 2.057-.859l5.395-13.141c.142-.346.185-.45-1.214-1.024-1.518-.624-1.579-.473-1.702-.174l-5.395 13.141c-.33.804.055 1.727.859 2.057z"
                  fill="#e24122"
                />
                <path
                  d="m20.192 34.642-19.281-8.742 10.094-24.334 19.235 7.313z"
                  fill="#fcf1d5"
                />
                <path d="m20.192 35.142c-.071 0-.141-.015-.207-.045l-19.28-8.741c-.246-.111-.359-.398-.255-.647l10.093-24.334c.103-.25.386-.372.64-.276l19.235 7.313c.125.047.225.143.279.265s.057.26.009.385l-10.049 25.761c-.05.128-.15.23-.277.281-.061.025-.124.038-.188.038zm-18.633-9.497 18.359 8.324 9.674-24.801-18.31-6.961z" />
                <path
                  d="m18.398 15.438c-.224 0-.428-.152-.485-.379l-1.753-7.005c-.067-.268.096-.539.364-.606s.54.096.606.364l1.753 7.005c.067.268-.096.539-.364.606-.04.01-.081.015-.121.015z"
                  fill="#f6a50c"
                />
                <path
                  d="m13.894 12.934c-.203 0-.394-.125-.469-.326-.096-.259.036-.547.295-.643l6.968-2.586c.259-.096.547.036.643.295s-.036.547-.295.643l-6.968 2.586c-.057.021-.116.031-.174.031z"
                  fill="#f6a50c"
                />
                <path d="m18.118 18.704c-.064 0-.13-.012-.193-.039l-6.796-2.841c-.255-.106-.375-.399-.269-.654.107-.255.4-.375.654-.268l6.796 2.841c.255.106.375.399.269.654-.08.192-.265.307-.461.307z" />
                <path
                  d="m12.288 23.151c-.079 0-.157-.018-.229-.056-.155-.08-.258-.236-.27-.41l-.27-3.924c-.019-.275.189-.514.464-.533.277-.02.514.189.533.464l.214 3.102 2.982-1.826c.235-.144.543-.07.688.165.144.235.07.543-.165.688l-3.685 2.257c-.081.048-.172.073-.262.073z"
                  fill="#1e7ec1"
                />
                <path
                  d="m10.852 26.394c-.068 0-.136-.014-.202-.043-.252-.112-.367-.407-.255-.66l1.436-3.243c.112-.252.406-.367.66-.255.252.112.367.407.255.66l-1.436 3.243c-.084.187-.266.298-.458.298z"
                  fill="#1e7ec1"
                />
                <g fill="#e24122">
                  <path d="m10.583 8.094c-.062 0-.126-.012-.188-.037l-3.973-1.61c-.256-.104-.379-.396-.276-.652.104-.255.396-.379.652-.275l3.973 1.611c.256.104.379.395.276.651-.08.194-.267.312-.464.312z" />
                  <path d="m8.596 13.218c-.051 0-.103-.008-.155-.025l-3.939-1.283c-.263-.086-.406-.368-.321-.63s.367-.406.63-.321l3.939 1.283c.263.086.406.368.321.63-.068.212-.264.346-.475.346z" />
                </g>
              </svg>
              <p className="Header-title">Calculus</p>
            </div>
            <p className="Header-subtitle">
              There are <b>128 topics</b> available in a library with <b>9</b>{" "}
              subjects.
            </p>
          </header>

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
                  <button className="btn">
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
                  <p className="Topic-concept-title width-1">
                    L'Hopital's rule
                  </p>
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
                  <p className="Topic-concept-title width-1">
                    Limits at Infinity
                  </p>
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
      </div>
    </div>
  );
}

export default Dashboard;

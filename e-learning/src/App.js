import Navbar from "./Navbar";
import SubjectOverview from "./SubjectOverview";
import Concept from "./Concept";
import Practice from "./Practice";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar loggedIn />
      {/* NEED TO MOVE TO ITS OWN COMPONENT THE SIDEBAR */}
      {/* NEED TO CREATE ITS OWN COMPONENT FOR THE SIDEBAR LIST */}
      <div className="loggedIn-layout">
        <div className="Sidebar">
          <ul className="Sidebar-list">
            <li className="Sidebar-item active">
              <ion-icon name="grid-outline"></ion-icon>
              <a href="dashboard" className="link">
                Dashboard
              </a>
            </li>
            <li className="Sidebar-item">
              <ion-icon name="library-outline"></ion-icon>
              <a href="dashboard" className="link">
                Subjects
              </a>
            </li>
            <li className="Sidebar-item">
              <ion-icon name="book-outline"></ion-icon>
              <a href="dashboard" className="link">
                Homework
              </a>
            </li>
          </ul>
        </div>
        <Concept />
      </div>
    </div>
  );
}

export default App;

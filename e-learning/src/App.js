import Navbar from "./Navbar";
import SubjectOverview from "./SubjectOverview";
import Concept from "./Concept";
import Practice from "./Practice";
import "./styles/App.scss";
import Sidebar from "./Sidebar";
import Problem from "./Problem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Problem />

      {/* <div className="loggedIn-layout">
        <Sidebar />
        <Concept />
      </div> */}
    </div>
  );
}

export default App;

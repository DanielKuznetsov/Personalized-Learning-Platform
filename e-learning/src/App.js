import Navbar from "./Navbar";
import SubjectOverview from "./SubjectOverview";
import Concept from "./Concept";
import Practice from "./Practice";
import "./styles/App.scss";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubjectOverview />
      {/* <div className="loggedIn-layout">
        <Sidebar />
        <Concept />
      </div> */}
    </div>
  );
}

export default App;

import Navbar from "./Navbar";
import SubjectOverview from "./SubjectOverview";
import "./styles/App.scss";
import Concept from "./Concept";
import Practice from "./Practice";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Practice />
    </div>
  );
}

export default App;

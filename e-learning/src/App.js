import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";
import Home from "./Home";
import "./styles/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<AuthForm login />} />
          <Route exact path="/signup" element={<AuthForm signupAni />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

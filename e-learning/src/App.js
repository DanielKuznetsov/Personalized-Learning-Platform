import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import "./styles/App.scss";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Navbar loggedIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

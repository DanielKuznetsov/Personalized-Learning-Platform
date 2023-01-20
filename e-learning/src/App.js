import Navbar from "./Navbar";
// import SubjectOverview from "./SubjectOverview";
import Concept from "./Concept";
// import Practice from "./Practice";
import "./styles/App.scss";
import Sidebar from "./Sidebar";
// import Problem from "./Problem";
// import { useEffect } from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("cloneEncrypt") || false);
  const [decreptedData, setDecreptedData] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const secretPass = "XkhZG4fW2t2W";

  const encryptData = (text) => {
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(text),
      secretPass
    ).toString();

    localStorage.setItem("cloneEncrypt", data);
  };

  useEffect(() => {
    if (jwt) {
      const bytes = CryptoJS.AES.decrypt(
        localStorage.getItem("cloneEncrypt"),
        secretPass
      );
      const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setDecreptedData(data);
      setIsLogged(decreptedData === localStorage.getItem("jwt"));
    }
  }, [jwt, decreptedData]);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={isLogged ? <Navbar loggedIn /> : <Home />}
        />
        <Route
          exact
          path="/login"
          element={<AuthForm encryptData={encryptData} login />}
        />
        <Route exact path="/signup" element={<AuthForm signup />} />
        <Route exact path="*" element={<Home />} />
        {/* NOT FOUND PAGE OR PAGE IN CONSTRUCTION */}
      </Routes>

      {/* <Home /> */}
      {/* <Navbar /> */}
      {/* <button onClick={() => loginPets()}>Login</button>
      <button onClick={() => signout()}>Signout</button> */}

      {/* <Problem solution /> */}
      {/* <Problem correct wrong /> */}

      {/* <div className="loggedIn-layout">
        <Sidebar />
        <Concept />
      </div> */}
    </div>
  );
}

export default App;

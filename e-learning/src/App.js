import Navbar from "./Navbar";
// import SubjectOverview from "./SubjectOverview";
import Concept from "./Concept";
// import Practice from "./Practice";
import "./styles/App.scss";
import Sidebar from "./Sidebar";
// import Problem from "./Problem";
// import { useEffect } from "react";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("cloneEncrypt") || false);
  const [decreptedData, setDecreptedData] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isTempered, setIsTempered] = useState(false);
  const navigate = useNavigate();

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

    if (isLogged) {
      async function getUser() {
        try {
          const user = await axios.get(
            `http://localhost:4000/api/v1/pets/${localStorage.getItem("id")}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          console.log(user.data.data);
          setUserData(user.data.data.pet[0]);
        } catch (err) {
          console.log(err.response.data);
          setIsTempered(true);
          navigate("/login");
        }
      }

      getUser();
    }
  }, [jwt, decreptedData, isLogged, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home isLogged={isLogged} />} />
        <Route
          exact
          path="/login"
          element={
            <AuthForm
              setUserData={setUserData}
              encryptData={encryptData}
              login
            />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <AuthForm
              setUserData={setUserData}
              encryptData={encryptData}
              signup
            />
          }
        />
        <Route exact path="/dashboard" element={<Concept isLogged={isLogged} />} />
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

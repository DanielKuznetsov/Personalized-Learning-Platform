// import Navbar from "./Navbar";
// import SubjectOverview from "./SubjectOverview";
// import Concept from "./Concept";
// import Practice from "./Practice";
import "./styles/App.scss";
// import Sidebar from "./Sidebar";
// import Problem from "./Problem";
// import { useEffect } from "react";
// import axios from "axios";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";

function App() {
  // async function loginPets() {
  //   try {
  //     await axios.post(
  //       "http://localhost:4000/api/v1/pets/login",
  //       {
  //         email: "theo@example.com",
  //         password: "teddytheo",
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );

  //     // console.log(JSON.parse(pets.request.response).token);
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // }

  // async function signout() {
  //   try {
  //     await axios.get("http://localhost:4000/api/v1/pets/logout", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     });
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<AuthForm login />} />
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

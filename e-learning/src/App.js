import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import "./styles/App.scss";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard";
import Chapter from "./Chapter";

function App() {
  const data = [
    {
      title: "Calculus One",
      urlTitle: "calculusOne",
      subjectDescription:
        "Calculus One, also known as Single Variable Calculus, is the study of the basic concepts of calculus",
      chapters: [
        {
          title: "Introduction to Limits",
          urlTitle: "limits",
          chapterDescription:
            "Basic concept and how it describes the behavior of a function",
          link: "/calculusOne/limits",
          concepts: [
            {
              title: "Limits at Infinity",
              urlTitle: "atInfinity",
              conceptDescription: "Evaluate limits at infinity and asymptotes",
              link: "/calculusOne/limits/atInifnity",
            },
          ],
        },
      ],
    },
    {
      title: "Pre-Calculus",
      urlTitle: "preCalculus",
      subjectDescription:
        "Pre-Calculus, also known as Single Variable Calculus, is the study of the basic concepts of calculus",
      chapters: [
        {
          title: "Pre-Calculus",
          urlTitle: "limits",
          chapterDescription:
            "Basic concept and how it describes the behavior of a function",
          link: "/preCalculus/limits",
          concepts: [
            {
              title: "Limits at Infinity",
              urlTitle: "atInfinity",
              conceptDescription: "Evaluate limits at infinity and asymptotes",
              link: "/preCalculus/limits/atInifnity",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard data={data} />} />
          <Route exact path="/:subject/:chapter" element={<Chapter />} />
          <Route
            exact
            path="/:subject/:chapter/:concept"
            element={<Chapter />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

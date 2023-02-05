import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import "./styles/App.scss";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Chapter from "./components/Lecture";

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
          text: <div>TEXT</div>,
          concepts: [
            {
              title: "Limits at Infinity",
              urlTitle: "infinity",
              conceptDescription:
                "121212Evaluate limits at infinity and asymptotes",
              link: "/calculusOne/limits/infinity",
              text: <div>TEXT</div>,
            },
            {
              title: "Concept 2",
              urlTitle: "conceptwo",
              conceptDescription:
                "2342432432Evaluate limits at infinity and asymptotes",
              link: "/calculusOne/limits/conceptwo",
              text: <div>TEXT</div>,
            },
            {
              title: "Concept 3",
              urlTitle: "concepthree",
              conceptDescription:
                "45645645Evaluate limits at infinity and asymptotes",
              link: "/calculusOne/limits/concepthree",
              text: <div>TEXT</div>,
            },
          ],
        },
        {
          title: "Intdsfnlsmfdsroduction to Limits",
          urlTitle: "limsdfits",
          chapterDescription:
            "Basic sdffsconcept and how it describes the behavior of a function",
          link: "/calculusOne/limsdfits",
          text: <div>TEXT</div>,
          concepts: [
            {
              title: "Limits at Infinity limsdfits",
              urlTitle: "infinity",
              conceptDescription:
                "121212Evaluate limits at infinity and asymptotes",
              link: "/calculusOne/limsdfits/infinity",
              text: <div>TEXT</div>,
            },
            {
              title: "Concept 2  limsdfits",
              urlTitle: "conceptwo",
              conceptDescription:
                "2342432432Evaluate limsdfits at infinity and asymptotes",
              link: "/calculusOne/limsdfits/conceptwo",
              text: <div>TEXT</div>,
            },
            {
              title: "Concept 3  limsdfits",
              urlTitle: "concepthree",
              conceptDescription:
                "45645645Evaluate limsdfits at infinity and asymptotes",
              link: "/calculusOne/limsdfits/concepthree",
              text: <div>TEXT</div>,
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
          <Route
            exact
            path="/:subject/:chapter"
            element={<Chapter data={data} />}
          />
          <Route
            exact
            path="/:subject/:chapter/:concept"
            element={<Chapter data={data} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

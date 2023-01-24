import Navbar from "./Navbar";
import "./styles/Dashboard.scss";
import DashboardContent from "./DashboardContent";
import DashboardNav from "./DashboardNav";
import { useState } from "react";

function Dashboard() {
  // State to know which chapter is active
  // Whatever I click on the DashboardNav, the state will be updated, all fields are false, and only one field is true
  const [classActive, setClassActive] = useState({
    calculusOne: true,
    preCalculus: false,
    algebraOne: false,
    algebraTwo: false,
    trig: false,
    geometry: false,
  });

  const updateActiveClass = (e) => {
    // Clear the state
    setClassActive({
      calculusOne: false,
      preCalculus: false,
      algebraOne: false,
      algebraTwo: false,
      trig: false,
      geometry: false,
    });

    // Set the state of the clicked <li></li>
    setClassActive((prevState) => ({
      ...prevState,
      [e.target.attributes[0].value]: true,
    }));
  };

  return (
    <div className="Dashboard">
      <Navbar />
      <div className="wrapper">
        <DashboardNav
          classActive={classActive}
          updateActiveClass={updateActiveClass}
        />
        <DashboardContent classActive={classActive} />
      </div>
    </div>
  );
}

export default Dashboard;

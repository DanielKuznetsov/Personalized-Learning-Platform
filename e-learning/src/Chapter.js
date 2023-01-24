import "./styles/Chapter.scss";
import "./styles/Dashboard.scss";
import Navbar from "./Navbar";
import DashboardNav from "./DashboardNav";
import Header from "./Header";

function Chapter() {
  return (
    <div className="Chapter">
      <Navbar />
      <div className="wrapper">
        {/* <DashboardNav classActive /> */}
        {/* <Header /> */}
      </div>
    </div>
  );
}

export default Chapter;

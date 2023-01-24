import Navbar from "./Navbar";
import "./styles/Dashboard.scss";
import DashboardContent from "./DashboardContent";
import DashboardNav from "./DashboardNav";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navbar />
      <div className="wrapper">
        <DashboardNav />
        <DashboardContent />
      </div>
    </div>
  );
}

export default Dashboard;

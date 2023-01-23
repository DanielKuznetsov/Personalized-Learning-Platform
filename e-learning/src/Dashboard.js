import Navbar from "./Navbar";
import "./styles/Dashboard.scss";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navbar />
      <div className="wrapper">
        <nav className="subject-nav">
          <ul className="subject-nav-list">
            <li className="subject-nav-item active">Calculus</li>
            <li className="subject-nav-item">Pre-Calculus</li>
            <li className="subject-nav-item">Algebra 1</li>
            <li className="subject-nav-item">Algebra 2</li>
            <li className="subject-nav-item">Algebra 2</li>
            <li className="subject-nav-item">Trigonometry</li>
            <li className="subject-nav-item">Geometry</li>
          </ul>
        </nav>
        
        <DashboardContent />
      </div>
    </div>
  );
}

export default Dashboard;

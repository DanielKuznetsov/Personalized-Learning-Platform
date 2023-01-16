import React from "react";
import "./styles/Sidebar.scss";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="Sidebar-list">
        <li className="Sidebar-item active">
          <ion-icon name="grid-outline"></ion-icon>
          <a href="dashboard" className="link">
            Dashboard
          </a>
        </li>
        <li className="Sidebar-item">
          <ion-icon name="library-outline"></ion-icon>
          <a href="dashboard" className="link">
            Subjects
          </a>
        </li>
        <li className="Sidebar-item">
          <ion-icon name="book-outline"></ion-icon>
          <a href="dashboard" className="link">
            Homework
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./styles/Button.scss";

function Button({ text }) {
  return (
    <div className="Button">
      <button className="Button-btn">{text || "Add text"}</button>
    </div>
  );
}

export default Button;

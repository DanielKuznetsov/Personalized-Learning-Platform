import React from "react";
import "./styles/Button.scss";

function Button({ text, shadow }) {
  return (
    <div className="Button">
      <button className={shadow ? "Button-btn shadow" : "Button-btn"}>
        {text || "Add text"}
      </button>
    </div>
  );
}

export default Button;

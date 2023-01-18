import React from "react";
import "./styles/Button.scss";

function Button({ text, shadow, submit }) {
  return (
    <div className="Button">
      <button
        type={submit ? "submit" : ""}
        className={shadow ? "Button-btn shadow" : "Button-btn"}
      >
        {text || "Add text"}
      </button>
    </div>
  );
}

export default Button;

import { useEffect, useState } from "react";
import "./styles/Button.scss";

function Button({ text, shadow, submit, fullWidth }) {
  const [classes, setClasses] = useState("Button-btn");

  useEffect(() => {
    if (shadow) {
      setClasses("Button-btn shadow");
    }

    if (shadow && fullWidth) {
      setClasses("Button-btn shadow full-width");
    }

    if (fullWidth) {
      setClasses("Button-btn full-width");
    }
  }, [shadow, submit, fullWidth]);

  return (
    <div className="Button">
      <button
        type={submit ? "submit" : ""}
        className={classes}
        // className={shadow ? "Button-btn shadow" : "Button-btn"}
      >
        {text || "Add text"}
      </button>
    </div>
  );
}

export default Button;

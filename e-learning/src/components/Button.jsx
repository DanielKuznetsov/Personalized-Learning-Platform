import "../styles/Button.scss";
import { useEffect, useState } from "react";

function Button({ text, shadow, submit, fullWidth, handleLogout }) {
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
    <button
      type={submit ? "submit" : ""}
      className={classes}
      onClick={handleLogout}
    >
      {text || "Add text"}
    </button>
  );
}

export default Button;

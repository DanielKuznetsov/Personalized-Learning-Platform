import "../styles/Logo.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/" className="Logo">
        <img
          className="Logo-gif"
          src="https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif"
          alt="Logo"
        ></img>
        <p className="Logo-text">theknown.io</p>
      </Link>
    </div>
  );
}

export default Logo;

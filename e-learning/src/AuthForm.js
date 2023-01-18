import Button from "./Button";
import Logo from "./Logo";
import "./styles/AuthForm.scss";

function AuthForm() {
  return (
    <div className="AuthForm">
      <div className="AuthForm-form-wrapper">
        <div className="content">
          <Logo />
          <p className="title">Welcome Back!</p>
          <p className="subtitle">
            Happy to see you back. Consistency is the key! Login to your account
            to view today's challenge.
          </p>
          <form className="form">
            <label className="form-label" name="email">
              Email:
              <input
                className="form-input"
                type="text"
                name="email"
                placeholder="example@gmail.com"
              />
            </label>
            <label className="form-label" name="password">
              Password:
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Your password"
              />
            </label>
            <Button submit fullWidth text="Login" />
          </form>
        </div>
        <div className="no-account">
          <span className="no-account-text">Don't have an account yet?</span>
          <a className="no-account-link" href="to-sign-up">
            Sign Up
          </a>
        </div>
      </div>
      <div className="AuthForm-illustration">Illustration</div>
    </div>
  );
}

export default AuthForm;

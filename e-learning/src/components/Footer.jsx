import "../styles/Footer.scss"

function Footer() {
  return (
    <div className="Footer">
      <span>All Rights Reserved © 2023</span>
      <p className="feedback">
        <span>Got feedback?</span>
        <a href="mailto:info@theknown.io" className="email">
          info@theknown.io
        </a>
      </p>
    </div>
  );
}

export default Footer;

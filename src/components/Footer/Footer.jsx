const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <p className="copyrights p-tag">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <div className="social-media">
          <a
            className="social-media-icon"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="social-media-icon"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

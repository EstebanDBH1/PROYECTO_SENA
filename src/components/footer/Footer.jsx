import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <h2 className="text-big-footer">Offbeat</h2>

        <div className="social-media-footer">
          <div className="row">
            <h3>Email</h3>
            <ul>
              <li>
                <p>Offbeat@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className="row">
            <h3>Call us</h3>
            <ul>
              <li>
                <p>+57 32435434</p>
              </li>
            </ul>
          </div>

          <div className="row">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

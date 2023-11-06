import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleCickClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/" className="site-name">
            Offbeat
          </Link>

          <button className="nav__btn-seacrh">Buscar</button>

          <ul className="list-nav">
            <li>
              <Link to="#" className="list-nav__item">
                Productos,
              </Link>
            </li>
            <li>
              <Link to="/contact" className="list-nav__item">
          
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="list-nav__item btn-admin"
                onClick={handleClickOpen}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>

        <div className={openModal ? "overlay active" : "overlay"}>
          <div
            className={
              openModal ? "box-login-modal active" : "box-login-modal"
            }
          >
            <form className="form-login">
              <header className="header-login">
                <h2 className="txt-login">Login</h2>
                <span className="close-btn-login" onClick={handleCickClose}>
                  Close [x]
                </span>
              </header>

              <label htmlFor="email" className="label label-email">
                Email:
                <input
                  className="input-email"
                  type="text"
                  id="email"
                  name="email"
                />
              </label>

              <label htmlFor="" className="label label-email">
                Password:
                <input
                  className="input-password"
                  type="password"
                  id="password"
                  name="password"
                />
              </label>

              <p>Forgot password?</p>

              <div className="co-btn-submit">
                <button type="submit" className="btn-submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

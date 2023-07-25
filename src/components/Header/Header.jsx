import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../Routers/Routers";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { user, handleLogout } = useContext(AppContext)

  const toggleNavigation = () => {
    setIsToggle(!isToggle);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    if(user?.name){
        handleLogout();
    }else{
        navigate('/login')
    }
  }

  const goToForm = () => {
    navigate("form");
  };

  return (
    <header className={`tm-header ${isToggle && "show"}`} id="tm-header">
      <div className="tm-header-wrapper">
        <button
          onClick={toggleNavigation}
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="tm-site-header">
          <div className="mb-3 mx-auto tm-site-logo">
            <i className="fas fa-times fa-2x"></i>
          </div>
          <h1 className="text-center">Mi Blog</h1>
        </div>
        <nav className="tm-nav" id="tm-nav">
          <ul>
            <li className="tm-nav-item active">
              <NavLink to="/" className="tm-nav-link">
                <i className="fas fa-home"></i>
                Inicio
              </NavLink>
            </li>
            <li className="tm-nav-item">
              <NavLink to="form" className="tm-nav-link">
                <i className="fas fa-pen"></i>
                Nuevo Post
              </NavLink>
            </li>
            <li className="tm-nav-item">
              <NavLink to="/" className="tm-nav-link">
                <i className="fas fa-users"></i>
                Sobre Xtra
              </NavLink>
            </li>
            <li className="tm-nav-item">
              <NavLink to="/" className="tm-nav-link">
                <i className="far fa-comments"></i>
                Contactanos
              </NavLink>
            </li>
            <li className="tm-nav-item">
              <span onClick={handleLogin} className="tm-nav-link">
                <i className="fas fa-user"></i>
                {
                    !user?.name ? 'Iniciar Sesión' : 'Cerrar Sesión'
                }
              </span>
            </li>
          </ul>
        </nav>
        <div className="tm-mb-65">
          <a
            rel="nofollow"
            href="https://fb.com/templatemo"
            className="tm-social-link"
          >
            <i className="fab fa-facebook tm-social-icon"></i>
          </a>
          <a href="https://twitter.com" className="tm-social-link">
            <i className="fab fa-twitter tm-social-icon"></i>
          </a>
          <a href="https://instagram.com" className="tm-social-link">
            <i className="fab fa-instagram tm-social-icon"></i>
          </a>
          <a href="https://linkedin.com" className="tm-social-link">
            <i className="fab fa-linkedin tm-social-icon"></i>
          </a>
        </div>
        <p className="tm-mb-80 pr-5 text-white">
          Xtra Blog is a multi-purpose HTML template from TemplateMo website.
          Left side is a sticky menu bar. Right side content will scroll up and
          down.
        </p>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="/">DevFolio</a>
        </h1>
        {/* Décommentez la ligne ci-dessous si vous préférez utiliser un logo d'image */}
        {/* <a href="/" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Accueil</a></li>
            <li><a className="nav-link scrollto" href="#about">À propos</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#work">Travaux</a></li>
            <li><a className="nav-link scrollto" href="#blog">Blog</a></li>
            <li className="dropdown">
              <a href="#"><span>Menu déroulant</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Menu déroulant 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Sous-menu déroulant</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Sous-menu déroulant 1</a></li>
                    <li><a href="#">Sous-menu déroulant 2</a></li>
                    <li><a href="#">Sous-menu déroulant 3</a></li>
                    <li><a href="#">Sous-menu déroulant 4</a></li>
                    <li><a href="#">Sous-menu déroulant 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Menu déroulant 2</a></li>
                <li><a href="#">Menu déroulant 3</a></li>
                <li><a href="#">Menu déroulant 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;

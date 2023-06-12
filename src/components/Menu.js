import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Docs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/tutorial">Tutorial</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/community">Community</a>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu
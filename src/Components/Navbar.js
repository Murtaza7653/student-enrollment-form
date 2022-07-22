import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0F0326" }}>
        <div class="container-fluid">
          <img className='mx-3' src={logo} alt="logo" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-2" >
                <Link className="nav-link active" to="/">Enrollment Form</Link>
              </li>
              <li className="nav-item active mx-2">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav></>
  )

}
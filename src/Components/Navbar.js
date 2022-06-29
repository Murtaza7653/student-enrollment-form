import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#0F0326"}}>
        <img className='mx-3' src={logo} alt="logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-2" >
              <Link className="nav-link active" to="/">Enrollment Form</Link>
            </li>
            <div className="mx-2 vr" style={{ opacity: "100%", backgroundColor: "white" }}></div>
            <li className="nav-item active mx-2">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav></>
  )

}
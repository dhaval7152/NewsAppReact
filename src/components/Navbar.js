// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
const Navbar=()=>{
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link id="li1" className="navbar-brand" to="/">JatPat News</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
            <li id='li1' className="nav-item">
              <Link id='aNames' className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li id='li1' className="nav-item">
              <Link id='aNames' className="nav-link " aria-current="page" to="/business">Business</Link></li>
            <li id='li1' className="nav-item">
              <Link id='aNames' className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
           
            <li id='li1' className="nav-item">
              <Link id='aNames' className="nav-link a" aria-current="page" to="/science">Science</Link></li>
            <li id='li1' className="nav-item">
              <Link id='aNames' className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
            <li id='li1' className="nav-item">
              <Link id='aNames' className="nav-link " aria-current="page" to="/Technology">Technology</Link></li>
             
            
          </ul> 
          
        </div>
      </div>
    </nav>
    </div>
    )
  }

export default Navbar
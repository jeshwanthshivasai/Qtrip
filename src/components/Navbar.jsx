import React, { Component } from 'react'
import "../styles/qtrip.css"
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
            <div className="logo">
                <h1>QTrip</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#" className="login">Login Here</a></li>
                <li><a href="#" className="register-btn">Register</a></li>
            </ul>
        </nav>
      </>
    )
  }
}

export default Navbar;
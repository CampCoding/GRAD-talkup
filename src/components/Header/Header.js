import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
const Header = () => {
  return (
    <header>
      <div className="logo" style={{
        color:'white',
        fontSize:'20px'
      }}>
        {/* <img src={require("../../assets/images/logo.png")} alt="" /> */}
        Egyptian Tendering
      </div>
      <div className="links">
        <Link to="/">main</Link>
        <Link to="/"> add project</Link>
        <Link to="/">search for contractors</Link>
        <Link to="/about">who are we</Link>
      </div>
      <div className="logsign">
        <Link to={"/englogin"}>login</Link>
        <Link to={"/signup"}>sign up</Link>
      </div>
    </header>
  )
}

export default Header

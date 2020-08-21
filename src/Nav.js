import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Student Portal</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/notification">Notifications</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/cgpaCalculator">CGPA Calculator</Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="/resources" id="navbarDropdown" role="button" data-toggle="dropdown" >
          Resources
      </Link>
        <div className="dropdown-menu" >
        <Link className="dropdown-item" to="/">Languages</Link>
          <Link className="dropdown-item" to="/">Data Structures &amp; Algorithms</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/">Others</Link>
        </div>
      </li>
      <li className="nav-item">
      <Link className="nav-link disabled" to="/"  aria-disabled="true">Coming Soon...</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="User Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
    </form>
  </div>
</nav>
    );
}

export default Nav;
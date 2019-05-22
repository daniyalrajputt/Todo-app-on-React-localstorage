import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './menubar.css'

class MenuBar extends Component {
  render() {
    return (
      <div className="row">
        {/* <div className="col-md-6 text-center menubar">
        <NavLink to="/" >Add Todo</NavLink>
        </div>
        <div className="col-md-6 text-center menubar">
        <NavLink to="/View">View Todo</NavLink>
        </div> */}
        <nav className="navbar navbar-default" >
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink to="/" >Add Todo</NavLink></li>
              <li><NavLink to="/View">View Todo</NavLink></li>
            </ul>
          </div>
        </nav>
        
      </div>
    );
  }
}
export default MenuBar;
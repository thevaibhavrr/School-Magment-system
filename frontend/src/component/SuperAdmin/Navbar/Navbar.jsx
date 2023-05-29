import React from "react";
import { Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import "./navbar.css"

const MyNavbar = () => {
  return (
    <Navbar className=" container-fluid text-white main-navbar">
      <div className="d-flex container Navbarall">
        <div>
          <img
            src="https://www.aurasoftdigitech.com/img/logo-main.png"
            alt="Logo"
            width="170px"
          />
        </div>
        <div>
          <ul className="d-flex  gap-2">
            <li>
              <NavLink className="links" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/schoollist">
                School
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/addschool">
                Add School
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/">
                School Contect
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/">
                Payment
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/login">
                Inquirys/Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default MyNavbar;

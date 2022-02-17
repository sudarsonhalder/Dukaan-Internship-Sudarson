import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./images/Logo.png";
import { MdOutlineAssignment } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row navMain">
          <div className="col-10 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light  ">
              <NavLink className="navbar-brand" to="/">
                <img style={{ width: "150px" }} src={Logo} alt="logo"></img>
              </NavLink>
              <button
                style={{ border: "none", outline: "none", boxShadow: "none" }}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li
                    style={{
                      color: "white",
                      marginTop: "12px",
                      marginRight: "10px",
                    }}
                    className="nav-item active"
                  >
                    Sign In
                  </li>
                  <li className="nav-item active">
                    <button
                      style={{
                        backgroundColor: "#fff",
                        color: "#146EB4",
                        boxShadow: "none",
                      }}
                      className="btn"
                    >
                      Dukaan for PC
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

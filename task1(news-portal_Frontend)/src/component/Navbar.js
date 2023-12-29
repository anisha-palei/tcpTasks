import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="food">
          <h2 style={{ marginLeft: "59%",color:"white" }} className="navbar-brand">
            News Portal
          </h2>
        </div>
        <div
          style={{ marginLeft: "8%" }}
          className="collapse navbar-collapse rd"
          id="navbarSupportedContent"
        >
          <div className="mt-2">
            <ul className="navbar-nav">
              <li className="nav-item list ml-10 listt">
                <NavLink style={{color:"white" }} className="nav-a na change-color" to="/news">
                  Home
                </NavLink>
              </li>
              <li className="nav-item list ml-10 listt">
                <NavLink  style={{color:"white" }}  className="nav-a na change-color" to="/news/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item ml-3 listt">
                <NavLink   style={{color:"white" }} className="nav-a na change-color" to="news/technology">
                  Technology
                </NavLink>
              </li>
              <li className="nav-item ml-3 listt ">
                <NavLink  style={{color:"white" }}  className="nav-a na change-color" to="/news/sport">
                  Sport
                </NavLink>
              </li>
              <li className="nav-item ml-3 listt">
                <NavLink
                  style={{color:"white" }}  className="nav-a text na change-color"
                  to="/news/science"
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item ml-3 listt">
                <NavLink
                 style={{color:"white" }} 
                  className="nav-a text na change-color"
                  to="/news/international"
                >
                  International
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

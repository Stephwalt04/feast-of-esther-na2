import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "../Images/FEASTOFESTHERIMAGES/logo.jpeg";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setNavExpanded(false);
  };

  return (
    // <>
    //   <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
    //     <Container>
    //       <Navbar.Brand href="#">Navbar</Navbar.Brand>
    //     </Container>
    //   </Navbar>
    // </>
    <div className="bg-white nav has-sticky sticky-jump shadow-lg">
      <Container>
        <Navbar expand="lg" variant="light" sticky="top" expanded={navExpanded}>
          <Link
            to="/"
            className="d-inline-flex align-items-center text-decoration-none"
          >
            <Navbar.Brand>
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top rounded-pill board"
                alt="Logo"
              />
            </Navbar.Brand>
            <p className="feel">Feast Of Esther NA</p>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setNavExpanded(!navExpanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navs">
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                About Us
              </NavLink>
              <NavLink
                to="/founder"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                The Founder
              </NavLink>
              <NavLink
                to="/events"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Events
              </NavLink>
              <NavLink
                to="/registration"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Registration Form
              </NavLink>
              <NavLink
                to="/donate"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Donate
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;

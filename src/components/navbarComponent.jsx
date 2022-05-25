import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md" className="navbar-mobile">
        <NavbarBrand href="/">
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/logo-resized.png"
            width="100"
            height="auto"
            class="d-inline-block align-top"
            alt=""
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <a class="nav-item nav-link px-xl-5" href="#advantages">
                <div className="c-link">Advantages</div>
              </a>
            </NavItem>
            <NavItem>
              <a class="nav-item nav-link px-xl-5" href="#services">
                <div className="c-link">Supported services</div>
              </a>
            </NavItem>
            <NavItem>
              <a class="nav-item nav-link px-xl-5" href="#functionalities">
                <div className="c-link">functionalities</div>
              </a>
            </NavItem>
            <NavItem>
              <a class="nav-item nav-link px-xl-5" href="#architecture">
                <div className="c-link">architecture</div>
              </a>
            </NavItem>
            <NavItem>
              <a class="nav-item nav-link px-xl-5" href="#bottom-content">
                <div className="request">request a demo</div>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <nav class="navbar navbar-expand-md navbar-light bg-light navbar-desktop">
        <div class="container-fluid">
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/logo-resized.png"
            width="100"
            height="auto"
            class="d-inline-block align-top"
            alt=""
          />
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse flex-row-reverse"
            id="navbarCollapse"
          >
            <div class="navbar-nav py-5">
              <a class="nav-item nav-link px-xl-5" href="#advantages">
                <div className="c-link">Advantages</div>
              </a>
              <a class="nav-item nav-link px-xl-5" href="#services">
                <div className="c-link">Supported services</div>
              </a>
              <a class="nav-item nav-link px-xl-5" href="#functionalities">
                <div className="c-link">functionalities</div>
              </a>
              <a class="nav-item nav-link px-xl-5" href="#architecture">
                <div className="c-link">architecture</div>
              </a>
              <a class="nav-item nav-link px-xl-5" href="#bottom-content">
                <div className="request">request a demo</div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

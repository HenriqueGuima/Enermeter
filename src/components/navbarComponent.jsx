import React from "react";

export default function NavbarComponent() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
          <img
            src="../assets/images/logo-resized.png"
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

import React from "react";
const flag = require("../../assets/img/icons/common/flag-of-nicaragua.png");
const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-top  navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link pr-0"
              href="https://twitter.com/antonygiomarx"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="" src={flag} />
                </span>
                <div className="media-body  ml-2  d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold text-uppercase">
                    Made from Nicaragua
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;

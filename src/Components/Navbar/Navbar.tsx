import React from "react";
import flag from "../../assets/img/icons/common/flag-of-nicaragua.png";
const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-top  navbar-expand navbar-dark bg-primary">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto ml-md">
            <li className="nav-item dropdown">
              <a
                className="nav-link pr-0"
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj7u5zWr5TqAhULTTABHan9BCgQFjAKegQIAhAC&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FNicaragua&usg=AOvVaw0DgH4pbrZ8v8UmShJOSrOM"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="" src={flag} />
                  </span>
                  <div className="media-body  ml-2  d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold text-uppercase">
                      Nicaragua
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

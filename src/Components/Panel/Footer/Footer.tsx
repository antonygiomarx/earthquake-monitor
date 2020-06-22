import React from "react";
import AboutComponent from "./About";

const FooterComponent = ({ brand }: { brand: string }) => {
  return (
    <footer className="footer pt-0">
      <div className="row align-items-center justify-content-lg-between">
        <div className="col-lg-6">
          <div className="copyright text-center  text-lg-left  text-muted">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.nicatechsolutions.com"
              className="font-weight-bold ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {brand}
            </a>
          </div>
        </div>
        <AboutComponent />
      </div>
    </footer>
  );
};

export default FooterComponent;

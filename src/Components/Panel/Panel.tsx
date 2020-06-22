import React from "react";
import FooterComponent from "./Footer/Footer";
import BigCardComponent from "./Cards/BigCard";
import MiniCardComponent from "./Cards/MiniCard";
import MidCardComponent from "./Cards/MidCard";
import NavbarComponent from "../Navbar/Navbar";

const PanelComponent = ({ coords }: any) => {
  return (
    <div className="main-content" id="panel">
      <NavbarComponent />
      <MiniCardComponent coords={coords} />
      <div className="container-fluid mt--6">
        <div className="row">
          <BigCardComponent coords={coords} />
          <MidCardComponent coords={coords} />
        </div>
        <FooterComponent brand="Nicatech Solutions" />
      </div>
    </div>
  );
};

export default PanelComponent;
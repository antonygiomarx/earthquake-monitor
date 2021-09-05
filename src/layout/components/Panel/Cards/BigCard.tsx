import React from "react";
import { MapComponent } from "../../Maps/Map";

export const BigCardComponent = () => {
  return (
    <div className="col-xl">
      <div className="card bg-default">
        <div className="card-header bg-transparent">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-light text-uppercase ls-1 mb-1">
                Vista General
              </h6>
              <h5 className="h3 text-white mb-0">Mapa de Sismos</h5>
              <h6 className="text-uppercase text-muted ls-1 mb-1">
                Último mes
              </h6>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="col">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

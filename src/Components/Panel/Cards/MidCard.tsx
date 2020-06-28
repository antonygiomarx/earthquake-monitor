import React from "react";
import TableComponent from "./Table";

const MidCardComponent = ({ coords }: any) => {
  return (
    <div className="col-xl">
      <div className="card">
        <div className="card-header bg-transparent">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-uppercase text-muted ls-1 mb-1">
                Histórico (Sismos mayores a 1 grado en la escala de Richter)
              </h6>
              <h5 className="h3 mb-0">Últimos 6 meses</h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="overflow-auto">
            <div className="table-wrapper-scroll">
              <TableComponent data={coords} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(MidCardComponent);

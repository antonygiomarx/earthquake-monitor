import React from "react";
import moment from "moment";

const MidCardComponent = ({ coords }: any) => {
  return (
    <div className="col-xl">
      <div className="card">
        <div className="card-header bg-transparent">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-uppercase text-muted ls-1 mb-1">Histórico</h6>
              <h5 className="h3 mb-0">Últimos 6 meses</h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-items-center table-flush">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Lugar</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Lat/Lng</th>
                </tr>
              </thead>
              <tbody>
                {coords.map((coord: any, i: number) => {
                  const { properties, geometry } = coord;
                  return (
                    <tr key={i}>
                      <th scope="row">{properties.title}</th>
                      <td>
                        {moment(properties.time).startOf("hour").fromNow()}
                      </td>
                      <td>{`${geometry.coordinates[1]}, ${geometry.coordinates[0]}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MidCardComponent;

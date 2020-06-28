import React from "react";

const SmallMiniCard = ({ className, calc, subtitle }: any) => {
  return (
    <div className="col-xl col-md-6">
      <div className="card card-stats">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title text-uppercase text-muted mb-0">
                Total de Sismos
              </h5>
              <span className="h2 font-weight-bold mb-0">
                {calc ? calc.length : 0}
              </span>
            </div>
            <div className="col-auto">
              <div className={className}>
                <i className="ni ni-active-40"></i>
              </div>
            </div>
          </div>
          <p className="mt-3 mb-0 text-sm">
            <span className="text-nowrap">{subtitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default React.memo(SmallMiniCard);

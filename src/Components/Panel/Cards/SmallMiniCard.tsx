import React from "react";

interface MinicardProps {
  title: string;
  count: number;
  subtitle: string;
}

export const SmallMiniCard = ({ title, count, subtitle }: MinicardProps) => {
  return (
    <div className="col-xl col-md">
      <div className="card card-stats">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title text-uppercase text-muted mb-0">
                {title}
              </h5>
              <span className="h2 font-weight-bold mb-0">{count}</span>
            </div>
            <div className="col-auto">
              <div className="icon icon-shape">
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

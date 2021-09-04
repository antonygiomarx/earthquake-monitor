import React, { useContext } from "react";
import moment from "moment";
import { SmallMiniCard } from "./SmallMiniCard";
import { MarkersContext } from "../../../context/coords.context";
import { Eartquake } from "../../../models/marker.model";

export const MiniCardComponent = () => {
  const markers = useContext(MarkersContext);

  const lastDay: Eartquake[] = [];
  const lastMonth: Eartquake[] = [];
  const lastSixMonths: Eartquake[] = [];

  markers.forEach((marker) => {
    // TODO: refactor this
    const { properties } = marker;
    if (
      moment(properties.time).startOf("day").fromNow().trim() === "a day ago" ||
      moment(properties.time).startOf("day").fromNow().trim().includes("hour")
    ) {
      lastDay.push(marker);
    } else if (
      moment(properties.time).startOf("days").fromNow().trim().includes("days")
    ) {
      lastMonth.push(marker);
    } else if (
      moment(properties.time).startOf("months").fromNow().trim() ===
        "2 months ago" ||
      "3 months ago" ||
      "4 months ago" ||
      "5 months ago" ||
      "6 months ago"
    ) {
      lastSixMonths.push(marker);
    }
  });
  return (
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row">
            <SmallMiniCard
              className="icon icon-shape bg-gradient-red text-white rounded-circle shadow"
              calc={lastDay}
              subtitle="Estadísticas del último día"
            ></SmallMiniCard>
            <SmallMiniCard
              className={
                "icon icon-shape bg-gradient-red text-white rounded-circle shadow"
              }
              calc={[...lastMonth, ...lastDay]}
              subtitle="Estadísticas del último mes"
            ></SmallMiniCard>
            <SmallMiniCard
              className={
                "icon icon-shape bg-gradient-orange text-white rounded-circle shadow"
              }
              calc={lastSixMonths}
              subtitle="Estadísticas de los últimos 6 meses"
            ></SmallMiniCard>
          </div>
        </div>
      </div>
    </div>
  );
};

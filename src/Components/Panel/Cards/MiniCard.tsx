import React from "react";
import moment from "moment";
import SmallMiniCard from "./SmallMiniCard";

const MiniCardComponent = ({ coords }: any) => {
  const lastDay: any[] = [];
  const lastMonth: string | any[] = [];
  const lastSixMonths: any[] = [];
  coords.forEach((props: any) => {
    const { properties } = props;
    if (
      moment(properties.time).startOf("day").fromNow().trim() === "a day ago" ||
      moment(properties.time).startOf("day").fromNow().trim().includes("hour")
    ) {
      lastDay.push(props);
    } else if (
      moment(properties.time).startOf("days").fromNow().trim().includes("days")
    ) {
      lastMonth.push(props);
    } else if (
      moment(properties.time).startOf("months").fromNow().trim() ===
        "2 months ago" ||
      "3 months ago" ||
      "4 months ago" ||
      "5 months ago" ||
      "6 months ago"
    ) {
      lastSixMonths.push(props);
    }
  });
  return (
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row">
            <SmallMiniCard
              className={
                "icon icon-shape bg-gradient-red text-white rounded-circle shadow"
              }
              calc={lastDay}
              title="TOTAL DE SISMOS"
              subtitle="Estadísticas del último día"
            ></SmallMiniCard>
            <SmallMiniCard
              className={
                "icon icon-shape bg-gradient-red text-white rounded-circle shadow"
              }
              calc={[...lastMonth, ...lastDay]}
              title="TOTAL DE SISMOS"
              subtitle="Estadísticas del último mes"
            ></SmallMiniCard>
            <SmallMiniCard
              className={
                "icon icon-shape bg-gradient-orange text-white rounded-circle shadow"
              }
              calc={lastSixMonths}
              title="TOTAL DE SISMOS"
              subtitle="Estadísticas de los últimos 6 meses"
            ></SmallMiniCard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiniCardComponent;

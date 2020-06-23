import React from "react";
import { MDBDataTable } from "mdbreact";
import moment from "moment";

const TableComponent = ({ data }: any) => {
  const columns = [
    {
      label: "Magnitud",
      field: "Magnitud",
      sort: "asc",
      width: 10,
    },
    {
      label: "Lugar",
      field: "Lugar",
      sort: "asc",
      width: 150,
    },
    {
      label: "Fecha",
      field: "Fecha",
      sort: "asc",
      width: 150,
    },
    {
      label: "Lat/Lng",
      field: "Lat/Lng",
      sort: "asc",
      width: 150,
    },
  ];
  let information = data.map((data: any) => {
    return {
      Magnitud: data.properties.mag,
      Lugar: data.properties.title.split("-")[1],
      Fecha: moment(data.properties.time).startOf("hour").fromNow(),
      "Lat/Lng": `${data.geometry.coordinates[1]}, ${data.geometry.coordinates[0]}`,
    };
  });
  information = {
    columns,
    rows: information,
  };
  return (
    <MDBDataTable
      scrollY
      maxHeight="310px"
      striped
      bordered
      small
      data={information}
      paging={false}
      responsive
      entries={100}
    />
  );
};

export default TableComponent;

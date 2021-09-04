import React, { useContext } from "react";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { MarkersContext } from "../../../context/coords.context";

const TableComponent = () => {
  const markers = useContext(MarkersContext);

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
  let information = markers.map((marker) => {
    return {
      Magnitud: marker.properties.mag,
      Lugar: marker.properties.title.split("-")[1],
      Fecha: moment(marker.properties.time).startOf("hour").fromNow(),
      "Lat/Lng": `${marker.geometry.coordinates[1]}, ${marker.geometry.coordinates[0]}`,
    };
  });
  const data = {
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
      data={data}
      paging={false}
      responsive
      entries={100}
    />
  );
};

export default TableComponent;

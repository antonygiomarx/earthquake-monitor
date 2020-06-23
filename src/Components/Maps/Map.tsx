import React from "react";
import moment from "moment";
const {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} = require("@react-google-maps/api");
require("dotenv").config();

const containerStyle = {
  height: "500px",
  maxWidth: "100%",
  maxHeight: "100%",
};

const initCoords = { lat: 12.1328201, lng: -86.2503967 };

const mapKey = "AIzaSyBeZRY2OzKDEPhrtjjD6EaKWN_TNrvVNvY";
const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
};
const lastMonth: any[] = [];
const MapComponent = ({ coords }: any) => {
  coords.forEach((prop: any) => {
    const { properties } = prop;
    if (
      moment(properties.time)
        .startOf("day")
        .fromNow()
        .trim()
        .includes("hour") ||
      moment(properties.time).startOf("day").fromNow().trim() === "a day ago" ||
      moment(properties.time).startOf("days").fromNow().trim().includes("days")
    ) {
      lastMonth.push(prop);
    }
  });
  return (
    <div>
      <LoadScript googleMapsApiKey={mapKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initCoords}
          zoom={5.5}
        >
          <MarkerClusterer options={options}>
            {(cluster: Cluster) => {
              return lastMonth.map((prop: any, i: number) => {
                const { title } = prop.properties;
                const { coordinates } = prop.geometry;
                const { properties } = prop;
                const finalCoord = {
                  lat: coordinates[1],
                  lng: coordinates[0],
                };
                return (
                  <Marker
                    position={finalCoord}
                    title={`${title} - ${moment(properties.time)
                      .startOf("hours")
                      .fromNow()}`}
                    key={i}
                  />
                );
              });
            }}
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(MapComponent);

import React from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";

require("dotenv").config();

const containerStyle = {
  height: "500px",
  maxWidth: "100%",
  maxHeight: "100%",
};
const lat: number = 12.1328201;
const lng: number = -86.2503967;
const initCoords = { lat, lng };

const mapKey = "AIzaSyBeZRY2OzKDEPhrtjjD6EaKWN_TNrvVNvY";
const options = {};

const MapComponent = ({ coords }: any) => {
  return (
    <div>
      <LoadScript googleMapsApiKey={mapKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initCoords}
          zoom={5.5}
        >
          <MarkerClusterer options={options}>
            {(cluster) => {
              return coords.map((prop: any, i: number) => {
                const { title } = prop.properties;
                const { coordinates } = prop.geometry;
                const finalCoord = {
                  lat: coordinates[1],
                  lng: coordinates[0],
                };
                return <Marker position={finalCoord} title={title} key={i} />;
              });
            }}
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(MapComponent);

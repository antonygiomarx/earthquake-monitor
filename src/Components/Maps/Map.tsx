import React from "react";
const {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} = require("@react-google-maps/api");
const mapCluster = require("../../assets/img/icons/common/map-cluster-icon.png");
require("dotenv").config();

const containerStyle = {
  height: "500px",
  maxWidth: "100%",
  maxHeight: "100%",
};

const initCoords = { lat: 12.1328201, lng: -86.2503967 };

const mapKey = "AIzaSyBeZRY2OzKDEPhrtjjD6EaKWN_TNrvVNvY";
const options = {
  imagePath: mapCluster,
};

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
            {(cluster: any) => {
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

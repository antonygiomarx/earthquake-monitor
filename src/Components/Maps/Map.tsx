import React from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";
import mapCluster from "../../assets/img/icons/common/map-cluster-icon.png";
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

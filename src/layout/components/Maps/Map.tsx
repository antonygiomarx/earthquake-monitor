import React from "react";
import moment from "moment";
import { nanoid as uuid } from "nanoid";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";

import { useContext } from "react";
import { MarkersContext } from "../../../context/marker.context";
import { Eartquake } from "../../../models/marker.model";
import { parseCoordinates } from "../../../utils/coordinates";

const marker =
  "https://unpkg.com/@googlemaps/markerclustererplus@1.0.3/images/m3.png";

const containerStyle = {
  height: "500px",
  maxWidth: "100%",
  maxHeight: "100%",
};

const initCoords = { lat: 12.1328201, lng: -86.2503967 };

const mapKey = process.env.REACT_APP_GOOGLE_MAP_KEY || "";

const lastMonth = [] as Eartquake[];

export const MapComponent = () => {
  const markers = useContext(MarkersContext);

  markers.forEach((marker) => {
    const { properties } = marker;
    if (
      moment(properties.time)
        .startOf("day")
        .fromNow()
        .trim()
        .includes("hour") ||
      moment(properties.time).startOf("day").fromNow().trim() === "a day ago" ||
      moment(properties.time).startOf("days").fromNow().trim().includes("days")
    ) {
      lastMonth.push(marker);
    }
  });
  return (
    <LoadScript googleMapsApiKey={mapKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={initCoords}
        zoom={5.5}
      >
        <MarkerClusterer>
          {(cluster) => {
            return lastMonth.map(
              ({
                geometry: { coordinates },
                properties: { title, time, mag },
              }) => (
                <Marker
                  position={parseCoordinates(coordinates)}
                  title={`${title} - ${moment(time)
                    .startOf("hours")
                    .fromNow()}`}
                  key={uuid()}
                  clusterer={cluster}
                  icon={marker}
                  options={{
                    label: {
                      text: `${mag}`,
                      color: "white",
                    },
                  }}
                />
              )
            );
          }}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

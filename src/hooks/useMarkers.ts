import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import moment from "moment";
import { Eartquake, EarthquakeServiceResponse } from "../models/marker.model";

export const useMarkers = () => {
  //TODO: refactor request to service
  const [markers, setMarkers] = useState<Eartquake[]>([]);

  let starttime: string | Array<string> = moment()
    .subtract(6, "month")
    .calendar()
    .split("/");
  let endtime: string | Array<string> = moment()
    .add(1, "day")
    .format("L")
    .split("/");

  starttime = `${starttime[2]}-${starttime[0]}-${starttime[1]}`;
  endtime = `${endtime[2]}-${endtime[0]}-${endtime[1]}`;

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      const { data } = (await axios.get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?minmagnitude=1&format=geojson&starttime=${starttime}&endtime=${endtime}&latitude=12.865416&longitude=-85.207229&maxradiuskm=1000`
      )) as AxiosResponse<EarthquakeServiceResponse>;
      const { features } = data;
      setMarkers(features);
    })();
    return () => {
      ac.abort();
    };
  }, [endtime, starttime]);

  return markers;
};

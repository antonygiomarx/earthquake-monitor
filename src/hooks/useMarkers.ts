import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Eartquake, EarthquakeServiceResponse } from "../models/marker.model";
import { DateGenerator } from "../utils/date";
import { Config } from "../config/config";

export const useMarkers = () => {
  const [markers, setMarkers] = useState<Eartquake[]>([]);

  const config = new Config();
  const dateGenerator = new DateGenerator();

  const startTime = dateGenerator.getFromMonth(-6);
  const endTime = dateGenerator.getFromMonth();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      const { data } = (await axios.get(
        config.earthquakeEndpoint({
          startTime,
          endTime,
          latitude: 12.865416,
          longitude: -85.207229,
          maxRadiusKm: 500,
          minMagnitude: 1,
        })
      )) as AxiosResponse<EarthquakeServiceResponse>;

      const { features } = data;

      setMarkers(features);
    })();
    return () => {
      ac.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return markers;
};

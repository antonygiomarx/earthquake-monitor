import React, { useState, useEffect } from "react";
import axios from "axios";
import PanelComponent from "./Components/Panel/Panel";
import moment from "moment";

function App() {
  const [markers, setMarkers] = useState([]);
  let count = 0;

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
    (async () => {
      const { data } = await axios.get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?minmagnitude=5&format=geojson&starttime=${starttime}&endtime=${endtime}&latitude=12.865416&longitude=-85.207229&maxradiuskm=750`
      );
      const { features } = data;
      setMarkers(features);
    })();
  }, [count, endtime, starttime]);
  return <PanelComponent coords={markers} />;
}

export default App;

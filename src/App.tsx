import React from "react";
import PanelComponent from "./components/Panel/Panel";
import { MarkersContext } from "./context/marker.context";
import { useMarkers } from "./hooks/useMarkers";

function App() {
  const markers = useMarkers();

  return (
    <MarkersContext.Provider value={markers}>
      <PanelComponent />
    </MarkersContext.Provider>
  );
}

export default App;

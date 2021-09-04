import React from "react";
import PanelComponent from "./Components/Panel/Panel";
import { MarkersContext } from "./context/coords.context";
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

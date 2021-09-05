export const parseCoordinates = (coords: number[]) => {
  return {
    lat: coords[1],
    lng: coords[0],
  };
};

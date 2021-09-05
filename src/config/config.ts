interface EartquakeEndpointParams {
  startTime: string;
  endTime: string;
  latitude: string | number;
  longitude: string | number;
  minMagnitude: number;
  maxRadius?: string;
  maxRadiusKm?: string | number;
}

export class Config {
  earthquakeEndpoint({
    startTime,
    endTime,
    latitude,
    longitude,
    minMagnitude,
    maxRadiusKm,
  }: EartquakeEndpointParams) {
    return `https://earthquake.usgs.gov/fdsnws/event/1/query?minmagnitude=${minMagnitude}&format=geojson&starttime=${startTime}&endtime=${endTime}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${maxRadiusKm}`;
  }
}

export interface EarthquakeServiceResponse {
  type: string;
  metadata: Metadata;
  features: Eartquake[];
  bbox: number[];
}

export interface Eartquake {
  type: FeatureType;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

export interface Geometry {
  type: GeometryType;
  coordinates: number[];
}

export enum GeometryType {
  Point = "Point",
}

export interface Properties {
  mag: number;
  place: null | string;
  time: number;
  updated: number;
  tz: null;
  url: string;
  detail: string;
  felt: number | null;
  cdi: number | null;
  mmi: number | null;
  alert: Alert | null;
  status: Status;
  tsunami: number;
  sig: number;
  net: Net;
  code: string;
  ids: string;
  sources: Sources;
  types: string;
  nst: null;
  dmin: number;
  rms: number;
  gap: number;
  magType: MagType;
  type: PropertiesType;
  title: string;
}

export enum Alert {
  Green = "green",
}

export enum MagType {
  MB = "mb",
  Ml = "ml",
  Mww = "mww",
}

export enum Net {
  Us = "us",
}

export enum Sources {
  AtPtUsUsauto = ",at,pt,us,usauto,",
  PtUs = ",pt,us,",
  Us = ",us,",
  UsUsauto = ",us,usauto,",
  UsUsautoAtPt = ",us,usauto,at,pt,",
  UsUsautoPt = ",us,usauto,pt,",
  UsUsautoPtAt = ",us,usauto,pt,at,",
}

export enum Status {
  Reviewed = "reviewed",
}

export enum PropertiesType {
  Earthquake = "earthquake",
}

export enum FeatureType {
  Feature = "Feature",
}

export interface Metadata {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
}

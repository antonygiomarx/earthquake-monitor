import { createContext } from "react";
import { Eartquake } from "../models/marker.model";

export const MarkersContext = createContext<Eartquake[]>([]);

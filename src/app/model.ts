import { ReactNode } from "react";

export interface WeatherDay {
  date: string;
  image: ReactNode;
  min_temp: number;
  max_temp: number;
}

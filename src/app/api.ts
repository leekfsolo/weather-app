import { doGet } from "../common/base/api";
import { Coords } from "./model";

export const doGetCities = () =>
  doGet(process.env.REACT_APP_CITY_BASE_URL || "");

export const doGetWeatherDataByCity = (city: string, units: string) =>
  doGet(process.env.REACT_APP_WEATHER_BASE_URL || "", {
    appid: process.env.REACT_APP_MY_API_KEYS,
    q: city,
    units,
  });

export const doGetWeatherDataByCoords = (coords: Coords, units: string) =>
  doGet(process.env.REACT_APP_WEATHER_BASE_URL || "", {
    appid: process.env.REACT_APP_MY_API_KEYS,
    lon: coords.lon,
    lat: coords.lat,
    units,
  });

import React, { FC, useEffect, useState } from "react";

import { ReactComponent as Navigate } from "../../common/ui/assets/images/navigate.svg";
import { ReactComponent as Location } from "../../common/ui/assets/images/location.svg";
import Cloud from "../../common/ui/assets/images/weather-set/cloud.png";

import styles from "./Summary.module.scss";
import Searching from "./Searching";
import { useSelector } from "react-redux";
import { weatherState } from "../../weatherSlice/weatherSlice";
import { Coords, WeatherDay } from "../model";
import { getDateFormat } from "../../common/utils/helpers/getDateFormat";
import { AxiosResponse } from "axios";
import { doGetWeatherDataByCoords } from "../api";
import { Image } from "react-bootstrap";

interface Props {
  data: WeatherDay;
  manageWeatherData: (responseData: AxiosResponse) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const Summary: FC<Props> = (props: Props) => {
  const { data, setIsLoading, manageWeatherData } = props;
  const { icon, temps, status, date: dateStr } = data;
  const { day, date, month } = getDateFormat(dateStr);
  const temp = temps.reduce((tempA, tempB) => tempA + tempB, 0) / temps.length;

  const [isShowSearching, setIsShowSearching] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coords>({ lon: -1, lat: -1 });

  const unit = useSelector(
    (state: { weather: weatherState }) => state.weather.unit
  );
  const currentCity = useSelector(
    (state: { weather: weatherState }) => state.weather.city
  );

  const getCurrentPos = () => {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      const currCoords: Coords = {
        lon: pos.coords.longitude,
        lat: pos.coords.latitude,
      };

      setCoords(currCoords);
    });
  };

  useEffect(() => {
    let units = "metric";
    if (unit === "℉") units = "imperial";

    if (coords.lat !== -1 && coords.lon !== -1) {
      const fetchData = async () => {
        setIsLoading(true);
        const responseData = await doGetWeatherDataByCoords(coords, units);
        manageWeatherData(responseData);

        setIsLoading(false);
      };

      fetchData();
    }
  }, [coords, unit, manageWeatherData, setIsLoading]);

  return (
    <div
      className={`${styles.summary} position-relative h-100 overflow-hidden`}
    >
      {isShowSearching && <Searching setIsShowSearching={setIsShowSearching} />}
      <div
        className={`${styles.headings} d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between mb-0 gap-2`}
      >
        <button onClick={() => setIsShowSearching(true)} className="fs-6">
          Search for places
        </button>
        <Navigate onClick={getCurrentPos} />
      </div>
      <div
        className={`${styles.content} d-flex flex-column align-items-center justify-content-center`}
      >
        <Image alt="" src={icon} fluid />
        <h1>
          {temp.toFixed(1)}
          <span>{unit}</span>
        </h1>
        <h2>{status}</h2>
        <div className={styles.info}>
          <div className="d-flex flex-column align-items-center justify-content-between gap-3 fw-bold mb-4">
            <span>Today</span>
            <span>&bull;</span>
            <span>{`${day}, ${date} ${month}`}</span>
          </div>
          <p className="d-flex align-items-center justify-content-center gap-1">
            <Location />
            {currentCity}
          </p>
        </div>
      </div>

      <img
        src={Cloud}
        alt="cloud-1"
        className={`${styles.decoration} ${styles["decoration-1"]}`}
      />
      <img
        src={Cloud}
        alt="cloud-2"
        className={`${styles.decoration} ${styles["decoration-2"]}`}
      />
      <img
        src={Cloud}
        alt="cloud-3"
        className={`${styles.decoration} ${styles["decoration-3"]}`}
      />
      <img
        src={Cloud}
        alt="cloud-4"
        className={`${styles.decoration} ${styles["decoration-4"]}`}
      />
    </div>
  );
};

export default Summary;

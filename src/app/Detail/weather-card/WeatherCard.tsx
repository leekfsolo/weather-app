import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { weatherState } from "../../../weatherSlice/weatherSlice";
import { WeatherDay } from "../../model";

import styles from "./WeatherCard.module.scss";

interface Props {
  children?: ReactNode;
  day: WeatherDay;
}

const WeatherCard: FC<Props> = (props: Props) => {
  const { day } = props;
  const unit = useSelector(
    (state: { weather: weatherState }) => state.weather.unit
  );
  const temps = day.temps.sort((a, b) => a - b);
  const min_temp = temps[0];
  const max_temp = temps[temps.length - 1];

  return (
    <div className={styles.card}>
      <p className={styles.date}>{day.date}</p>
      <img alt="" src={day.icon} />
      <div className={styles["temp-info"]}>
        <p className={styles["temp-max"]}>
          {max_temp.toFixed(1)}
          <span>{unit}</span>
        </p>
        <p className={styles["temp-min"]}>
          {min_temp.toFixed(1)}
          <span>{unit}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;

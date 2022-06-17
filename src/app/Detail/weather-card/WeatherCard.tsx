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
  const unit = useSelector((state: any) => state.weather.unit);

  return (
    <div className={styles.card}>
      <p className={styles.date}>{day.date}</p>
      {day.image}
      <div className={styles["temp-info"]}>
        <p className={styles["temp-max"]}>
          {day.max_temp}
          <span>{unit}</span>
        </p>
        <p className={styles["temp-min"]}>
          {day.min_temp}
          <span>{unit}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;

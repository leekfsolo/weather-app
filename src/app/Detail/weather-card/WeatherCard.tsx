import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { getDateFormat } from "../../../common/utils/helpers/getDateFormat";
import { weatherState } from "../../../weatherSlice/weatherSlice";
import { WeatherDay } from "../../model";

import styles from "./WeatherCard.module.scss";

interface Props {
  children?: ReactNode;
  weatherDay: WeatherDay;
  isTomorrow: boolean;
}

const WeatherCard: FC<Props> = (props: Props) => {
  const { weatherDay, isTomorrow } = props;
  const { temps, icon, date: dateStr } = weatherDay;
  const { day, date, month } = getDateFormat(dateStr);

  const unit = useSelector(
    (state: { weather: weatherState }) => state.weather.unit
  );
  const sortTemps = temps.sort((a, b) => a - b);
  const min_temp = sortTemps[0];
  const max_temp = sortTemps[temps.length - 1];

  return (
    <div className={styles.card}>
      <p className={styles.date}>{`${
        isTomorrow ? "Tomorrow" : `${day}, ${date} ${month}`
      }`}</p>
      <img alt="" src={icon} />
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

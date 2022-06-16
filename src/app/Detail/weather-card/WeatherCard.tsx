import React, { FC, ReactNode } from "react";
import { WeatherDay } from "../../model";

import styles from "./WeatherCard.module.scss";

interface Props {
  children?: ReactNode;
  day: WeatherDay;
}

const WeatherCard: FC<Props> = (props: Props) => {
  const { day } = props;

  return (
    <div className={styles.card}>
      <p className={styles.date}>{day.date}</p>
      {day.image}
      <div className={styles["temp-info"]}>
        <p className={styles["temp-max"]}>
          {day.max_temp}
          <span>℃</span>
        </p>
        <p className={styles["temp-min"]}>
          {day.min_temp}
          <span>℃</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;

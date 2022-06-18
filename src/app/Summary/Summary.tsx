import React, { FC, useState } from "react";

import { ReactComponent as Navigate } from "../../common/ui/assets/images/navigate.svg";
import { ReactComponent as Location } from "../../common/ui/assets/images/location.svg";
import Cloud from "../../common/ui/assets/images/weather-set/cloud.png";

import styles from "./Summary.module.scss";
import Searching from "./Searching";
import useGetCurrentPosition from "../../common/utils/helpers/useGetCurrentPosition";
import { useSelector } from "react-redux";
import { weatherState } from "../../weatherSlice/weatherSlice";
import { WeatherDay } from "../model";
import { getDateFormat } from "../../common/utils/helpers/getDateFormat";

interface Props {
  data: WeatherDay;
}

const Summary: FC<Props> = (props: Props) => {
  const { data } = props;
  const { icon, temps, status, date: dateStr } = data;
  const temp = temps.reduce((tempA, tempB) => tempA + tempB, 0) / temps.length;
  const { day, date, month } = getDateFormat(dateStr);

  const [isShowSearching, setIsShowSearching] = useState<Boolean>(false);
  const unit = useSelector(
    (state: { weather: weatherState }) => state.weather.unit
  );
  const currentCity = useSelector(
    (state: { weather: weatherState }) => state.weather.city
  );

  // const pos = useGetCurrentPosition();
  // const getCurrentPos = () => console.log(pos);

  return (
    <div className={styles.summary}>
      {isShowSearching && <Searching setIsShowSearching={setIsShowSearching} />}
      <div className={styles.headings}>
        <button onClick={() => setIsShowSearching(true)}>
          Search for places
        </button>
        <Navigate />
      </div>
      <div className={styles.content}>
        <img alt="" src={icon} />
        <h1>
          {temp.toFixed(1)}
          <span>{unit}</span>
        </h1>
        <h2>{status}</h2>
        <div className={styles.info}>
          <div className={styles.date}>
            <span>Today</span>
            <span>&bull;</span>
            <span>{`${day}, ${date} ${month}`}</span>
          </div>
          <p>
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

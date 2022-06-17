import React, { useState } from "react";

import { ReactComponent as Navigate } from "../../common/ui/assets/images/navigate.svg";
import { ReactComponent as Location } from "../../common/ui/assets/images/location.svg";
import { ReactComponent as SunnyCloudRain } from "../../common/ui/assets/images/weather-set/SunnyCloudRain.svg";
import Cloud from "../../common/ui/assets/images/weather-set/cloud.png";

import styles from "./Summary.module.scss";
import Searching from "./Searching";
import useGetCurrentPosition from "../../common/utils/helpers/useGetCurrentPosition";
import { useSelector } from "react-redux";
import { weatherState } from "../../weatherSlice/weatherSlice";

const Summary = () => {
  const [isShowSearching, setIsShowSearching] = useState<Boolean>(false);
  const unit = useSelector((state: any) => state.weather.unit);
  const currentCity = useSelector((state: any) => state.weather.city);

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
        <SunnyCloudRain />
        <h1>
          15<span>{unit}</span>
        </h1>
        <h2>Shower</h2>
        <div className={styles.info}>
          <div className={styles.date}>
            <span>Today</span>
            <span>&bull;</span>
            <span>Fri, 5 Jun</span>
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

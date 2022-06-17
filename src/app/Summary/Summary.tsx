import React, { useState } from "react";

import { ReactComponent as Navigate } from "../../common/ui/assets/images/navigate.svg";
import { ReactComponent as Location } from "../../common/ui/assets/images/location.svg";
import { ReactComponent as SunnyCloudRain } from "../../common/ui/assets/images/weather-set/SunnyCloudRain.svg";
import Cloud from "../../common/ui/assets/images/weather-set/cloud.png";

import styles from "./Summary.module.scss";
import Searching from "./Searching";

const Summary = () => {
  const [isShowSearching, setIsShowSearching] = useState<Boolean>(false);

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
          15<span>℃</span>
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
            Helsinki
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

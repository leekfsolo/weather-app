import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as SunnyCloud } from "../../common/ui/assets/images/weather-set/SunnyCloud.svg";
import { ReactComponent as CloudRain } from "../../common/ui/assets/images/weather-set/CloudRain.svg";
import { ReactComponent as SunnyCloudRainSnow } from "../../common/ui/assets/images/weather-set/SunnyCloudRainSnow.svg";
import { ReactComponent as SunnyCloudThunder } from "../../common/ui/assets/images/weather-set/SunnyCloudThunder.svg";
import { ReactComponent as NearMe } from "../../common/ui/assets/images/near-me.svg";

import styles from "./Detail.module.scss";
import { WeatherDay } from "../model";

const Detail = () => {
  const [nextFiveDays, setNextFiveDays] = useState<Array<WeatherDay>>([
    {
      date: "Tomorrow",
      image: <SunnyCloudRainSnow />,
      min_temp: 11,
      max_temp: 16,
    },
    {
      date: "Sun, 7 Jun",
      image: <SunnyCloudRainSnow />,
      min_temp: 11,
      max_temp: 16,
    },
    {
      date: "Mon, 8 Jun",
      image: <SunnyCloudThunder />,
      min_temp: 11,
      max_temp: 16,
    },
    {
      date: "Tue, 9 Jun",
      image: <SunnyCloud />,
      min_temp: 11,
      max_temp: 16,
    },
    {
      date: "Wed, 10 Jun",
      image: <CloudRain />,
      min_temp: 11,
      max_temp: 16,
    },
  ]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current)
      progressBarRef.current.style.width =
        progressBarRef.current.getAttribute("aria-valuenow") + "%";
  }, []);

  return (
    <section className={styles.detail}>
      <div className={styles.temperature}>
        <p className={styles.celsius}>℃</p>
        <p className={styles.fahrenheit}>℉</p>
      </div>
      <div className={styles["weather-card"]}>
        {nextFiveDays.map((day, idx) => (
          <div className={styles.card} key={idx}>
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
        ))}
      </div>

      <div className={styles["weather-highlights"]}>
        <h3>Today's Highlights</h3>
        <div className={styles.highlights}>
          <div className={styles.box}>
            <h4>Wind status</h4>
            <p className={styles.data}>
              <span>7</span>mph
            </p>
            <p className={styles.extend}>
              <NearMe />
              WSW
            </p>
          </div>
          <div className={styles.box}>
            <h4>Humidity</h4>
            <p className={styles.data}>
              <span>84</span>%
            </p>
            <div className={styles["progress-bar"]}>
              <div className={styles.indicator}>
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.bar}
                  role="progressbar"
                  aria-valuenow={84}
                  ref={progressBarRef}
                ></div>
              </div>
              <div className={styles.unit}>%</div>
            </div>
          </div>
          <div className={styles.box}>
            <h4>Visibility</h4>
            <p className={styles.data}>
              <span>6,4 </span>miles
            </p>
          </div>
          <div className={styles.box}>
            <h4>Air Pressure</h4>
            <p className={styles.data}>
              <span>998 </span>mb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

import React, { useState } from "react";

import { ReactComponent as SunnyCloud } from "../../common/ui/assets/images/weather-set/SunnyCloud.svg";
import { ReactComponent as CloudRain } from "../../common/ui/assets/images/weather-set/CloudRain.svg";
import { ReactComponent as SunnyCloudRainSnow } from "../../common/ui/assets/images/weather-set/SunnyCloudRainSnow.svg";
import { ReactComponent as SunnyCloudThunder } from "../../common/ui/assets/images/weather-set/SunnyCloudThunder.svg";

import styles from "./Detail.module.scss";
import { WeatherDay } from "../model";
import WeatherCard from "./weather-card";
import HighlightBox from "./highlight-box";
import { useDispatch } from "react-redux";
import { celsius, fahrenheit } from "../../weatherSlice/weatherSlice";

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
  const dispatch = useDispatch();

  return (
    <section className={styles.detail}>
      <div className={styles.temperature}>
        <p className={styles.celsius} onClick={() => dispatch(celsius())}>
          ℃
        </p>
        <p className={styles.fahrenheit} onClick={() => dispatch(fahrenheit())}>
          ℉
        </p>
      </div>
      <div className={styles["weather-card"]}>
        {nextFiveDays.map((day, idx) => (
          <WeatherCard day={day} key={idx} />
        ))}
      </div>

      <div className={styles["weather-highlights"]}>
        <h3>Today's Highlights</h3>
        <div className={styles.highlights}>
          <HighlightBox
            title="Wind status"
            data={{ unit: "mph", value: 7 }}
            extend
          />
          <HighlightBox
            title="Humidity"
            data={{ unit: "%", value: 84 }}
            progressBar
          />
          <HighlightBox
            title="Visibility"
            data={{ unit: "miles", value: 6.4 }}
          />
          <HighlightBox
            title="Air Pressure"
            data={{ unit: "mb", value: 998 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Detail;

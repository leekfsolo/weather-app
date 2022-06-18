import React, { FC } from "react";

import styles from "./Detail.module.scss";
import { WeatherDay } from "../model";
import WeatherCard from "./weather-card";
import HighlightBox from "./highlight-box";
import { useDispatch, useSelector } from "react-redux";
import {
  celsius,
  fahrenheit,
  weatherState,
} from "../../weatherSlice/weatherSlice";

interface Props {
  data: Array<WeatherDay>;
}

const Detail: FC<Props> = (props: Props) => {
  const { data } = props;
  const [todayData, ...otherData] = data;
  const { humidity, pressure, visibility, wind } = todayData;

  const isCelsius = useSelector(
    (state: { weather: weatherState }) => state.weather.unit === "℃"
  );
  const dispatch = useDispatch();

  return (
    <section className={styles.detail}>
      <div className={styles.temperature}>
        <p
          className={isCelsius ? styles.active : undefined}
          onClick={() => dispatch(celsius())}
        >
          ℃
        </p>
        <p
          className={!isCelsius ? styles.active : undefined}
          onClick={() => dispatch(fahrenheit())}
        >
          ℉
        </p>
      </div>
      <div className={styles["weather-card"]}>
        {otherData.map((day, idx) => (
          <WeatherCard weatherDay={day} key={idx} isTomorrow={idx === 0} />
        ))}
      </div>

      <div className={styles["weather-highlights"]}>
        <h3>Today's Highlights</h3>
        <div className={styles.highlights}>
          <HighlightBox
            title="Wind status"
            data={{ unit: "mph", value: wind }}
            extend
          />
          <HighlightBox
            title="Humidity"
            data={{ unit: "%", value: humidity }}
            progressBar
          />
          <HighlightBox
            title="Visibility"
            data={{ unit: "miles", value: visibility }}
          />
          <HighlightBox
            title="Air Pressure"
            data={{ unit: "mb", value: pressure }}
          />
        </div>
      </div>
    </section>
  );
};

export default Detail;

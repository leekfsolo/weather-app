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
import { Col, Container, Row } from "react-bootstrap";

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
    <section className={`${styles.detail} h-100 m-xs-4 p-4 p-xl-5`}>
      <div
        className={`${styles.temperature} d-flex justify-content-end align-items-center gap-2 mb-5`}
      >
        <p
          className={isCelsius && styles.active}
          onClick={() => dispatch(celsius())}
        >
          ℃
        </p>
        <p
          className={!isCelsius && styles.active}
          onClick={() => dispatch(fahrenheit())}
        >
          ℉
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center mb-5 gap-sm-4 gap-3 p-4 p-sm-0">
        {otherData.map((day, idx) => (
          <WeatherCard weatherDay={day} key={idx} isTomorrow={idx === 0} />
        ))}
      </div>

      <div className={styles["weather-highlights"]}>
        <h3>Today's Highlights</h3>
        <Container className="d-grid gap-4 p-0" fluid>
          <Row>
            <Col className="mb-4 mb-sm-0" sm={6}>
              <HighlightBox
                title="Wind status"
                data={{ unit: "mph", value: wind }}
                extend
              />
            </Col>
            <Col sm={6}>
              <HighlightBox
                title="Humidity"
                data={{ unit: "%", value: humidity }}
                progressBar
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="mb-4 mb-sm-0">
              <HighlightBox
                title="Visibility"
                data={{ unit: "m", value: visibility }}
              />
            </Col>
            <Col sm={6}>
              <HighlightBox
                title="Air Pressure"
                data={{ unit: "mb", value: pressure }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Detail;

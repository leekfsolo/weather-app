import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../common/ui/layout/content-layout/loading";
import MainLayout from "../common/ui/layout/main-layout";
import { weatherState } from "../weatherSlice/weatherSlice";

import Detail from "./Detail";
import { WeatherDay } from "./model";
import Summary from "./Summary";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const unit = useSelector(
    (state: { weather: weatherState }) => state.weather.unit
  );
  const city = useSelector(
    (state: { weather: weatherState }) => state.weather.city
  );
  const [weatherData, setWeatherData] = useState<Array<WeatherDay>>([
    {
      date: "",
      icon: "",
      humidity: -1,
      pressure: -1,
      status: "",
      temps: [-1],
      visibility: -1,
      wind: -1,
    },
  ]);

  useEffect(() => {
    let units = "metric";
    if (unit === "℉") units = "imperial";

    const fetchData = async () => {
      setIsLoading(true);
      const responseData = await axios.get(
        process.env.REACT_APP_WEATHER_BASE_URL || "",
        {
          params: {
            appid: process.env.REACT_APP_MY_API_KEYS,
            q: city,
            units,
          },
        }
      );
      const weatherList = responseData.data.list;
      const newData: Array<WeatherDay> = [];
      const dates: Array<string> = [];

      weatherList.forEach((item: any) => {
        const date = item.dt_txt.slice(0, 10);

        if (!dates.includes(date)) {
          dates.push(date);
          const weatherDayData: WeatherDay = {
            date,
            icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            status: item.weather[0].main,
            wind: item.wind.speed,
            humidity: item.main.humidity,
            visibility: item.visibility,
            pressure: item.main.pressure,
            temps: [item.main.temp],
          };

          newData.push(weatherDayData);
        } else {
          newData[newData.length - 1].temps.push(item.main.temp);
        }
      });

      setWeatherData(newData);

      setIsLoading(false);
    };

    fetchData();
  }, [unit, city]);

  return (
    <MainLayout>
      <Loading isOpen={isLoading} />
      <Summary data={weatherData[0]} />
      <Detail data={weatherData} />
    </MainLayout>
  );
};

export default App;

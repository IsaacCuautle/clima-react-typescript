import axios from "axios";
import { object, string, number, InferOutput, parse } from "valibot";

import { SearchType } from "../types";
import { useMemo, useState } from "react";

// Valibot
const WeatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number(),
  }),
});

export type Weather = InferOutput<typeof WeatherSchema>;

const initialWeatherState = {
  name: "",
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
};
export default function useWeather() {
  const [weather, setWeather] = useState<Weather>(initialWeatherState);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchWeater = async (search: SearchType) => {
    setLoading(true);
    setWeather(initialWeatherState);
    setNotFound(false);
    try {
      const key = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${key}`;
      const { data } = await axios(url);

      // Comprobar si existe
      if (!data[0]) {
        setNotFound(true);
        return;
      }

      const lat = data[0].lat;
      const lon = data[0].lon;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=SP&units=metric `;
      const { data: weatherResult } = await axios(weatherUrl);
      const result = parse(WeatherSchema, weatherResult);

      if (result) {
        setWeather(result);
      }
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    loading,
    notFound,
    weather,
    fetchWeater,
    hasWeatherData,
  };
}

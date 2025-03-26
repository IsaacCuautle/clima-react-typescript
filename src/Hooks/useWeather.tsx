import axios from "axios";
import z from "zod";

import { SearchType } from "../types";

export default function useWeather() {
  const fetchWeater = async (search: SearchType) => {
    try {
      const key = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${key}`;
      const { data } = await axios(url);
      const lat = data[0].lat;
      const lon = data[0].lon;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

      // Zod
      const Weather = z.object({
        name: z.string(),
        main: z.object({
          temp: z.number(),
          temp_max: z.number(),
          temp_min: z.number(),
        }),
      });

      type Weather = z.infer<typeof Weather>;
      const { data: weatherData } = await axios(weatherUrl);
      const result = Weather.safeParse(weatherData);
      
      if (result.success) {
        console.log(result.data.name);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeater,
  };
}

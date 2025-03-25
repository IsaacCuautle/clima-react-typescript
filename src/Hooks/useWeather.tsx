import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {
  const fetchWeater = async (search: SearchType) => {
    try {
      const key = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${key}`;
      const { data } = await axios(url);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeater,
  };
}

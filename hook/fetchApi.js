import axios from "axios";

export const fetchCities = async ({ setKitesurfingInfo, searchCity }) => {
  try {
    if (searchCity) {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cities");
      }
      const data = await response.json();
      setKitesurfingInfo(prevState => ({
        ...prevState,
        citySearchResult: data.results,
      }));
    } else {
      setKitesurfingInfo(prevState => ({
        ...prevState,
        citySearchResult: [],
      }));
    }
  } catch (error) {
    console.error("Error fetching cities:", error);
    setKitesurfingInfo(prevState => ({
      ...prevState,
      citySearchResult: [],
    }));
  }
};


export const fetchAllDaysCity = async ({ setKitesurfingInfo, coordinates }) => {
  try {
    if (!coordinates) {
      throw new Error('Coordinates not available');
    }
    const { latitude, longitude } = coordinates;
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=kn&timezone=Europe%2FBerlin&forecast_days=16`
    );
    const { time, temperature_2m_max, temperature_2m_min, wind_speed_10m_max, wind_direction_10m_dominant } = response.data.daily;
    const dailyData = time.map((date, index) => ({
      date,
      temperature_2m_max: temperature_2m_max[index],
      temperature_2m_min: temperature_2m_min[index],
      wind_speed_10m_max: wind_speed_10m_max[index],
      wind_direction_10m_dominant: wind_direction_10m_dominant[index]
    }));
    setKitesurfingInfo(prevState => ({
      ...prevState,
      dailyData: dailyData,
    }));
  } catch (error) {
    console.error("Error fetching kitesurfing info:", error);
  }
};

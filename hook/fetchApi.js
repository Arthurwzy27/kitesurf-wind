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
    console.log('Days', response.data.daily);
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


export const fetchAllHoursCity = async ({ setKitesurfingInfo, coordinates }) => {
  try {
    if (!coordinates) {
      throw new Error('Coordinates not available');
    }
    const { latitude, longitude } = coordinates;
    const response = await axios.get(
      // !!TO USE:
      // `https://ensemble-api.open-meteo.com/v1/ensemble?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m,wind_direction_10m&wind_speed_unit=kn&models=gfs025`
      // !!TEST2:
      `https://ensemble-api.open-meteo.com/v1/ensemble?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_80m,wind_direction_80m&wind_speed_unit=kn&models=icon_eu`
      // !!TEST3:
      // `https://ensemble-api.open-meteo.com/v1/ensemble?latitude=${latitude}&longitude=${longitude}&hourly=wind_speed_80m,wind_direction_80m,temperature_80m&wind_speed_unit=kn&forecast_days=35&models=icon_eu`
    );
    if (response && response.data && response.data.hourly) {
      const { hourly } = response.data;
      console.log('Hours', hourly);

      // Check if the hourly data is structured as expected
      if (!Array.isArray(hourly.time)) {
        throw new Error('Hourly data structure is not as expected');
      }

      // API with 80m datas
      const time = hourly.time;
      const temperature = hourly.temperature_2m || [];
      const wind_speed = hourly.wind_speed_80m || [];
      const wind_direction = hourly.wind_direction_80m || [];

      // API with 10m datas
      // const time = hourly.time;
      // const temperature = hourly.temperature_2m || [];
      // const wind_speed = hourly.wind_speed_10m || [];
      // const wind_direction = hourly.wind_direction_10m || [];

      const hourlyData = time.map((date, index) => ({
        date,
        temperature: temperature[index],
        wind_speed: wind_speed[index],
        wind_direction: wind_direction[index],

      }));

      setKitesurfingInfo(prevState => ({
        ...prevState,
        hourlyData: hourlyData,
      }));
    } else {
      console.error("Hourly data not available:", response);
    }
  } catch (error) {
    console.error("Error fetching kitesurfing info:", error);
  }
}

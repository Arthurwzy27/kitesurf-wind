import axios from "axios";


export const fetchKitesurfingInfo = async ({ setKitesurfingInfo, findBestDays, setBestDays, setAllDays }) => {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=41.2779&longitude=1.9703&current=temperature_2m,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=kn&timezone=Europe%2FBerlin&forecast_days=16"
    );
    const dailyData = response.data.daily;
    setKitesurfingInfo(dailyData);
    findBestDays(dailyData, setBestDays, setAllDays);
  } catch (error) {
    console.error("Error fetching kitesurfing info:", error);
  }
};



export const fetchCitySuggestions = async ({ cityInput }) => {
  try {
    // Fetch the coordinates of the city using the geocoding API
    const geocodingResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`);
    const geocodingData = await geocodingResponse.json();
    console.log('city:', cityInput);
    console.log('geocodingData', geocodingData);

    // Check if geocoding data is empty
    if (geocodingData && geocodingData.results && geocodingData.results.length > 0) {
      return geocodingData;
    } else {
      // If no coordinates are found for the city, return an empty array
      return [];
    }
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    return [];
  }
};

// export const fetchCitySuggestions1 = async ({ setCitySuggestions, cityInput }) => {
//   try {
//     const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`);
//     console.log(response.data.results);
//     console.log(cityInput);
//     setCitySuggestions(response.data.results);
//   } catch (error) {
//     console.error("Error fetching city suggestions:", error);
//   }
// };

// export const fetchCitySuggestions = async ({ cityInput, setCitySuggestions, fetchForecastData }) => {
//   try {
//     // Fetch the coordinates of the city using the geocoding API
//     const geocodingResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`);
//     const geocodingData = await geocodingResponse.json();
//     console.log('city:', cityInput);
//     console.log('geocodingData', geocodingData);

//     // Check if geocoding data is empty
//     if (geocodingData && geocodingData.length > 0) {
//       const { lat, lon } = geocodingData[0]; // Assuming the first result is the desired city

//       // Fetch the forecast data using the coordinates
//       const forecastData = await fetchForecastData({ lat, lon });

//       // Update the city suggestions with the fetched forecast data
//       setCitySuggestions(forecastData);
//     } else {
//       // If no coordinates are found for the city, display a message
//       setCitySuggestions([{ name: 'No coordinate found' }]);
//     }
//   } catch (error) {
//     console.error('Error fetching city suggestions:', error);
//   }
// };

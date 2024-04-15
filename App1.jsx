// App1.jsx
import React, { useEffect } from 'react';
import { useKitesurfingInfoContext } from './context/kitesurfingInfoContext';
import { handleCityInputChange, handleCityClick } from './hook/eventHandlers';
import SearchCity from './components/Search/SearchCity';

const App1 = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { searchCity, citySearchResult } = kitesurfingInfo;

  useEffect(() => {
    const fetchCities = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching cities:", error);
        setKitesurfingInfo(prevState => ({
          ...prevState,
          citySearchResult: [],
        }));
      }
    };

    if (searchCity) {
      console.log('Search City:', searchCity);
      fetchCities();
    } else {
      setKitesurfingInfo(prevState => ({
        ...prevState,
        citySearchResult: [],
      }));
    }
  }, [searchCity, setKitesurfingInfo]);

  return (
    <SearchCity
      setKitesurfingInfo={setKitesurfingInfo}
      searchCity={searchCity}
      citySearchResult={citySearchResult}
      handleCityInputChange={handleCityInputChange}
      handleCityClick={handleCityClick}
    />
  );
};

export default App1;

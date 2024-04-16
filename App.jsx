// App1.jsx
import React, { useEffect } from 'react';
import { useKitesurfingInfoContext } from './context/kitesurfingInfoContext';
import { handleCityInputChange, handleCityClick } from './hook/eventHandlers';
import { fetchCities, fetchAllDaysCity } from './hook/fetchApi';
import SearchCity from './components/Search/SearchCity';
import BestDayCard from './components/BestDayCard';
import TableAllDates from "./components/TableAllDates";
import { findBestDays, getWindDirectionSymbol } from './utils/weatherUtils';

const App = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const {
    searchCity, //searchCity user input value
    citySearchResult, //Reults of a specific city (with coordinates)
    coordinates, //Save coordinate from a specific city
    dailyData, //All datas for specific city (forecast 16 days with wind direction and speed)
    bestDays,
  } = kitesurfingInfo;

  useEffect(() => {
    const fetchData = async () => { //Fetch a city to get its coordinates
      await fetchCities({ searchCity, setKitesurfingInfo });

      if (coordinates) {
        await fetchAllDaysCity({ setKitesurfingInfo, coordinates }); //With coordinates of a city, get forecast 16 days
      }
    };

    fetchData();
  }, [searchCity, coordinates, setKitesurfingInfo]);

  useEffect(() => { //Trying to get from algorithm all best days for Kitesurfing
    if (dailyData) {
      console.log('useEffect(dailyData):', dailyData);
      const { suitableDays } = findBestDays(dailyData);
      console.log('useEffect(suitableDays):', suitableDays);
      setKitesurfingInfo(prevState => ({
        ...prevState,
        bestDays: suitableDays,
      }));
    }
  }, [dailyData, setKitesurfingInfo]);

  return (
    <>
      <SearchCity
        setKitesurfingInfo={setKitesurfingInfo}
        searchCity={searchCity}
        citySearchResult={citySearchResult}
        handleCityInputChange={handleCityInputChange}
        handleCityClick={handleCityClick}
      />
      <BestDayCard
        bestDays={bestDays}
        getWindDirectionSymbol={getWindDirectionSymbol}
      />
      <TableAllDates
        searchCity={searchCity}
        dailyData={dailyData}
        getWindDirectionSymbol={getWindDirectionSymbol}
      />
    </>
  );
};

export default App;

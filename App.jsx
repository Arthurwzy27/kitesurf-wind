// App1.jsx
import React, { useEffect } from 'react';
import { useKitesurfingInfoContext } from './context/kitesurfingInfoContext';
import { handleCityInputChange, handleCityClick } from './hook/eventHandlers';
import { fetchCities, fetchAllDaysCity } from './hook/fetchApi';
import SearchCity from './components/Search/SearchCity';
import BestDayCard from './components/BestDayCard';
import TableAllDates from "./components/TableAllDates";
import { findBestDays, getWindDirectionSymbol } from './utils/weatherUtils';
import SearchLocation from './components/Search/SearchLocation';

const App = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const {
    searchCity, //searchCity user input value
    citySearchResult, //Reults of a specific city (with coordinates)
    coordinates, //Save coordinate from a specific city
    dailyData, //All datas for specific city (forecast 16 days with wind direction and speed)
    bestDays, //Datas for all possible kitesurfing days
    // WindDirection
    selectedWindDirections,
    windDirectionDropdownOpen,
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
      // console.log('useEffect(dailyData):', dailyData);
      const { suitableDays } = findBestDays(dailyData);
      // console.log('useEffect(suitableDays):', suitableDays);
      setKitesurfingInfo(prevState => ({
        ...prevState,
        bestDays: suitableDays,
      }));
    }
  }, [dailyData, setKitesurfingInfo]);

  return (
    <>
    <h1 className='text-center'>Kitesurfing Weather Forecast</h1>
      {/* <SearchCity
        setKitesurfingInfo={setKitesurfingInfo}
        searchCity={searchCity}
        citySearchResult={citySearchResult}
        handleCityInputChange={handleCityInputChange}
        handleCityClick={handleCityClick}
      /> */}
      <SearchLocation
        // ---- SearchCity
        setKitesurfingInfo={setKitesurfingInfo}
        searchCity={searchCity}
        citySearchResult={citySearchResult}
        handleCityInputChange={handleCityInputChange}
        handleCityClick={handleCityClick}
        // ---- WindDirection
        selectedWindDirections={selectedWindDirections}
        windDirectionDropdownOpen={windDirectionDropdownOpen}
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

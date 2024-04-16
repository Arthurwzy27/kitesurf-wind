// App1.jsx
import React, { useEffect } from 'react';
import { useKitesurfingInfoContext } from './context/kitesurfingInfoContext';
import { fetchCities, fetchAllDaysCity } from './hook/fetchApi';
import { findBestDays, getWindDirectionSymbol } from './utils/weatherUtils';
import SearchLocation from './components/Search/SearchLocation';
import BestDayCard from './components/BestDayCard';
import TableAllDates from "./components/TableAllDates";

const App = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const {
    searchCity, //searchCity user input value
    coordinates, //Save coordinate from a specific city
    dailyData, //All datas for specific city (forecast 16 days with wind direction and speed)
    bestDays, //Datas for all possible kitesurfing days
    selectedWindDirection, //User wind direction selection
    windSpeed, //User wind speed selection
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

  useEffect(() => {
    if (dailyData && selectedWindDirection.length > 0 && windSpeed) {
      const { suitableDays } = findBestDays(dailyData, selectedWindDirection, windSpeed); // Pass selectedWindDirection to findBestDays
      setKitesurfingInfo(prevState => ({
        ...prevState,
        bestDays: suitableDays,
      }));
    }
  }, [dailyData, selectedWindDirection, windSpeed, setKitesurfingInfo]);

  return (
    <>
    <h1 className='text-center'>Kitesurfing Weather Forecast</h1>
      <SearchLocation />
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

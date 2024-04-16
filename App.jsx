// App.js
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
    // <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
    // <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600">
    // <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600">
    // <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-indigo-600">
    <div className="bg-cover bg-no-repeat bg-center min-h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620152174993-40a74a7e24c2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="container mx-auto py-8">
        <h1 className="text-center text-white text-4xl font-bold mb-8">Kitesurfing Weather Forecast</h1>
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
      </div>
    </div>
  );
};

export default App;

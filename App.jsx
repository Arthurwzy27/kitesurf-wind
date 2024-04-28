import React, { useEffect } from 'react';
import { useKitesurfingInfoContext } from './context/kitesurfingInfoContext';
import { fetchCities, fetchAllDaysCity } from './hook/fetchApi';
import { findBestDays, getWindDirectionSymbol } from './utils/weatherUtils';
import Header from './components/Header';
import BestDayCard from './components/BestDayCard';
import TodayForecastCard from './components/Forecast/TodayForecastCard';
import ForecastDisplay1 from './components/Forecast/testFile/ForecastDisplay1';


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
    const fetchData = async () => {
      await fetchCities({ searchCity, setKitesurfingInfo });

      if (coordinates) {
        await fetchAllDaysCity({ setKitesurfingInfo, coordinates });
      }
    };

    fetchData();
  }, [searchCity, coordinates, setKitesurfingInfo]);

  useEffect(() => {
    if (dailyData && selectedWindDirection.length > 0 && windSpeed) {
      const { suitableDays } = findBestDays(dailyData, selectedWindDirection, windSpeed);
      setKitesurfingInfo(prevState => ({
        ...prevState,
        bestDays: suitableDays,
      }));
    }
  }, [dailyData, selectedWindDirection, windSpeed, setKitesurfingInfo]);


  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620152174993-40a74a7e24c2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
    {/* // <div className="bg-cover bg-no-repeat bg-center min-h-screen" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/vintage-sea-nautical-seamless-pattern_225004-991.jpg?t=st=1713957688~exp=1713961288~hmac=defe73fdd7168373e4995dfac21c5b3b03789b4b72969aa7539d6495f1f2d69c&w=1480')" }}> */}
      <div className="container mx-auto py-8">
        <Header />
        <TodayForecastCard />
        <BestDayCard
          bestDays={bestDays}
          getWindDirectionSymbol={getWindDirectionSymbol}
        />
        <ForecastDisplay1 />
      </div>
    </div>
  );
};

export default App;

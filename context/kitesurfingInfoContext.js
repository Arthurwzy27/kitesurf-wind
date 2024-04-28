import React, { createContext, useContext, useState } from 'react';

const KitesurfingInfoContext = createContext();

export const useKitesurfingInfoContext = () => useContext(KitesurfingInfoContext);

export const KitesurfingInfoProvider = ({ children }) => {
  const [kitesurfingInfo, setKitesurfingInfo] = useState({
    searchCity: "",
    selectedCity: "",
    citySearchResult: [],
    coordinates: null,
    dailyData: [],
    bestDays: [],
    windDropdownOpen: false,
    selectedWindDirection: [],
    windSpeed: "",
    hourlyData:[],
    selectedDay:[], //ForecastDisplay1
    selectedHourlyData: null, //ForecastDisplay1
    selectedDayIndex: null, //ForecastDisplay1
  });

  return (
    <KitesurfingInfoContext.Provider value={{
      kitesurfingInfo,
      setKitesurfingInfo
    }}>
      {children}
    </KitesurfingInfoContext.Provider>
  );
};

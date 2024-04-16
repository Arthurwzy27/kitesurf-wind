import React, { createContext, useContext, useState } from 'react';

const KitesurfingInfoContext = createContext();

export const useKitesurfingInfoContext = () => useContext(KitesurfingInfoContext);

export const KitesurfingInfoProvider = ({ children }) => {
  const [kitesurfingInfo, setKitesurfingInfo] = useState({
    searchCity: "",
    citySearchResult: [],
    coordinates: null,
    dailyData: [],
    bestDays: [],
    windDirectionDropdownOpen: false,
    selectedWindDirections: [],
    windSpeed: "",
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

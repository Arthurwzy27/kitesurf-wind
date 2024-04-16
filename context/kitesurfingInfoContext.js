import React, { createContext, useContext, useState } from 'react';

const KitesurfingInfoContext = createContext();

export const useKitesurfingInfoContext = () => useContext(KitesurfingInfoContext);

export const KitesurfingInfoProvider = ({ children }) => {
  const [kitesurfingInfo, setKitesurfingInfo] = useState({
    // Used in SearchCity
    searchCity: "",
    citySearchResult: [],
    coordinates: null,
    dailyData: [],
    bestDays: [],
    // ---- END SearchCity ----
    // Used in WindDirection
    windDropdownOpen: false,
    selectedWindDirection: [],
    // ---- END WindDirection ----
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

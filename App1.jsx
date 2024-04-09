import React, { useEffect } from "react";
import SearchLocation from "./components/SearchLocation";
import TableAllDates from "./components/TableAllDates";
import { useKitesurfingState } from './state/useKitesurfingState';
import { findBestDays, getWindDirectionSymbol } from "./utils/weatherUtils";
import { fetchKitesurfingInfo, fetchCitySuggestions } from "./hook/fetchApi";
import {
  handleCityInputChange,
  handleCitySelect,
  handleWindDirectionClick,
  handleWindDirectionSelect,
  handleRemoveWindDirection,
  handleWindSpeedChange
} from "./hook/eventHandlers";
import BestDayCard from "./components/BestDayCard";



const KitesurfingInfo = () => {
  const {
    cityInput,
    setCityInput,
    citySuggestions,
    setCitySuggestions,
    selectedCity,
    setSelectedCity,
    windDirectionDropdownOpen,
    setWindDirectionDropdownOpen,
    selectedWindDirections,
    setSelectedWindDirections,
    windSpeed,
    setWindSpeed,
    kitesurfingInfo,
    setKitesurfingInfo,
    bestDays,
    setBestDays,
    allDays,
    setAllDays,
  } = useKitesurfingState();

  // Fetch All datas for KiteSurf Info (Table, Best day)
  useEffect(() => {
    fetchKitesurfingInfo({ setKitesurfingInfo, findBestDays, setBestDays, setAllDays })
  }, []);

  // Fetch specific datas for SearchLocation
  useEffect(() => {
    if (cityInput) {
      fetchCitySuggestions({
        cityInput,
        handleCityInputChange,
        citySuggestions,
        handleCitySelect,
        selectedWindDirections,
        handleWindDirectionClick,
        windDirectionDropdownOpen,
        handleWindDirectionSelect,
        windSpeed,
        setWindSpeed });
    } else {
      setCitySuggestions([]);
    }
  }, [cityInput]);


  return (
    <div className="container mx-auto py-8">
      <SearchLocation
        cityInput={cityInput}
        handleCityInputChange={(e) => handleCityInputChange(e, setCityInput)}
        citySuggestions={citySuggestions}
        handleCitySelect={handleCitySelect}
        selectedWindDirections={selectedWindDirections}
        handleWindDirectionClick={() => handleWindDirectionClick(setWindDirectionDropdownOpen, windDirectionDropdownOpen)}
        windDirectionDropdownOpen={windDirectionDropdownOpen}
        handleWindDirectionSelect={(direction) => handleWindDirectionSelect({ direction, selectedWindDirections, setSelectedWindDirections, setWindDirectionDropdownOpen })}
        windSpeed={windSpeed}
        setWindSpeed={setWindSpeed}
        fetchCitySuggestions={fetchCitySuggestions}
        setCitySuggestions={setCitySuggestions}
      />

      <>
        <BestDayCard bestDays={bestDays} getWindDirectionSymbol={getWindDirectionSymbol} />
        <TableAllDates allDays={allDays} getWindDirectionSymbol={getWindDirectionSymbol} />
      </>
    </div>
  );
};

export default KitesurfingInfo;

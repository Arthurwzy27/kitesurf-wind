import { useState } from 'react';

export const useKitesurfingState = () => {
  const [cityInput, setCityInput] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [windDirectionDropdownOpen, setWindDirectionDropdownOpen] = useState(false);
  const [selectedWindDirections, setSelectedWindDirections] = useState([]);
  const [windSpeed, setWindSpeed] = useState("");
  const [kitesurfingInfo, setKitesurfingInfo] = useState([]);
  const [bestDays, setBestDays] = useState([]);
  const [allDays, setAllDays] = useState([]);

  return {
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
  };
};

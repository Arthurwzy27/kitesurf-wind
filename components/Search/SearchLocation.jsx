import React, { useState, useEffect } from 'react';
import { useCoordinateContext } from '../../context/CoordinateContext';
import WindDirection from './WindDirection';
import WindSpeed from './WindSpeed';
import SearchCity from './SearchCity';


const SearchLocation = ({
  cityInput,
  handleCityInputChange,
  citySuggestions,
  handleCitySelect,
  selectedWindDirections,
  handleWindDirectionClick,
  windDirectionDropdownOpen,
  setWindDirectionDropdownOpen,
  handleWindDirectionSelect,
  windSpeed,
  setWindSpeed,
  fetchCitySuggestions,
}) => {
  const [inputValue, setInputValue] = useState(cityInput);
  const { updateCoordinates } = useCoordinateContext();


  useEffect(() => {
    setInputValue(cityInput);
  }, [cityInput]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleCityInputChange(e);
  };

  const handleSearch = async () => {
    const suggestions = await fetchCitySuggestions({ cityInput: inputValue });
    if (suggestions && suggestions.results && suggestions.results.length > 0) {
      const matchingCity = suggestions.results.find(result =>
        result.name.toLowerCase() === inputValue.toLowerCase()
      );
      if (matchingCity) {
        const { latitude, longitude, name, country } = matchingCity;
        updateCoordinates([latitude, longitude, name, country]);
      } else {
        updateCoordinates(['No coordinates found for ' + inputValue]);
      }
    } else {
      updateCoordinates(['No coordinates found']);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      await handleSearch();
    }
  };

  return (
    <div id="inputLabelComponent" className="p-2 flex justify-center gap-8 border-2">
      <SearchCity
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        handleSearch={handleSearch}
        citySuggestions={citySuggestions}
        handleCitySelect={handleCitySelect}
      />
      <WindDirection
        selectedWindDirections={selectedWindDirections}
        handleWindDirectionClick={handleWindDirectionClick}
        setWindDirectionDropdownOpen={setWindDirectionDropdownOpen}
        windDirectionDropdownOpen={windDirectionDropdownOpen}
        handleWindDirectionSelect={handleWindDirectionSelect}
      />
      <WindSpeed windSpeed={windSpeed} setWindSpeed={setWindSpeed} />
    </div>
  );
};

export default SearchLocation;

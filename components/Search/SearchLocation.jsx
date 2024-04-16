import React, { useState, useEffect } from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext'
import WindDirection from './WindDirection';
import SearchCity from './SearchCity';
import WindSpeed from './WindSpeed';

const SearchLocation = () => {
  const {
    cityInput,
    handleCityInputChange,
    citySuggestions,
    setCitySuggestions,
    handleCitySelect,
    selectedWindDirections,
    handleWindDirectionClick,
    windDirectionDropdownOpen,
    setWindDirectionDropdownOpen,
    handleWindDirectionSelect,
    setSelectedWindDirections,
    windSpeed,
    setWindSpeed,
    fetchCitySuggestions,
    coordinates,
    setCoordinates
  } = useKitesurfingInfoContext();

  const [inputValue, setInputValue] = useState(cityInput);
  // const [coordinates, setCoordinates] = useState(null); // State to hold coordinates

  useEffect(() => {
    setInputValue(cityInput);
  }, [cityInput]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleCityInputChange(e); // Pass the event to the parent handler
  };

  const handleSearch = async () => {
    const suggestions = await fetchCitySuggestions({ cityInput: inputValue });
    if (suggestions && suggestions.results && suggestions.results.length > 0) {
      const matchingCity = suggestions.results.find(result =>
        result.name.toLowerCase() === inputValue.toLowerCase()
      );
      if (matchingCity) {
        const { latitude, longitude, name, country } = matchingCity;
        setCoordinates([latitude, longitude, name, country]); // Keep coordinates as an array
      } else {
        setCoordinates(['No coordinates found for ' + inputValue]);
      }
    } else {
      setCoordinates(['No coordinates found']);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      await handleSearch();
    }
  };

  return (
    <div id="inputLabelComponent" className="flex justify-center gap-8">
      <div id="cityInputLabel" className="mb-4">
        <SearchCity
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          handleSearch={handleSearch}
          citySuggestions={citySuggestions}
          handleCitySelect={handleCitySelect}
        />
        {/* <WindDirection
          selectedWindDirections={selectedWindDirections}
          handleWindDirectionClick={handleWindDirectionClick}
          setWindDirectionDropdownOpen={setWindDirectionDropdownOpen}
          windDirectionDropdownOpen={windDirectionDropdownOpen}
          handleWindDirectionSelect={handleWindDirectionSelect}
        /> */}
        <WindSpeed
          windSpeed={windSpeed}
          setWindSpeed={setWindSpeed}
        />
        <div>
          City: {coordinates && coordinates[2]}
          <br />
          Country: {coordinates && coordinates[3]}
          <br />
          Latitude: {coordinates && coordinates[0]}
          <br />
          Longitude: {coordinates && coordinates[1]}
          <br />
        </div>
      </div>

        {/* <label htmlFor="cityInput" className="block font-bold mb-2">Select City:</label>
        <input
          id="cityInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="border p-2"
          placeholder="Search cities..."
        />
        <button onClick={handleSearch} className="border p-2 ml-2">Search</button>
        {citySuggestions?.length > 0 && (
          <ul className="absolute z-10 bg-white border rounded mt-1 w-full">
            {citySuggestions.map((city, index) => (
              <li key={index} onClick={() => handleCitySelect(city.name)} className="cursor-pointer p-2 hover:bg-gray-100">
                {city.name}
              </li>
            ))}
          </ul>
        )} */}
      {/* <div id="windDirectionInputLabel" className="mb-4">
        <label className="block font-bold mb-2">Select Wind Direction:</label>
        <div className="relative">
          <input
            type="text"
            readOnly
            value={selectedWindDirections.join(", ")}
            onClick={() => handleWindDirectionClick(setWindDirectionDropdownOpen, windDirectionDropdownOpen)}
            className="border p-2 w-full"
            placeholder="Click to select wind directions..."
          />
          {windDirectionDropdownOpen && (
            <div className="absolute z-10 bg-white border rounded mt-1 w-full max-h-24 overflow-y-auto">
              {["N", "NE", "E", "SE", "S", "SW", "W", "NW"].map((direction, index) => (
                <div key={index} onClick={() => handleWindDirectionSelect(direction)} className="cursor-pointer p-2 hover:bg-gray-100">
                  {direction}
                </div>
              ))}
            </div>
          )}
        </div>
      </div> */}

      {/* <div id="windSpeedInputLabel" className="mb-4">
        <label className="block font-bold mb-2">Enter Minimum Wind Speed:</label>
        <div className="relative">
          <input
            type="number"
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
            className="border p-2 w-full pr-12"
          />
          <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">Knots</span>
        </div>
      </div> */}
    </div>
  );
};

export default SearchLocation;

import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { handleCityInputChange, handleCityClick } from '../../hook/eventHandlers';

const SearchCity = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const {
    searchCity,
    citySearchResult,
  } = kitesurfingInfo;

  return (
    <div className="relative">
      <label className="block font-bold mb-2">Select a city:</label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        value={searchCity}
        onChange={(e) => handleCityInputChange(e, setKitesurfingInfo)}
        placeholder="Enter city name"
      />
      {citySearchResult && citySearchResult.length > 0 && (
        <ul className="absolute z-10 mt-2 w-full border border-gray-300 rounded-md shadow-md bg-white">
          {citySearchResult.map((city) => (
            <li
              key={city.id}
              className="cursor-pointer py-1 px-3 hover:bg-gray-100"
              onClick={() => handleCityClick(city, setKitesurfingInfo)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchCity;

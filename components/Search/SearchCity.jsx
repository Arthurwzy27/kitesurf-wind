// SearchCity.jsx
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
      <label className="block font-bold mb-2">City:</label>
      <input
        // className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 backdrop-blur-sm bg-transparent shadow-lg"
        // className="backdrop-blur-sm bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full relative"
        type="text"
        value={searchCity}
        onChange={(e) => handleCityInputChange(e, setKitesurfingInfo)}
        placeholder="Enter a city name..."
      />
      {citySearchResult && citySearchResult.length > 0 && (
        <ul
          // className="absolute z-10 mt-2 w-full border border-gray-400 rounded-md shadow-md bg-gray-100"
          className="absolute z-10 mt-2 w-full border border-gray-400 rounded-md shadow-md
          bg-gradient-to-b from-transparent to-blur-bg opacity-90 backdrop-blur-xl
          focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 "
        >
          {citySearchResult.map((city) => (
            <li
              key={city.id}
              className="cursor-pointer py-1 px-3 hover:bg-gray-200"
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

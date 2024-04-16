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
    <div>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="text"
        value={searchCity}
        onChange={(e) => handleCityInputChange(e, setKitesurfingInfo)}
        placeholder="Enter city name"
      />
      {citySearchResult && citySearchResult.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded-md shadow-md">
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

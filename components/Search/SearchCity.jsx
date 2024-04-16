import React from 'react';

const SearchCity = ({
  setKitesurfingInfo,
  searchCity,
  citySearchResult,
  handleCityInputChange,
  handleCityClick,
}) => {
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
      {/* <button onClick={() => handleCityClick(citySearchResult[0], setKitesurfingInfo)}>
        Search
      </button> */}
    </div>
  );
};

export default SearchCity;

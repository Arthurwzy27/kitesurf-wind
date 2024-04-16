import React from 'react'

const SearchCity = ({
  setKitesurfingInfo,
  searchCity,
  handleCityInputChange,
  citySearchResult,
  handleCityClick
}) => {
  return (
    <div className="search-container mx-auto relative">
      <h1 className="text-3xl font-bold my-4 text-center text-red-500">Test App1</h1>
      <input
        className="border p-2 w-full text-green"
        type="text"
        value={searchCity}
        onChange={(e) => handleCityInputChange(e, setKitesurfingInfo)}
        placeholder="Search city..."
      />
      {searchCity && citySearchResult && (
        <ul className={`list-none bg-white border border-gray-300 mt-1 rounded-md shadow-md max-h-40 overflow-y-auto ${searchCity.length > 0 && citySearchResult.length > 0 ? '' : 'hidden'}`}>
          {citySearchResult.map((city, index) => (
            <li
              key={index}
              className="dropdown-item bg-red list-none py-2 px-4 cursor-pointer transition-colors duration-150 hover:bg-gray-100"
              onClick={() => handleCityClick(city, setKitesurfingInfo)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchCity

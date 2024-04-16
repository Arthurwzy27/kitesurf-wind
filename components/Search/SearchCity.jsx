import React from 'react'

const SearchCity = ({ inputValue, handleInputChange, handleKeyDown, handleSearch, citySuggestions, handleCitySelect }) => {
  return (
    <div id="cityInputLabel" className="mb-4">
      <label htmlFor="cityInput" className="block font-bold mb-2">Select City:</label>
      <input
        className="border p-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
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
      )}
    </div>
  )
}

export default SearchCity

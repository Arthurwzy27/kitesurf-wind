// App1.jsx
import React, { useEffect } from 'react';
import { useKitesurfingInfoContext } from './context/kitesurfingInfoContext';

const App1 = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { searchCity, citySearchResult } = kitesurfingInfo;

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await response.json();
        setKitesurfingInfo(prevState => ({
          ...prevState,
          citySearchResult: data.results,
        }));
      } catch (error) {
        console.error("Error fetching cities:", error);
        setKitesurfingInfo(prevState => ({
          ...prevState,
          citySearchResult: [],
        }));
      }
    };

    if (searchCity) {
      console.log('Search City:', searchCity);
      fetchCities();
    } else {
      setKitesurfingInfo(prevState => ({
        ...prevState,
        citySearchResult: [],
      }));
    }
  }, [searchCity, setKitesurfingInfo]);

  const handleInputChange = (e) => {
    setKitesurfingInfo(prevState => ({
      ...prevState,
      searchCity: e.target.value,
    }));
  };

  const handleCityClick = (city) => {
    console.log("Selected city:", city);
    setKitesurfingInfo(prevState => ({
      ...prevState,
      searchCity: "",
    }));
  };

  return (
    <div className="search-container mx-auto relative">
      <h1 className="text-3xl font-bold my-4 text-center text-red-500">Test App1</h1>
      <input
        className="border p-2 w-full text-green"
        type="text"
        value={searchCity}
        onChange={handleInputChange}
        placeholder="Search city..."
      />
      {searchCity && citySearchResult && (
        <ul className={`list-none bg-white border border-gray-300 mt-1 rounded-md shadow-md max-h-40 overflow-y-auto ${searchCity.length > 0 && citySearchResult.length > 0 ? '' : 'hidden'}`}>
          {citySearchResult.map((city, index) => (
            <li
              key={index}
              className="dropdown-item bg-red list-none py-2 px-4 cursor-pointer transition-colors duration-150 hover:bg-gray-100"
              onClick={() => handleCityClick(city)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App1;

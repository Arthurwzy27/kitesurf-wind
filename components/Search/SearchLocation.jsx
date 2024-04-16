import React from 'react';
import SearchCity from './SearchCity';
import WindDirection from './WindDirection';
import { handleCityInputChange, handleCityClick, handleWindDirectionClick, handleWindDirectionSelect } from '../../hook/eventHandlers';

const SearchLocation = ({ setKitesurfingInfo, searchCity, citySearchResult }) => {
  return (
    <>
      <SearchCity
        setKitesurfingInfo={setKitesurfingInfo}
        searchCity={searchCity}
        citySearchResult={citySearchResult}
        handleCityInputChange={handleCityInputChange}
        handleCityClick={handleCityClick}
      />
      <WindDirection
        // setKitesurfingInfo={setKitesurfingInfo}
      />
    </>
  );
};

export default SearchLocation;


// import React, { useState, useEffect } from 'react';
// import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
// // import WindSpeed from './WindSpeed';
// import SearchCity from './SearchCity';

// import WindDirection from './WindDirection';
// import { handleWindDirectionClick, handleWindDirectionSelect } from '../../hook/eventHandlers';


// const SearchLocation = ({
//   setKitesurfingInfo,
//   //SearchCity
//   searchCity,
//   citySearchResult,
//   handleCityInputChange,
//   handleCityClick,
//   // WindDirection
//   selectedWindDirections,
//   windDirectionDropdownOpen,
//   setWindDirectionDropdownOpen
// }) => {


//   return (
//     <>
//       <SearchCity
//         setKitesurfingInfo={setKitesurfingInfo}
//         searchCity={searchCity}
//         citySearchResult={citySearchResult}
//         handleCityInputChange={handleCityInputChange}
//         handleCityClick={handleCityClick}
//       />
//       <WindDirection
//         selectedWindDirections={selectedWindDirections}
//         windDirectionDropdownOpen={windDirectionDropdownOpen}
//         handleWindDirectionClick={handleWindDirectionClick}
//         handleWindDirectionSelect={handleWindDirectionSelect}
//         setWindDirectionDropdownOpen={setWindDirectionDropdownOpen} // Pass down the prop
//       />
//     </>
//   );
// };

// export default SearchLocation;

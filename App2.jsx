// import React, { useEffect } from "react";
// import SearchLocation from "./components/Search/SearchLocation";
// import TableAllDates from "./components/TableAllDates";
// // import { useKitesurfingState } from './state/useKitesurfingState';
// import { useKitesurfingInfoContext } from './context/kitesurfingInfoContext'
// import { findBestDays, getWindDirectionSymbol } from "./utils/weatherUtils";
// import { fetchKitesurfingInfo, fetchCitySuggestions } from "./hook/fetchApi";

// import {
//   handleCityInputChange,
//   handleCitySelect,
//   handleWindDirectionClick,
//   handleWindDirectionSelect,
//   // handleRemoveWindDirection,
//   // handleWindSpeedChange
// } from "./hook/eventHandlers";
// import BestDayCard from "./components/BestDayCard";



// const App = () => {
//   // const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();

//   const {
//     cityInput,
//     setCityInput,
//     citySuggestions,
//     setCitySuggestions,
//     // selectedCity,
//     // setSelectedCity,
//     windDirectionDropdownOpen,
//     setWindDirectionDropdownOpen,
//     selectedWindDirections,
//     setSelectedWindDirections,
//     windSpeed,
//     setWindSpeed,
//     // kitesurfingInfo,
//     setKitesurfingInfo,
//     bestDays,
//     setBestDays,
//     allDays,
//     setAllDays,
//     coordinates,
//     setCoordinates,
//   } = useKitesurfingInfoContext();


//   // Fetch All datas for KiteSurf Info (Table, Best day)
//   useEffect(() => {
//     if (coordinates) {
//       fetchKitesurfingInfo({
//         country: coordinates.country,
//         latitude: coordinates.latitude,
//         longitude: coordinates.longitude,
//         setKitesurfingInfo,
//         findBestDays,
//         setBestDays,
//         setAllDays
//       });
//     }
//   }, [coordinates]);


//   // Fetch specific datas for SearchLocation
//   useEffect(() => {
//     if (cityInput) {
//       fetchCitySuggestions({
//         cityInput,
//         handleCityInputChange,
//         citySuggestions,
//         handleCitySelect,
//         selectedWindDirections,
//         handleWindDirectionClick,
//         windDirectionDropdownOpen,
//         handleWindDirectionSelect,
//         windSpeed,
//         setWindSpeed,
//         setCoordinates,
//         setCitySuggestions,
//       });
//     } else {
//       setCitySuggestions([]);
//     }
//   }, [cityInput]);


//   return (
//     <div className="container mx-auto py-8">
//       <>
//         <SearchLocation
//           cityInput={cityInput}
//           handleCityInputChange={(e) => handleCityInputChange(e, setCityInput)}
//           citySuggestions={citySuggestions}
//           handleCitySelect={(city) => handleCitySelect(city, setCityInput)}
//           selectedWindDirections={selectedWindDirections}
//           handleWindDirectionClick={() => handleWindDirectionClick(setWindDirectionDropdownOpen, windDirectionDropdownOpen)}
//           windDirectionDropdownOpen={windDirectionDropdownOpen}
//           handleWindDirectionSelect={(direction) => handleWindDirectionSelect({ direction, selectedWindDirections, setSelectedWindDirections, setWindDirectionDropdownOpen })}
//           windSpeed={windSpeed}
//           setWindSpeed={setWindSpeed}
//           fetchCitySuggestions={fetchCitySuggestions}
//           setCitySuggestions={setCitySuggestions}
//           setCityInput={setCityInput}
//         />
//         {/* <BestDayCard
//           bestDays={bestDays}
//           getWindDirectionSymbol={getWindDirectionSymbol}
//         /> */}
//         <TableAllDates
//           cityInput={cityInput}
//           country={coordinates ? coordinates.country : ''}
//           allDays={allDays}
//           getWindDirectionSymbol={getWindDirectionSymbol}
//         />
//       </>
//       {/* <SearchLocation
//         cityInput={cityInput}
//         setCityInput={setCityInput}
//         selectedWindDirections={selectedWindDirections}
//         setSelectedWindDirections={setSelectedWindDirections}
//         windSpeed={windSpeed}
//         setWindSpeed={setWindSpeed}
//       /> */}
//     </div>
//   );
// };

// export default App;

// import React, { useState, useRef } from 'react';
// import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
// import { toggleWindDropdown } from '../../hook/eventHandlers';
// import { useClickOutside } from '../../utils/utils';
// import SearchCity from './SearchCity';
// import WindDirection from './WindDirection';
// import WindSpeed from './WindSpeed';

// const SearchLocation = () => {
//   const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
//   const { windDropdownOpen } = kitesurfingInfo;
//   const [showCityDropdown, setShowCityDropdown] = useState(false);
//   const [showDirectionDropdown, setShowDirectionDropdown] = useState(false);

//   const cityInputRef = useRef(null);
//   const directionInputRef = useRef(null);

//   useClickOutside([cityInputRef, directionInputRef], (event) => {
//     if (cityInputRef.current && !cityInputRef.current.contains(event.target)) {
//       setShowCityDropdown(false);
//     }
//     if (directionInputRef.current && !directionInputRef.current.contains(event.target)) {
//       toggleWindDropdown(setKitesurfingInfo, windDropdownOpen); // Close wind dropdown
//     }
//   });

//   const handleCityDropdownClick = () => {
//     setShowCityDropdown(!showCityDropdown);
//   };

//   return (
//     <div className="flex justify-center items-center p-6">
//       <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full">
//         <div className="flex justify-between w-3/4">
//           <div ref={cityInputRef}>
//             {/* <SearchCity onClick={handleCityDropdownClick} /> */}
//             {showCityDropdown && <SearchCity onClick={handleCityDropdownClick} />} {/* Placeholder for dropdown list */}
//           </div>
//           <div ref={directionInputRef}>
//             {/* <WindDirection /> */}
//             {windDropdownOpen && <WindDirection />} {/* Placeholder for dropdown list */}
//           </div>
//           <WindSpeed />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchLocation;






// SearchLocation.js
import React from 'react';
import SearchCity from './SearchCity';
import WindDirection from './WindDirection';
import WindSpeed from './WindSpeed';






// UI: On top of each other
// const SearchLocation = () => {
//   return (
//     <div className="flex justify-center items-center p-6">
//       <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full md:w-auto">
//         <div className="flex flex-col md:flex-row justify-between">
//           <SearchCity className="w-full md:w-auto mb-4 md:mb-0" />
//           <WindDirection className="w-full md:w-auto mb-4 md:mb-0" />
//           <WindSpeed className="w-full md:w-auto" />
//         </div>
//       </div>
//     </div>
//   );
// };

const SearchLocation = () => {
  return (
    <div className="flex flex-col items-center p-6 relative">
      <div className="backdrop-blur-sm bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full relative">
        <div className="bg-gradient-to-b from-transparent to-blur-bg absolute inset-0 rounded-lg pointer-events-none opacity-80 backdrop-blur-xl"></div>
        <SearchCity className="w-full mb-4" />
        <div className="flex w-full pt-4 justify-evenly">
          <WindDirection className="w-1/2 mr-2" />
          <WindSpeed className="w-1/2 ml-2" />
        </div>
      </div>
    </div>
  );
};



// USE THIS ONE FOR BACKUP
// const SearchLocation = () => {
//   // return (
//   //   <div className="flex justify-center items-center p-6 backdrop-blur-lg">
//   //     {/* <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-lg"> */}
//   //     <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full ">
//   //       <div className="flex justify-between">
//   //         <SearchCity className='w-3/4' />
//   //         <WindDirection className='w-3/4' />
//   //         <WindSpeed className='w-3/4' />
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div className="flex justify-center items-center p-6 relative">
//       <div className="backdrop-blur-sm bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full relative">
//         <div className="bg-gradient-to-b from-transparent to-blur-bg absolute inset-0 rounded-lg pointer-events-none opacity-80 backdrop-blur-xl"></div>
//         <div className="flex justify-between">
//           <SearchCity className='w-3/4' />
//           <WindDirection className='w-3/4' />
//           <WindSpeed className='w-3/4' />
//         </div>
//       </div>
//     </div>




//   );
// };

export default SearchLocation;

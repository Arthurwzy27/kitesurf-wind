import React from 'react';
import SearchCity from './SearchCity';


const SearchLocation = () => {
  return (
    <div className="flex flex-col items-center p-6 relative">
      <div className="backdrop-blur-sm bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full relative">
        <div className="bg-gradient-to-b from-transparent to-blur-bg absolute inset-0 rounded-lg pointer-events-none opacity-80 backdrop-blur-xl"></div>
        <SearchCity className="w-full mb-4" />
      </div>
    </div>
  );
};

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

export default SearchLocation;

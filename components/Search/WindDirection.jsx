import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { toggleWindDropdown, handleDirectionSelect } from '../../hook/eventHandlers';

const WindDirection = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { windDropdownOpen, selectedWindDirection } = kitesurfingInfo;

  return (
    <div className="relative">
      <label className="block font-bold mb-2">Select Wind Direction:</label>
      <input
        type="text"
        readOnly
        value={selectedWindDirection.join(', ') || 'Click to select wind directions...'}
        onClick={() => toggleWindDropdown(setKitesurfingInfo, windDropdownOpen)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Click to select wind directions..."
      />
      {windDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full max-h-24 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-md">
          {["N", "NE", "E", "SE", "S", "SW", "W", "NW"].map((direction, index) => (
            <div key={index} className="flex items-center py-1 px-3 hover:bg-gray-100">
              <input
                type="checkbox"
                id={direction}
                checked={selectedWindDirection.includes(direction)}
                onChange={() => handleDirectionSelect(setKitesurfingInfo, selectedWindDirection, direction)}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor={direction}>{direction}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WindDirection;

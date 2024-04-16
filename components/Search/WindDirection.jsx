import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { toggleWindDropdown, handleDirectionSelect } from '../../hook/eventHandlers';

const WindDirection = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { windDropdownOpen, selectedWindDirection } = kitesurfingInfo;

  return (
    <div className="wind-direction">
      <label className="block font-bold mb-2">Select Wind Direction:</label>
      <div className="relative">
        <input
          type="text"
          readOnly
          value={selectedWindDirection.join(', ') || 'Click to select wind directions...'}
          onClick={() => toggleWindDropdown(setKitesurfingInfo, windDropdownOpen)}
          className="border p-2 w-full cursor-pointer"
          placeholder="Click to select wind directions..."
        />
        {windDropdownOpen && (
          <div className="absolute z-10 bg-white border rounded mt-1 w-full max-h-24 overflow-y-auto">
            {["N", "NE", "E", "SE", "S", "SW", "W", "NW"].map((direction, index) => (
              <div key={index} className="flex items-center p-2 hover:bg-gray-100">
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
    </div>
  );
};

export default WindDirection;

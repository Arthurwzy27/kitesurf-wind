import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { handleWindSpeedChange } from '../../hook/eventHandlers';

const WindSpeed = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { windSpeed } = kitesurfingInfo;

  return (
    <div className="relative">
      <label className="block font-bold mb-2">Wind Speed:</label>
      <div className="flex items-center">
        <input
          className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70"
          type="number"
          value={windSpeed}
          onChange={(e) => handleWindSpeedChange(e, setKitesurfingInfo)}
          placeholder='Enter a minimum wind speed...'
        />
        <span className="ml-2 text-gray-500">Knots</span>
      </div>
    </div>
  );
};

export default WindSpeed;

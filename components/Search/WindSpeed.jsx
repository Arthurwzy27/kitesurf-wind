import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { handleWindSpeedChange } from '../../hook/eventHandlers';

const WindSpeed = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { windSpeed } = kitesurfingInfo;

  return (
    <div className="relative">
      <label className="block font-bold mb-2">Enter Minimum Wind Speed:</label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        type="number"
        value={windSpeed}
        onChange={(e) => handleWindSpeedChange(e, setKitesurfingInfo)}
      />
      <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">Knots</span>
    </div>
  );
};

export default WindSpeed;

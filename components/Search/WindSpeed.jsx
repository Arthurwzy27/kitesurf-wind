import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { handleWindSpeedChange } from '../../hook/eventHandlers';

const WindSpeed = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const {
    windSpeed,
  } = kitesurfingInfo;

  return (
    <div id="windSpeedInputLabel" className="mb-4">
      <label className="block font-bold mb-2">Enter Minimum Wind Speed:</label>
      <div className="relative">
        <input
          className="border p-2 w-full pr-12"
          type="number"
          value={windSpeed}
          onChange={(e) => handleWindSpeedChange(e, setKitesurfingInfo)}
        />
        <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">Knots</span>
      </div>
    </div>
  )
}

export default WindSpeed

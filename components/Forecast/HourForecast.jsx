// HourForecastDaily.jsx
import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';


const HourForecast = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { selectedDay } = kitesurfingInfo;
  // const forecastData = selectedDay ? selectedDay.forecast : [];

  return (
    <div>
      {selectedDay?.map((forecast, index) => (
        <div key={index} className="bg-gray-300 rounded-lg p-4 shadow-md mb-4 flex">
          {/* Left Part */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2">{forecast.hour}</h2>
            <p className="text-gray-600">{forecast.temperature}°C</p>
          </div>
          {/* Middle Part */}
          <div className="flex-1">
            <p className="text-gray-600">{forecast.windDirection}</p>
          </div>
          {/* Right Part */}
          <div className="flex-1 text-center">
            <p className="text-gray-600">
              <span className="text-3xl font-semibold">{forecast.windSpeed}</span>
              <span className="font-semibold">Knots</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HourForecast;

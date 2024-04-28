import React from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { formatDate } from '../../utils/utils';

const DayForecastDaily = () => {
  const { kitesurfingInfo } = useKitesurfingInfoContext();
  const { dailyData, selectedCity } = kitesurfingInfo;

  // Get today's date in the format "YYYY-MM-DD"
  const todayDate = new Date().toISOString().split('T')[0];

  // Filter the dailyData to include only data for today
  const todayForecast = dailyData?.filter((day) => day.date === todayDate);

  return (
    <div>
      {todayForecast?.map((day, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-md mb-4">
          {selectedCity && (
            <h1 className="text-lg mb-4">{selectedCity}</h1>
          )}

          {/* Left Part */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2">{formatDate(day.date)}</h2>
            <p className="text-gray-600">{day.temperature_2m_max}°C</p>
          </div>
          {/* Middle Part */}
          <div className="flex-1">
            <p className="text-gray-600">{day.wind_direction_10m_dominant}</p>
          </div>
          {/* Right Part */}
          <div className="flex-1 text-center">
            <p className="text-gray-600">
              <span className="text-3xl font-semibold">{day.wind_speed_10m_max}</span> <span className="font-semibold">Knots</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayForecastDaily;

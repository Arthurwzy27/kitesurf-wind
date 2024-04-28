import React from 'react';
import { formatDate, formatHour } from '../../../utils/utils';
import { getWindColor, getWindDirectionSymbol } from '../../../utils/weatherUtils';

function HourForecast1({ hourlyData }) {
  // Ensure hourlyData is not undefined and has at least one entry
  if (!hourlyData || hourlyData.length === 0) {
    return <div>No hourly data available</div>;
  }

  const date = formatDate(hourlyData[0]?.date);
  const desiredHours = ['2AM', '5AM', '8AM', '11AM', '2PM', '5PM', '8PM', '11PM'];

  return (
    <div className=''>
      <h2 className="text-lg font-semibold mb-2">{date}</h2>
      {hourlyData.map((hour, index) => {
        const hourLabel = formatHour(hour.date);

        if (desiredHours.includes(hourLabel)) {
          const backgroundColor = getWindColor(hour.wind_speed);

          return (
            <div key={index} className="HourForecast1 desiredHours rounded-lg p-4 shadow-md mb-4 flex" style={{
              backgroundImage: `linear-gradient(to right, ${backgroundColor}, transparent 40%)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left'
            }}>
              {/* Left Part */}
              <div className="flex-1 text-white">
                <h2 className="text-lg font-semibold mb-2">{hourLabel}</h2>
                <p className="">{hour.temperature}°C</p>
              </div>
              {/* Middle Part */}
              <div className="flex-1 text-white">
                <p className="">{getWindDirectionSymbol(hour.wind_direction)}</p>
              </div>
              {/* Right Part */}
              <div className="flex-1 text-center">
                <p className="text-gray-600">
                  <span className="text-3xl font-semibold">{hour.wind_speed}</span>
                  <span className="font-semibold">Knots</span>
                </p>
              </div>
            </div>
          );
        } else {
          return null; // Skip rendering for undesired hours
        }
      })}
    </div>
  );
}

export default HourForecast1;

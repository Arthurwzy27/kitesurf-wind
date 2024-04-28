// ForecastDailyCard1.jsx
import React from 'react';
import { getWindDirectionSymbol } from '../../../utils/weatherUtils';
import { formatDate } from '../../../utils/utils';

const ForecastDailyCard1 = ({
  index,
  handleDayClick,
  date,
  windSpeed,
  windDirection,
  tempMin,
  tempMax,
  isSelected
}) => {
 
  return (
      <div
      className={`bg-white rounded-lg p-4 shadow-md mr-4 w-48 cursor-pointer ${isSelected ? 'bg-gray-400' : ''}`}
        onClick={handleDayClick}
      >
        <h2 className="text-sm font-semibold mb-2">{formatDate(date)}</h2>
        <div className="text-center">
        <p className="text-gray-600 font-semibold">
            <span className="text-3xl">{windSpeed}</span>
            <span>Kn</span>
          </p>
        </div>
        <div>
          <p className="text-gray-600">{getWindDirectionSymbol(windDirection)}</p>
        </div>
        <p className="text-sm text-gray-600">{tempMin}°C</p>
        <p className="text-sm text-gray-600">{tempMax}°C</p>
      </div>
  );
};

export default ForecastDailyCard1;

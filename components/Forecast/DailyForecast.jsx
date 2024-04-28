// DayForecastDaily.jsx
import React, { useState } from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import { getWindDirectionSymbol } from '../../utils/weatherUtils';
import { formatDate } from '../../utils/utils';
import HourForecastDaily from './HourForecast';

const DailyForecast = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { dailyData, selectedDay } = kitesurfingInfo;


  // const forecastData = [
  //   { id: 1, date: 'Mon, Apr 18', windSpeed: 15, windDirection: 'NE', temperature: 17 },
  //   { id: 2, date: 'Tues, Apr 19', windSpeed: 12, windDirection: 'E', temperature: 20 },
  //   { id: 3, date: 'Wed, Apr 20', windSpeed: 18, windDirection: 'NW', temperature: 15 },
  //   // Add more forecast data as needed
  // ];

  const handleDayClick = (forecast) => {
    // console.log('clicked', forecast);
    setKitesurfingInfo({ ...kitesurfingInfo, selectedDay: forecast });
  };

  return (
    <div>
      <div className="flex overflow-x-auto">
        {dailyData?.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-md mr-4"
            onClick={() => handleDayClick(data)}
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">{formatDate(data.date)}</h2>
              <div className="text-center">
                <p className="text-gray-600">
                  <span className="text-3xl font-semibold">{data.wind_speed_10m_max}</span>
                  <span className="font-semibold">Knots</span>
                </p>
              </div>
              <div>
                <p className="text-gray-600">{getWindDirectionSymbol(data.wind_direction_10m_dominant)}</p>
              </div>
              <p className="text-sm text-gray-600">{data.temperature_2m_min}°C</p>
              <p className="text-sm text-gray-600">{data.temperature_2m_max}°C</p>
            </div>
          </div>
        ))}
      </div>
      {/* {selectedDay && <HourForecastDaily />} */}
      {/* {selectedDay && <HourForecastDaily selectedDay={selectedDay} />} */}
    </div>
  );
};

export default DailyForecast;

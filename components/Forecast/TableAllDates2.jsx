import React, { useState } from 'react';
import { formatDate } from '../../utils/utils';

const TableAllDates2 = ({ searchCity, dailyData, hourlyData, getWindDirectionSymbol }) => {
  const [showHourly, setShowHourly] = useState(false);

  // Function to toggle between day and hourly forecast
  const toggleForecast = () => {
    setShowHourly(!showHourly);
  };

  if ((!dailyData || dailyData.length === 0) && (!hourlyData || hourlyData.length === 0)) {
    return null;
  }

  // Format the date for daily forecast
  const formatDailyDate = (dateString) => {
    const date = new Date(dateString);
    const weekName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${weekName}, ${monthDay}`;
  };

  // Format the date for hourly forecast
  const formatHourlyDate = (dateString) => {
    const date = new Date(dateString);
    const hour = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
    return hour;
  };

  const dates = showHourly ? hourlyData?.map(hour => formatHourlyDate(hour.date)) : dailyData?.map(day => formatDailyDate(day.date));
  // const numColumns = dates.length;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className='text-center text-xs text-gray-500 uppercase tracking-wider'>
            <th className="px-6 py-3 font-medium"></th>
            {dates?.map((date, index) => (
              <th key={index} className="px-6 py-3 font-medium">{date}</th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70">
          <tr className='text-center whitespace-nowrap'>
            <td className="px-6 py-4 font-medium">Wind Speed</td>
            {showHourly ? hourlyData?.map((hour, index) => (
              <td key={index} className="px-6 py-4">{hour.wind_speed_10m}</td>
            )) : dailyData?.map((day, index) => (
              <td key={index} className="px-6 py-4">{day.wind_speed_10m_max}</td>
            ))}
          </tr>
          <tr className='text-center whitespace-nowrap'>
            <td className="px-6 py-4 font-medium">Wind Direction</td>
            {showHourly ? hourlyData?.map((hour, index) => (
              <td key={index} className="px-6 py-4">{getWindDirectionSymbol(hour.wind_direction_10m)} ({hour.wind_direction_10m})</td>
            )) : dailyData?.map((day, index) => (
              <td key={index} className="px-6 py-4">{getWindDirectionSymbol(day.wind_direction_10m_dominant)} ({day.wind_direction_10m_dominant})</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableAllDates2;

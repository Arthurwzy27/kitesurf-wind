import React from 'react';
import { formatDate } from '../utils/utils';

const TableAllDates = ({ searchCity, dailyData, getWindDirectionSymbol }) => {
  // if (!searchCity || searchCity.trim() === '' || !dailyData) {
  //   return null; // If no city is selected, or the searchCity is empty, or dailyData is not available, return null to render nothing
  // }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">Forecast for {searchCity}</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr className='text-center text-xs text-gray-500 uppercase tracking-wider'>
            <th className="px-6 py-3 font-medium">Date</th>
            <th className="px-6 py-3 font-medium">Wind Speed (Knots)</th>
            <th className="px-6 py-3 font-medium">Wind Direction</th>
          </tr>
        </thead>
        <tbody className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70">
        {/* <tbody className="bg-white divide-y divide-gray-200"> */}
          {dailyData && dailyData.length > 0 &&
            dailyData.map((day, index) => (
              <tr key={index} className='text-center whitespace-nowrap'>
                <td className="px-6 py-4">{formatDate(day.date)}</td>
                <td className="px-6 py-4 ">{day.wind_speed_10m_max}</td>
                <td className="px-6 py-4">{getWindDirectionSymbol(day.wind_direction_10m_dominant)} ({day.wind_direction_10m_dominant})</td>

              </tr>
            ))}
        </tbody>
      </table>
    </div>

  );
};

export default TableAllDates;

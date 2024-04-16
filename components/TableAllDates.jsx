import React from 'react';

const TableAllDates = ({ searchCity, dailyData, getWindDirectionSymbol }) => {
  // if (!searchCity || searchCity.trim() === '' || !dailyData) {
  //   return null; // If no city is selected, or the searchCity is empty, or dailyData is not available, return null to render nothing
  // }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">Forecast for {searchCity}</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wind Speed (Knots)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wind Direction</th>
          </tr>
        </thead>
        <tbody className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70">
        {/* <tbody className="bg-white divide-y divide-gray-200"> */}
          {dailyData && dailyData.length > 0 &&
            dailyData.map((day, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{day.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{day.wind_speed_10m_max}</td>
                <td className="px-6 py-4 whitespace-nowrap">{getWindDirectionSymbol(day.wind_direction_10m_dominant)} ({day.wind_direction_10m_dominant})</td>

              </tr>
            ))}
        </tbody>
      </table>
    </div>

  );
};

export default TableAllDates;

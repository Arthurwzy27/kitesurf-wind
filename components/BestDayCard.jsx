import React from 'react';

const BestDayCard = ({ bestDays, getWindDirectionSymbol }) => {
  console.log('BestDayCard bestDays', bestDays);
  return (
    <div
      className="flex flex-wrap mb-4"
      // className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70"
    >
      {bestDays && bestDays.map((day, index) => (
        <div key={index}
          // className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-4 border"
          className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-4 border bg-gray-100 bg-opacity-70"
          // className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70"
        >
          <div className="font-bold text-xl mb-2">Date: {day.date}</div>
          <p>Wind Speed: {day.wind_speed_10m_max} knots</p>
          <p>Wind Direction (Dominant): {getWindDirectionSymbol(day.wind_direction_10m_dominant)}</p>
        </div>
      ))}
    </div>
  )
}

export default BestDayCard

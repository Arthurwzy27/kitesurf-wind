import React from 'react';
import { formatDate } from '../utils/utils';
import WindDirection from './Search/WindDirection';
import WindSpeed from './Search/WindSpeed';

const BestDayCard = ({ bestDays, getWindDirectionSymbol }) => {
  return (
    <>
    <h2>Find the best day to kitsurf</h2>
      <div className="flex w-full pt-4 justify-evenly">
        <WindDirection className="w-1/2 mr-2" />
        <WindSpeed className="w-1/2 ml-2" />
      </div>
    <div
      className="flex flex-wrap mb-4"
      // className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70"
    >
      {bestDays && bestDays.map((day, index) => (
        <div key={index}
          // className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-4 border"
          className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-4 border bg-gray-100 bg-opacity-90"
          // className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70"
        >
          <span className="font-bold text-sm mb-2 text-center">{formatDate(day.date)}</span>
          <div className="text-gray-600 font-semibold">
            <span className="text-gray-600 text-3xl font-semibold">{day.wind_speed_10m_max}</span>
            <span className="text-gray-600 font-semibold">kn</span>
          </div>
          <p className="text-gray-600 font-semibold">{getWindDirectionSymbol(day.wind_direction_10m_dominant)}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default BestDayCard

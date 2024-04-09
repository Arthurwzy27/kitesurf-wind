import React from 'react'

const BestDayCard = ({ bestDays, getWindDirectionSymbol }) => {
  return (
    <div id="bestDayComponent" className="flex flex-wrap mb-4">
      {bestDays.map((day, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-4 border">
          <div className="font-bold text-xl mb-2">Date: {day.date}</div>
          <p>Wind Speed: {day.wind_speed_10m_max} knots</p>
          <p>Wind Direction (Dominant): {getWindDirectionSymbol(day.wind_direction_10m_dominant)}</p>
        </div>
      ))}
    </div>
  )
}

export default BestDayCard

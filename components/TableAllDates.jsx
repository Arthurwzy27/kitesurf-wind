import React from 'react'

const TableAllDates = ({allDays, getWindDirectionSymbol}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">All Days:</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th>Date</th>
            <th>Wind Speed (Knots)</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allDays.map((day, index) => (
            <tr key={index}>
              <td>{day.date}</td>
              <td>{day.wind_speed_10m_max}</td>
              <td>{getWindDirectionSymbol(day.wind_direction_10m_dominant)} ({day.wind_direction_10m_dominant})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableAllDates

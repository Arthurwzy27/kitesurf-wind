import React from 'react'

const WindSpeed = ({ windSpeed, setWindSpeed }) => {
  return (
    <div id="windSpeedInputLabel" className="mb-4">
      <label className="block font-bold mb-2">Enter Minimum Wind Speed:</label>
      <div className="relative">
        <input
          type="number"
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
          className="border p-2 w-full pr-12"
        />
        <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">Knots</span>
      </div>
    </div>
  )
}

export default WindSpeed

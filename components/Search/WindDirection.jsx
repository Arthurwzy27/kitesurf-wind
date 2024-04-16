import React from 'react'

const WindDirection = ({ selectedWindDirections, handleWindDirectionClick, setWindDirectionDropdownOpen, windDirectionDropdownOpen, handleWindDirectionSelect }) => {
  return (
    <div id="windDirectionInputLabel" className="mb-4">
      <label className="block font-bold mb-2">Select Wind Direction:</label>
      <div className="relative">
        <input
          type="text"
          readOnly
          value={selectedWindDirections.join(", ")}
          onClick={() => handleWindDirectionClick(setWindDirectionDropdownOpen, windDirectionDropdownOpen)}
          className="border p-2 w-full"
          placeholder="Click to select wind directions..."
        />
        {windDirectionDropdownOpen && (
          <div className="absolute z-10 bg-white border rounded mt-1 w-full max-h-24 overflow-y-auto">
            {["N", "NE", "E", "SE", "S", "SW", "W", "NW"].map((direction, index) => (
              <div key={index} className="flex items-center p-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  id={direction}
                  checked={selectedWindDirections.includes(direction)}
                  onChange={() => handleWindDirectionSelect(direction)}
                />
                <label htmlFor={direction} className="ml-2">{direction}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default WindDirection

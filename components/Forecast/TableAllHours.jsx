import React from 'react';
import { formatDate } from '../../utils/utils';

const TableAllHours = ({ hourlyData, getWindDirectionSymbol }) => {
  if (!hourlyData || hourlyData.length === 0) {
    return null;
  }

  // Function to format the date for display
  const formatDateHeader = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    return formattedDate;
  };

  // Function to format the time for display
  const formatHourlyTime = (dateString) => {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };

  // Define the specific hours to display
  const specificHours = [2, 5, 8, 11, 14, 17, 20, 23];

  // Extract unique dates from hourly data
  const uniqueDates = [...new Set(hourlyData.map(hour => formatDate(hour.date)))];

  // Create rows for the table
  const rows = [];

  // Loop through each unique date
  uniqueDates.forEach((date, dateIndex) => {
    rows.push(
      <tr key={`date-${dateIndex}`} className='text-center text-xs text-gray-500 uppercase tracking-wider'>
        <th className="px-6 py-3 font-medium bg-gray-50" colSpan="3">{formatDateHeader(date)}</th>
      </tr>
    );

    console.log('TableAllHours - hourlyData', hourlyData);
    // Loop through specific hours
    specificHours.forEach((hour, hourIndex) => {
      const hourData = hourlyData.find(data => formatDate(data.date) === date && new Date(data.date).getHours() === hour);
      rows.push(
        <tr key={`hour-${dateIndex}-${hourIndex}`} className='text-center whitespace-nowrap'>
          <td className="px-6 py-4 font-medium">{formatHourlyTime(hourData.date)}</td>
          <td className="px-6 py-4">{hourData.wind_speed_10m}</td>
          <td className="px-6 py-4">{getWindDirectionSymbol(hourData.wind_direction_10m)}</td>
        </tr>
      );
    });
  });


  // Function to calculate background color gradient based on wind speed
  const calculateBackgroundColor = (windSpeed) => {
    if (windSpeed >= 25) {
      return 'linear-gradient(to right, #ff6666 0%, rgba(255, 102, 102, 0) 15%)';
    } else if (windSpeed >= 22) {
      return 'linear-gradient(to right, #ffff66 0%, rgba(255, 255, 102, 0) 15%)';
    } else if (windSpeed >= 15) {
      return 'linear-gradient(to right, #66ff66 0%, rgba(102, 255, 102, 0) 15%)';
    } else if (windSpeed >= 11) {
      return 'linear-gradient(to right, #66ccff 0%, rgba(102, 204, 255, 0) 15%)';
    } else {
      return 'linear-gradient(to right, #00c7ff 0%, rgba(0, 199, 255, 0) 15%)';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-gray-100 bg-opacity-70">
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default TableAllHours;

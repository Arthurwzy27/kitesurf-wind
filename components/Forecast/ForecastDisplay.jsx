import React, { useState, useEffect } from 'react';
import { useKitesurfingInfoContext } from '../../context/kitesurfingInfoContext';
import TableAllDates2 from './TableAllDates2';
import TableAllHours from './TableAllHours';
import { fetchAllHoursCity } from '../../hook/fetchApi';
import { getWindDirectionSymbol } from '../../utils/weatherUtils';

// const ForecastDisplay = () => {
//   const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
//   const { coordinates, dailyData, hourlyData } = kitesurfingInfo;

//   // Fetch hourly forecast data
//   useEffect(() => {
//     if (coordinates) {
//       fetchAllHoursCity({ setKitesurfingInfo, coordinates });
//     }
//   }, [coordinates, setKitesurfingInfo]);

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Forecast Display</h2>
//       {dailyData && <TableAllDates2 dailyData={dailyData} getWindDirectionSymbol={getWindDirectionSymbol} />} {/* Pass getWindDirectionSymbol here */}
//       {hourlyData && <TableAllHours hourlyData={hourlyData} getWindDirectionSymbol={getWindDirectionSymbol} />}
//     </div>
//   );
// };

// export default ForecastDisplay;


const ForecastDisplay = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const { coordinates, dailyData, hourlyData } = kitesurfingInfo;

  const [selectedForecast, setSelectedForecast] = useState('daily');

  // Fetch hourly forecast data
  useEffect(() => {
    const fetchData = async () => {
      if (coordinates && selectedForecast === 'hourly') {
        console.log('test');
        await fetchAllHoursCity({ setKitesurfingInfo, coordinates });
      }
    };

    fetchData();
  }, [coordinates, selectedForecast, setKitesurfingInfo]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Forecast Display</h2>
      <div className="flex justify-center items-center mb-4">
        <button className={`bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-l-lg ${selectedForecast ? '' : 'bg-red-500 text-gray-400'}`} onClick={() => setSelectedForecast('daily')}>Day Forecast</button>
        <button className={`bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-r-lg ${selectedForecast ? 'bg-blue-500 text-gray-400' : ''}`} onClick={() => setSelectedForecast('hourly')}>Hourly Forecast</button>
      </div>

      {/* <div>
        <button onClick={() => setSelectedForecast('daily')}>Day Forecast</button>
        <button onClick={() => setSelectedForecast('hourly')}>Hourly Forecast</button>
      </div> */}
      {selectedForecast === 'daily' && dailyData && (
        <TableAllDates2 dailyData={dailyData} getWindDirectionSymbol={getWindDirectionSymbol} />
      )}
      {selectedForecast === 'hourly' && hourlyData && (
        <TableAllHours hourlyData={hourlyData} getWindDirectionSymbol={getWindDirectionSymbol} />
      )}
    </div>
  );
};

export default ForecastDisplay;

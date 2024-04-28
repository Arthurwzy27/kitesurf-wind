import React from 'react';
import { useKitesurfingInfoContext } from '../../../context/kitesurfingInfoContext';
import { useData } from '../../../hook/useData';
import HourForecast1 from './HourForecast1';
import ForecastDailyCard1 from './ForecastDailyCard1';

function ForecastDisplay1() {
  const { kitesurfingInfo } = useKitesurfingInfoContext();
  const { handleDayClick } = useData();
  const { selectedDay, selectedHourlyData, selectedDayIndex, dailyData } = kitesurfingInfo;

  return (
    <>
      {dailyData && (
        <div className='flex justify-between overflow-x-scroll p-6 rounded-lg shadow-lg'>
          {dailyData?.map((day, index) => (
            <ForecastDailyCard1
              key={index}
              handleDayClick={() => handleDayClick(day, index)}
              date={day.date}
              windSpeed={day.wind_speed_10m_max}
              windDirection={day.wind_direction_10m_dominant}
              tempMin={day.temperature_2m_min}
              tempMax={day.temperature_2m_max}
              isSelected={index === selectedDayIndex}
            />
          ))}
        </div>
      )}

      {selectedDay && selectedHourlyData && (
        <div className="max-w-md mx-auto overflow-x-scroll">
          <div className="backdrop-blur-sm bg-transparent shadow-lg rounded-lg p-4 mb-4">
            <HourForecast1 hourlyData={selectedHourlyData} />
          </div>
        </div>
      )}
    </>
  );
}

export default ForecastDisplay1;




// import React, { useState, useEffect } from 'react';
// import { useKitesurfingInfoContext } from '../../../context/kitesurfingInfoContext';
// import { fetchAllHoursCity } from '../../../hook/fetchApi';
// import HourForecast1 from './HourForecast1';
// import ForecastDailyCard1 from './ForecastDailyCard1';

// function ForecastDisplay1() {
//   const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
//   const {
//     coordinates,
//     dailyData,
//     hourlyData,
//   } = kitesurfingInfo;
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [selectedHourlyData, setSelectedHourlyData] = useState(null);
//   const [selectedDayIndex, setSelectedDayIndex] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (selectedDay) {
//         console.log('selectedDay', selectedDay);
//         try {
//           const response = await fetchAllHoursCity({ setKitesurfingInfo, coordinates });
//           if (response && response.hourlyData) {
//             const flattenedHourlyData = response.hourlyData.flat();
//             setKitesurfingInfo(prevState => ({
//               ...prevState,
//               hourlyData: flattenedHourlyData,
//             }));
//             setSelectedHourlyData(flattenedHourlyData);
//           } else {
//             console.error("Hourly data not available:", response);
//           }
//         } catch (error) {
//           console.error("Error fetching hourly data:", error);
//         }
//       }
//     };

//     fetchData();
//   }, [coordinates, selectedDay, setKitesurfingInfo, setSelectedHourlyData]);

//   const handleDayClick = (day, index) => {
//     setSelectedDay(day);
//     setSelectedDayIndex(index);
//     const selectedDate = day.date.split('T')[0];
//     const filteredData = hourlyData?.filter(
//       (hour) => hour?.date.split('T')[0] === selectedDate
//     );
//     setSelectedHourlyData(filteredData);
//   };

//   return (
//     <>
//       {dailyData && (
//         <div className='flex justify-between overflow-x-scroll p-6 rounded-lg shadow-lg'>
//           {dailyData?.map((day, index) => (
//             <ForecastDailyCard1
//               key={index}
//               handleDayClick={() => handleDayClick(day, index)} // Pass day and index to handleDayClick
//               date={day.date}
//               windSpeed={day.wind_speed_10m_max}
//               windDirection={day.wind_direction_10m_dominant}
//               tempMin={day.temperature_2m_min}
//               tempMax={day.temperature_2m_max}
//               isSelected={index === selectedDayIndex}
//             />
//           ))}
//         </div>
//       )}

//       {selectedDay && selectedHourlyData && (
//         <div className="max-w-md mx-auto overflow-x-scroll">
//           <div className="backdrop-blur-sm bg-transparent shadow-lg rounded-lg p-4 mb-4">
//             <HourForecast1 hourlyData={selectedHourlyData} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ForecastDisplay1;

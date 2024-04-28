import { useEffect } from 'react';
import { fetchAllHoursCity } from './fetchApi';
import { useKitesurfingInfoContext } from '../context/kitesurfingInfoContext';

export const useData = () => {
  const { kitesurfingInfo, setKitesurfingInfo } = useKitesurfingInfoContext();
  const {
    coordinates,
    hourlyData,
  } = kitesurfingInfo

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (coordinates) {
          await fetchAllHoursCity({ setKitesurfingInfo, coordinates: coordinates });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [coordinates, setKitesurfingInfo]);

  const handleDayClick = (day, index) => {
    const selectedDate = day.date.split('T')[0];
    const filteredData = hourlyData?.filter(
      (hour) => hour?.date.split('T')[0] === selectedDate
    );
    setKitesurfingInfo(prevState => ({
      ...prevState,
      selectedDay: day,
      selectedDayIndex: index,
      selectedHourlyData: filteredData,
    }));
  };

  return { handleDayClick };
};

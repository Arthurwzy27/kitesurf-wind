export const getWindDirectionSymbol = (angle) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(angle / 45) % 8;
  return directions[index];
};


export const findBestDays = (dailyData, setBestDays, setAllDays) => {
  const suitableDays = [];
  const allDays = [];

  if (dailyData && dailyData.time && dailyData.time.length > 0) {
    for (let i = 0; i < dailyData.time.length; i++) {
      const date = dailyData.time[i];
      const day = {
        date: date,
        temperature_2m_max: dailyData.temperature_2m_max[i],
        temperature_2m_min: dailyData.temperature_2m_min[i],
        wind_speed_10m_max: dailyData.wind_speed_10m_max[i],
        wind_direction_10m_dominant: dailyData.wind_direction_10m_dominant[i]
      };

      const isSuitable = (
        ((day.wind_direction_10m_dominant >= 315 && day.wind_direction_10m_dominant < 360) ||
          (day.wind_direction_10m_dominant >= 0 && day.wind_direction_10m_dominant < 45) ||
          (day.wind_direction_10m_dominant >= 135 && day.wind_direction_10m_dominant < 225)) &&
        day.wind_speed_10m_max >= 9
      );

      allDays.push(day);

      if (isSuitable) {
        suitableDays.push(day);
      }
    }
  }

  setBestDays(suitableDays);
  setAllDays(allDays);
};

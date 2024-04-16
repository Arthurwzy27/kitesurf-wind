export const getWindDirectionSymbol = (angle) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(angle / 45) % 8;
  return directions[index];
};

export const findBestDays = (dailyData) => {
  const suitableDays = [];

  if (dailyData && dailyData.length > 0) {
    for (let i = 0; i < dailyData.length; i++) {
      const day = dailyData[i];

      const isSuitable = (
        ((day.wind_direction_10m_dominant >= 315 && day.wind_direction_10m_dominant < 360) ||
          (day.wind_direction_10m_dominant >= 0 && day.wind_direction_10m_dominant < 45) ||
          (day.wind_direction_10m_dominant >= 135 && day.wind_direction_10m_dominant < 225)) &&
        day.wind_speed_10m_max >= 9
      );

      if (isSuitable) {
        suitableDays.push(day);
      }
    }
  }

  return { suitableDays };
};

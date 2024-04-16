export const getWindDirectionSymbol = (angle) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(angle / 45) % 8;
  return directions[index];
};

export const findBestDays = (dailyData, selectedWindDirection, windSpeed) => {
  const suitableDays = [];

  if (dailyData && dailyData.length > 0) {
    for (let i = 0; i < dailyData.length; i++) {
      const day = dailyData[i];

      const isSuitable = (
        // Check if the wind direction of the day is included in the selected wind direction
        selectedWindDirection
        && selectedWindDirection.includes(getWindDirectionSymbol(day.wind_direction_10m_dominant))
        && day.wind_speed_10m_max >= windSpeed
      );

      if (isSuitable) {
        suitableDays.push(day);
      }
    }
  }

  return { suitableDays };
};

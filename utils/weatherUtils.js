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

// Fonction pour définir la couleur en fonction de la vitesse du vent
export const getWindColor = (speed) => {
  if (speed >= 0 && speed <= 8) {
    // Progression de bleu marine à bleu clair pour les vents de 0 à 8 Knots
    const blueShade = Math.floor((speed / 8) * 255); // Calculer la nuance de bleu en fonction de la vitesse
    return `rgb(0, 0, ${blueShade})`;
  } else if (speed > 8 && speed <= 15) {
    // Progression de vert clair à vert foncé pour les vents de 8.1 à 15 Knots
    const greenShade = Math.floor(((speed - 8.1) / (15 - 8.1)) * 255); // Calculer la nuance de vert en fonction de la vitesse
    return `rgb(0, ${greenShade}, 0)`;
  } else if (speed > 15 && speed <= 20) {
    // Progression de jaune clair à jaune foncé pour les vents de 15.1 à 20 Knots
    const yellowShade = Math.floor(((speed - 15.1) / (20 - 15.1)) * 255); // Calculer la nuance de jaune en fonction de la vitesse
    return `rgb(255, 255, ${yellowShade})`;
  } else if (speed > 20 && speed <= 30) {
    // Progression de rouge clair à rouge foncé pour les vents de 20.1 à 30 Knots
    const redShade = Math.floor(((speed - 20.1) / (30 - 20.1)) * 255); // Calculer la nuance de rouge en fonction de la vitesse
    return `rgb(255, ${255 - redShade}, ${255 - redShade})`;
  } else if (speed > 30 && speed <= 50) {
    // Progression de violet clair à violet foncé pour les vents de 30.1 à 50 Knots
    const purpleShade = Math.floor(((speed - 30.1) / (50 - 30.1)) * 255); // Calculer la nuance de violet en fonction de la vitesse
    return `rgb(${purpleShade}, 0, ${purpleShade})`;
  } else {
    return 'black'; // Couleur par défaut si la vitesse du vent est en dehors des plages spécifiées
  }
};

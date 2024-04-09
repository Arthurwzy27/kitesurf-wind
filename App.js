import React, { useState, useEffect } from "react";
import axios from "axios";

const KitesurfingInfo = () => {
  const [kitesurfingInfo, setKitesurfingInfo] = useState([]);
  const [bestDays, setBestDays] = useState([]);
  const [allDays, setAllDays] = useState([]);

  useEffect(() => {
    const fetchKitesurfingInfo = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=41.2779&longitude=1.9703&current=temperature_2m,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=kn&timezone=Europe%2FBerlin&forecast_days=16"
        );
        const dailyData = response.data.daily;
        setKitesurfingInfo(dailyData);
        findBestDays(dailyData);
      } catch (error) {
        console.error("Error fetching kitesurfing info:", error);
      }
    };

    fetchKitesurfingInfo();
  }, []);

  const findBestDays = (dailyData) => {
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

  const getWindDirectionSymbol = (angle) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(angle / 45) % 8;
    return directions[index];
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Kitesurfing Information</h1>

      <div className="flex flex-wrap">
        {bestDays.map((day, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-2 p-4 border">
            <div className="font-bold text-xl mb-2">Date: {day.date}</div>
            <p>Wind Speed: {day.wind_speed_10m_max} knots</p>
            <p>Wind Direction (Dominant): {getWindDirectionSymbol(day.wind_direction_10m_dominant)}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">All Days:</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th>Date</th>
              <th>Wind Speed (Knots)</th>
              <th>Wind Direction</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allDays.map((day, index) => (
              <tr key={index}>
                <td>{day.date}</td>
                <td>{day.wind_speed_10m_max}</td>
                <td>{getWindDirectionSymbol(day.wind_direction_10m_dominant)} ({day.wind_direction_10m_dominant})</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KitesurfingInfo;

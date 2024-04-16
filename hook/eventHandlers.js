export const handleCityInputChange = (e, setKitesurfingInfo) => {
  setKitesurfingInfo(prevState => ({
    ...prevState,
    searchCity: e.target.value,
  }));
};

export const handleCityClick = (city, setKitesurfingInfo) => {
  setKitesurfingInfo(prevState => ({
    ...prevState,
    coordinates: { latitude: city.latitude, longitude: city.longitude },
    searchCity: "",
  }));
};

export const handleWindDirectionClick = (setWindDirectionDropdownOpen, windDirectionDropdownOpen) => {
  setWindDirectionDropdownOpen(!windDirectionDropdownOpen);
};

export const handleWindDirectionSelect = ({ direction, selectedWindDirections, setSelectedWindDirections, setWindDirectionDropdownOpen }) => {
  if (!selectedWindDirections.includes(direction)) {
    setSelectedWindDirections([...selectedWindDirections, direction]);
  }
  setWindDirectionDropdownOpen(false);
};

export const handleRemoveWindDirection = (direction, setSelectedWindDirections, selectedWindDirections) => {
  setSelectedWindDirections(selectedWindDirections.filter((dir) => dir !== direction));
};

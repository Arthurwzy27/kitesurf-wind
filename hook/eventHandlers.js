export const handleCityInputChange = (e, setCityInput) => {
  setCityInput(e.target.value);
};

export const handleCitySelect = (city, setSelectedCity, setCityInput) => {
  setSelectedCity(city);
  setCityInput("");
};

export const handleWindDirectionClick = (setWindDirectionDropdownOpen, windDirectionDropdownOpen) => {
  setWindDirectionDropdownOpen(!windDirectionDropdownOpen);
};

export const handleWindDirectionSelect = ({direction, selectedWindDirections, setSelectedWindDirections, setWindDirectionDropdownOpen}) => {
  if (!selectedWindDirections.includes(direction)) {
    setSelectedWindDirections([...selectedWindDirections, direction]);
  }
  setWindDirectionDropdownOpen(false);
};

export const handleRemoveWindDirection = (direction, setSelectedWindDirections, selectedWindDirections) => {
  setSelectedWindDirections(selectedWindDirections.filter((dir) => dir !== direction));
};

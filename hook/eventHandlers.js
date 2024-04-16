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

// WIND DIRECTION COMPONENT

export const toggleWindDropdown = (setKitesurfingInfo, windDropdownOpen) => {
  setKitesurfingInfo(prevState => ({
    ...prevState,
    windDropdownOpen: !windDropdownOpen
  }));
};

export const handleDirectionSelect = (setKitesurfingInfo, selectedWindDirection, direction) => {
  if (selectedWindDirection.includes(direction)) {
    setKitesurfingInfo(prevState => ({
      ...prevState,
      selectedWindDirection: prevState.selectedWindDirection.filter((dir) => dir !== direction)
    }));
  } else {
    setKitesurfingInfo(prevState => ({
      ...prevState,
      selectedWindDirection: [...prevState.selectedWindDirection, direction]
    }));
  }
};

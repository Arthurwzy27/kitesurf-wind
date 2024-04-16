import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setVisible(false);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (!visible) {
      setVisible(true);
    }
  };

  const handleSelectItem = (item) => {
    console.log("Selected Item:", item);
    setSearchValue(`${item.name}, ${item.country}`);
    setSelectedItem(item);
    setVisible(false);
    onSelect(item);
  };



  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
        onFocus={() => setVisible(true)}
      />
      {visible && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option.id} onClick={() => handleSelectItem(option)}>
              {`${option.name}, ${option.country}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

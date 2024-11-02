"use client"; // Ensure this is a Client Component

import { useState } from 'react';

// Define the types for props
interface DropdownProps {
  types: string[]; // Array of types
  selectedType: string; // Selected type from the parent component
  onTypeChange: (type: string) => void; // Callback function to update selectedType in the parent component
}

const Dropdown: React.FC<DropdownProps> = ({ types, selectedType, onTypeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectType = (type: string) => {
    onTypeChange(type); // Call the parent function to update the selected type
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        id="dropdownDefaultButton" 
        onClick={toggleDropdown}
        className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase" 
        type="button"
      >
        {selectedType} {/* Display the selected type */}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {types.map((type, index) => (
            <li key={index}>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase"
                onClick={() => handleSelectType(type)} // Update parent component's state when clicked
              >
                <span className='uppercase'>{type}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

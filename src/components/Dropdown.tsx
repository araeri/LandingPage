import React, { useState } from 'react';

interface DropdownProps {
  title: string;
  options: string[];
  alignRight?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ title, options, alignRight = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lockedOpen, setLockedOpen] = useState(false);

  const toggleDropdown = () => {
    if (lockedOpen) {
      setIsOpen(false);
      setLockedOpen(false);
    } else {
      setIsOpen(true);
      setLockedOpen(true);
    }
  };

  const handleMouseEnter = () => {
    if (!lockedOpen && window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!lockedOpen && window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative md:inline-block w-full md:w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="hover:text-gray-700 focus:outline-none uppercase text-sm w-full md:w-auto text-left md:text-center"
        onClick={toggleDropdown}
      >
        {title}
      </button>

      {isOpen && (
        <div
          className={`
            ${alignRight ? 'md:absolute md:right-0' : 'md:absolute md:left-0'}
                md:mt-2 mt-0 w-full md:w-48 bg-transparent md:bg-white rounded-none md:rounded-md shadow-none md:shadow-lg text-sm z-10
          `}
        >
          <ul className="space-y-1 md:space-y-2 p-0 md:p-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:underline hover:underline-offset-4 cursor-pointer capitalize"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

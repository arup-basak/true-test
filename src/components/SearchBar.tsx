import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface Props {
  className?: string;
  dropDownOnChange: (value: string) => void;
  onType: (value: string) => void;
}

const dropdowns = ['No Filter', 'Success', 'Payment Required', 'Draft', 'Failed'];

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const SearchBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(dropdowns[0]);
  const [searchText, setSearchText] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);

    props.dropDownOnChange(category.toLowerCase().replace(" ", "-"))
  };

  const handleOnChange = (value: string) => {
    setSearchText(value);
    props.onType(value)
  }

  return (
    <div className={`flex ${props.className}`}>
      <motion.button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="h-fit flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 outline-none"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedCategory}
        <motion.svg
          className={`w-2.5 h-2.5 ml-2.5 ${isOpen ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <motion.path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </motion.svg>
      </motion.button>
      {isOpen && (
        <motion.div
          id="dropdown"
          className="mt-12 z-10 bg-white divide-y divide-gray-100 rounded-md shadow w-44 absolute"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2 }}
        >
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
            {dropdowns.map((item) => {
              if (item !== selectedCategory) {
                return (
                  <li key={item}>
                    <motion.button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                      onClick={() => selectCategory(item)}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.button>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </motion.div>
      )}
      <motion.input
        type="search"
        id="search-dropdown"
        className="block p-2.5 px-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-md border-l-gray-50 border-l-2 border border-gray-300 outline-none overflow-hidden"
        style={{ textOverflow: 'ellipsis' }} // Add text overflow with ellipsis
        placeholder="Search Report Status..."
        value={searchText}
        onChange={(e) => handleOnChange(e.target.value)}
        required
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default SearchBar;

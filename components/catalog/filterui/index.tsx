// import React, { useState } from 'react';
// import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

// const people = [
//   { id: 1, name: 'Durward Reynolds' },
//   { id: 2, name: 'Kenton Towne' },
//   { id: 3, name: 'Therese Wunsch' },
//   { id: 4, name: 'Benedict Kessler' },
//   { id: 5, name: 'Katelyn Rohan' },
// ]

// const FilterUI: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState('Sofas');
//   const [selectedPerson, setSelectedPerson] = useState(people[0])


//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className="flex items-center">
//       <span className="mr-2 text-gray-700">Sort by:</span>
//       <div className="relative mr-7">
//         <select
//           value={selectedOption}
//           onChange={handleSelectChange}
//           className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option>Sofas</option>
//           <option>Armless chairs</option>
//           <option>Slipper chairs</option>
//           <option>Newest</option>
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//           </svg>
//         </div>
//       </div>
//       <div>
//       <Listbox value={selectedPerson} onChange={setSelectedPerson}>
//       <ListboxButton>{selectedPerson.name}</ListboxButton>
//       <ListboxOptions anchor="bottom">
//         {people.map((person) => (
//           <ListboxOption key={person.id} value={person} className="data-[focus]:bg-blue-100">
//             {person.name}
//           </ListboxOption>
//         ))}
//       </ListboxOptions>
//     </Listbox>
//       </div>
//     </div>
//   );
// };

// export default FilterUI;


import React, { useState } from 'react';
import classNames from 'classnames';

const FilterUI: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Sofas');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectChange = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative text-left">
    <div className='flex items-center'>
      <span className="mr-[21px] text-gray-700 p-2 ">Sort by:</span>
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-[206px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedOption}
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right w-[206px] absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleSelectChange('Sofas')}
              className={classNames("block px-4 py-2 text-sm text-gray-700 w-full text-left", {
                "bg-gray-100": selectedOption === 'Sofas'
              })}
            >
              Sofas
            </button>
            <button
              onClick={() => handleSelectChange('Armless chairs')}
              className={classNames("block px-4 py-2 text-sm text-gray-700 w-full text-left", {
                "bg-gray-100": selectedOption === 'Armless chairs'
              })}
            >
              Armless chairs
            </button>
            <button
              onClick={() => handleSelectChange('Slipper chairs')}
              className={classNames("block px-4 py-2 text-sm text-gray-700 w-full text-left", {
                "bg-gray-100": selectedOption === 'Slipper chairs'
              })}
            >
              Slipper chairs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterUI;

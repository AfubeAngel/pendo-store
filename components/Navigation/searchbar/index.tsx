import React from 'react';
import Image from 'next/image';

const SearchBar: React.FC = () => {
  return (
    <div className="relative h-10 p-4 flex items-center bg-gray-200 rounded-lg border border-gray-300">
      <input
        type="text"
        placeholder="Search"
        className="w-full font-base rounded-lg bg-gray-200 border border-transparent focus:outline-none "
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <Image src="/icons/search.svg" alt="Search icon" width={18} height={18} />
      </div>
    </div>
  );
};

export default SearchBar;

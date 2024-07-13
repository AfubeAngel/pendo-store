import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/allproducts?search=${searchQuery.trim()}`);
    }
  };
  
  return (
    <form onSubmit={handleSearch} className="relative h-10 p-4 flex items-center bg-gray-200 rounded-lg border border-gray-300">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full font-base rounded-lg bg-gray-200 border border-transparent focus:outline-none "
      />
      <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <Image src="/icons/search.svg" alt="Search icon" width={18} height={18} />
      </button>
    </form>
  );
};

export default SearchBar;

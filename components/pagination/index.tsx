import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex space-x-2 justify-center mt-20 ">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border rounded-lg ${currentPage === page ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          {page}
          
        </button>
      ))}
    </div>
  );
};

export default Pagination;

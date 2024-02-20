import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Pagination.css';

const Pagination = ({ currentPage, handlePageChange, totalCards }) => {
  const cardsPerPage = 4;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const disablePrev = currentPage === 1;
  console.log(totalCards);
  const disableNext = currentPage === totalPages || totalCards === 0;

  // Calculate start and end page numbers for rendering
  let startPage, endPage;
  if (totalPages <= 5) {
    // Less than 5 pages, show all
    startPage = 1;
    endPage = totalPages;
  } else {
    // More than 5 pages
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disablePrev}
      >
        <FaChevronLeft />
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disableNext}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;

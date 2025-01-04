import { PaginationProps } from "@/Types/ProductType";
import Link from "next/link";
import React, { FC } from "react";



const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, type }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <ul className={`pagination ${type === "job" ? "pagination-style-1 justify-content-center" : ""}`}>
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <Link className='page-link' href='#!' aria-label='Previous' onClick={() => handlePageChange(currentPage - 1)}>
          <i className='ri-arrow-left-double-fill' />
        </Link>
      </li>
      {pages.map((page) => (
        <li key={page} className={`page-item`}>
          <Link className={`page-link ${currentPage === page ? "active" : ""}`} href='#!' onClick={() => handlePageChange(page)}>
            {page}
          </Link>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
        <Link className='page-link' href='#!' aria-label='Next' onClick={() => handlePageChange(currentPage + 1)}>
          <i className='ri-arrow-right-double-fill' />
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;

import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

import Wrapper from './../styledComponents/PageBtnsContainer';
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnsContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1; // arrays start at 0 but pages start from 1
  });

  return (
    <Wrapper>
      <button className='btn prev-btn'>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className='btn-container'>
        {pages.map((pageNum) => {
          return (
            <button
              className={`btn page-btn ${pageNum === currentPage && 'active'}`}
              key={`page-btn-${pageNum}`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button className='btn next-btn'>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnsContainer;

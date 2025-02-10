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

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageBtn = ({ pageNum, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass && 'active'}`}
        key={`page-btn-${pageNum}`}
        onClick={() => handlePageChange(pageNum)}
      >
        {pageNum}
      </button>
    );
  };

  const renderPageBtns = () => {
    const pageBtns = [];

    // first page
    pageBtns.push(addPageBtn({ pageNum: 1, activeClass: currentPage === 1 }));

    // dots
    if (currentPage > 3) {
      pageBtns.push(
        <span className='page-btn dots' key='dots-before'>
          ...
        </span>
      );
    }

    // page before current/active page
    if (currentPage !== 1 && currentPage !== 2) {
      pageBtns.push(
        addPageBtn({
          pageNum: currentPage - 1,
          activeClass: false,
        })
      );
    }

    // current/active page
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageBtns.push(
        addPageBtn({
          pageNum: currentPage,
          activeClass: true,
        })
      );
    }

    // page after current/active page
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageBtns.push(
        addPageBtn({
          pageNum: currentPage + 1,
          activeClass: false,
        })
      );
    }

    // dots
    if (currentPage < numOfPages - 2) {
      pageBtns.push(
        <span className='page-btn dots' key='dots-after'>
          ...
        </span>
      );
    }

    // last page
    pageBtns.push(
      addPageBtn({
        pageNum: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );

    return pageBtns;
  };

  return (
    <Wrapper>
      <button
        className='btn prev-btn'
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) {
            prevPage = 1;
          }
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className='btn-container'>{renderPageBtns()}</div>

      <button
        className='btn next-btn'
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) {
            nextPage = numOfPages;
          }
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnsContainer;

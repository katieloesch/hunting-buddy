import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

import Wrapper from './../styledComponents/PageBtnsContainer';
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnsContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  console.log(numOfPages, currentPage);

  return <h1>PageBtnsContainer</h1>;
};

export default PageBtnsContainer;

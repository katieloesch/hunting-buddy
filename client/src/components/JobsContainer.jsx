import React from 'react';

import Wrapper from '../styledComponents/JobsContainer';
import { JobCard, PageBtnsContainer } from './';
import { useAllJobsContext } from '../pages/AllJobs';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages } = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} {jobs.length > 1 ? 'jobs' : 'job'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </div>

      {numOfPages > 1 && <PageBtnsContainer />}
    </Wrapper>
  );
};

export default JobsContainer;

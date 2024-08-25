import React from 'react';

import Wrapper from '../styledComponents/JobsContainer';
import JobCard from './JobCard';
import { useAllJobsContext } from '../pages/AllJobs';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='jobs'>
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;

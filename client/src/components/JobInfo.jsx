import React from 'react';
import Wrapper from '../styledComponents/JobInfo';

const JobInfo = ({ icon, txt }) => {
  return (
    <Wrapper>
      <span className='job-icon'>{icon}</span>
      <span className='job-txt'>{txt}</span>
    </Wrapper>
  );
};

export default JobInfo;

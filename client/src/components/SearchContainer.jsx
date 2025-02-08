import React from 'react';
import { FormBtnSubmit, FormInput, FormSelect } from '.';
import Wrapper from '../styledComponents/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
          <FormInput type='search' name='search' defaultValue='abc' />

          <FormSelect
            labelText='job status'
            name='jobStatus'
            options={['all', ...Object.values(JOB_STATUS)]}
            defaultValue='all'
          />

          <FormSelect
            labelText='job type'
            name='jobType'
            options={['all', ...Object.values(JOB_TYPE)]}
            defaultValue='all'
          />

          <FormSelect
            name='sort'
            defaultValue='newest'
            options={[...Object.values(JOB_SORT_BY)]}
          />

          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
            Reset Search Values
          </Link>

          {/* TEMP */}
          <FormBtnSubmit formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;

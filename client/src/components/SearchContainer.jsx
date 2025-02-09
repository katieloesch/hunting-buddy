import React from 'react';
import { FormBtnSubmit, FormInput, FormSelect } from '.';
import Wrapper from '../styledComponents/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    // create 2s delay in form submission for search box
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000); // 2s = 2000ms
    };
  };

  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
          <FormInput
            type='search'
            name='search'
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <FormSelect
            labelText='job status'
            name='jobStatus'
            options={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormSelect
            labelText='job type'
            name='jobType'
            options={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormSelect
            name='sort'
            defaultValue={sort}
            options={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;

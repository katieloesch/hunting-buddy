import React from 'react';
import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../styledComponents/DashboardFormPage';
import { FormBtnSubmit, FormInput, FormSelect } from '../components';
import customFetch from '../utils/customFetch';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';

export const action =
  (queryClient) =>
  ({ request }) => {
    return request
      .formData()
      .then((formData) => {
        const data = Object.fromEntries(formData);
        return customFetch.post('/jobs', data);
      })
      .then(() => {
        queryClient.invalidateQueries(['jobs']);
        toast.success('Job added successfully!');
        return redirect('all-jobs');
      })
      .catch((error) => {
        toast.error(error?.response?.data?.msg);
        return error;
      });
  };

const AddJob = () => {
  const { user } = useOutletContext(); // variable provided in DashboardLayout (ln 65)

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add Job</h4>

        <div className='form-center'>
          <FormInput type='text' name='position' />
          <FormInput type='text' name='company' />
          <FormInput
            type='text'
            labelText='location'
            name='jobLocation'
            defaultValue={user.location}
          />
          <FormSelect
            name='jobStatus'
            labelText='status'
            options={Object.values(JOB_STATUS)}
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormSelect
            name='jobType'
            labelText='contract'
            options={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
          />
          <FormBtnSubmit formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;

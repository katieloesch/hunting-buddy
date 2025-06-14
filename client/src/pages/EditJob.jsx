import React from 'react';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

import Wrapper from '../styledComponents/DashboardFormPage';
import { FormBtnSubmit, FormInput, FormSelect } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import customFetch from '../utils/customFetch';

const singleJobQuery = (id) => {
  return {
    queryKey: ['job', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  ({ params }) => {
    return queryClient
      .ensureQueryData(singleJobQuery(params.jobId))
      .then(() => params.jobId)
      .catch((error) => {
        toast.error(error?.response?.data?.msg);
        return redirect('/dashboard/all-jobs');
      });
  };

export const action =
  (queryClient) =>
  ({ request, params }) => {
    return request
      .formData()
      .then((formData) => {
        const data = Object.fromEntries(formData);
        return customFetch.patch(`/jobs/${params.jobId}`, data);
      })
      .then(() => {
        queryClient.invalidateQueries(['jobs']);
        toast.success('Job edited successfully!');
        return redirect('/dashboard/all-jobs');
      })
      .catch((error) => {
        toast.error(error?.response?.data?.msg);
        return error;
      });
  };

const EditJob = () => {
  const id = useLoaderData();

  const {
    data: { job },
  } = useQuery(singleJobQuery(id));

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Edit Job</h4>
        <div className='form-center'>
          <FormInput type='text' name='position' defaultValue={job.position} />
          <FormInput type='text' name='company' defaultValue={job.company} />
          <FormInput
            type='text'
            name='jobLocation'
            labelText='Location'
            defaultValue={job.jobLocation}
          />

          <FormSelect
            name='jobStatus'
            labelText='status'
            options={Object.values(JOB_STATUS)}
            defaultValue={job.jobStatus}
          />
          <FormSelect
            name='jobType'
            labelText='contract'
            options={Object.values(JOB_TYPE)}
            defaultValue={job.jobType}
          />

          <FormBtnSubmit formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;

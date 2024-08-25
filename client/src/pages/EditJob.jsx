import React from 'react';
import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../styledComponents/DashboardFormPage';
import { FormInput, FormSelect } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.jobId}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};

export const action = async () => {
  return null;
};

const EditJob = () => {
  const { job } = useLoaderData();
  console.log(job);

  return <h2>Edit Job Page</h2>;
};

export default EditJob;

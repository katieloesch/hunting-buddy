import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import customFetch from '../utils/customFetch';

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.jobId}`);
    toast.success('Job deleted successfully!');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard/all-jobs');
};

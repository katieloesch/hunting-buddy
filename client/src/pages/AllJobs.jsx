import React, { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';

const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      'jobs',
      search ?? '',
      jobStatus ?? 'all',
      jobType ?? 'all',
      sort ?? 'newest',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/jobs', {
        params,
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allJobsQuery(params));

    return { searchValues: { ...params } };

    // try {
    //   const { data } = await customFetch.get('/jobs', {
    //     params,
    //   });
    //   return { data, searchValues: { ...params } };
    // } catch (error) {
    //   toast.error(error?.response?.data?.msg);
    //   return error;
    // }

    // fixing npm run build issue

    // return customFetch
    //   .get('/jobs', { params })
    //   .then(({ data }) => ({ data, searchValues: { ...params } }))
    //   .catch((error) => {
    //     toast.error(error?.response?.data?.msg);
    //     return error;
    //   });
  };

const AllJobsContext = createContext();

const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;

import React from 'react';
import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// export const loader = async () => {
//   try {
//     const response = await customFetch.get('/jobs/stats');
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// fixing npm run build issue
// export const loader = () => {
//   return customFetch
//     .get('/jobs/stats')
//     .then((response) => response.data)
//     .catch((error) => error);
// };

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
};

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData();

  const { data } = useQuery(statsQuery);
  const { defaultStats, monthlyApplications } = data;

  return (
    <React.Fragment>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </React.Fragment>
  );
};

export default Stats;

import React from 'react';
import { useLoaderData, redirect } from 'react-router-dom';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

import customFetch from '../utils/customFetch';
import Wrapper from '../styledComponents/StatsContainer';
import { StatsItem } from '../components';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorised to view this page!');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatsItem
        title='current users'
        count={users}
        color='#e99e49'
        bg='#fcefc7'
        icon={<FaSuitcaseRolling />}
      />
      <StatsItem
        title='total jobs'
        count={jobs}
        color='#8b64cb'
        bg='#e0e8f9'
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};

export default Admin;

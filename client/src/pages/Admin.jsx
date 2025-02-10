import React from 'react';
import { useLoaderData, redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import customFetch from '../utils/customFetch';
import Wrapper from '../styledComponents/StatsContainer';
import { StatsItem } from '../components';

// export const loader = async () => {
//   try {
//     const response = await customFetch.get('/users/admin/app-stats');
//     return response.data;
//   } catch (error) {
//     toast.error('You are not authorised to view this page!');
//     return redirect('/dashboard');
//   }
// };

//fixing npm run build issue
export const loader = () => {
  return customFetch
    .get('/users/admin/app-stats')
    .then((response) => response.data)
    .catch(() => {
      toast.error('You are not authorised to view this page!');
      return redirect('/dashboard');
    });
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatsItem
        title='current users'
        count={users}
        color='#4db86d'
        bg='#e8fccf'
        icon={<FontAwesomeIcon icon={faUserGroup} />}
      />
      <StatsItem
        title='total jobs'
        count={jobs}
        color='#8b64cb'
        bg='#e0e8f9'
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      />
    </Wrapper>
  );
};

export default Admin;

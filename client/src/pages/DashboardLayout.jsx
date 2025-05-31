import React, { createContext, useContext, useState } from 'react';
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { useQueryClient, useQuery } from '@tanstack/react-query';

import Wrapper from '../styledComponents/Dashboard';
import { Loading, Navbar, Sidebar, SidebarMobile } from '../components';
import customFetch from '../utils/customFetch';
import { getThemeFromLS } from '../App';
import { toast } from 'react-toastify';

// export const loader = async () => {
//   try {
//     const { data } = await customFetch.get('/users/current-user'); // works only with valid cookie
//     return data;
//   } catch (error) {
//     return redirect('/login');
//   }
// };

// fixing npm run build issue

// export const loader = () => {
//   return customFetch
//     .get('/users/current-user')
//     .then(({ data }) => data)
//     .catch(() => redirect('/login'));
// };

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch('/users/current-user');
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const queryClient = useQueryClient();
  // const { user } = useLoaderData();
  // const { user } = useQuery(userQuery)?.data;

  const { data } = useQuery(userQuery);
  const user = data?.user;

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const [showSidebar, setShowSidebar] = useState(false);
  const [darkThemeActive, setDarkThemeActive] = useState(getThemeFromLS());

  const toggleDarkTheme = () => {
    const updatedTheme = !darkThemeActive;
    setDarkThemeActive(updatedTheme);
    document.body.classList.toggle('dark-theme', updatedTheme);

    //save theme to localStorage so it persists after page reload
    localStorage.setItem('darkThemeActive', updatedTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    queryClient.invalidateQueries();
    toast.success('Logout successful!');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        darkThemeActive,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard-nav'>
          <SidebarMobile />
          <Sidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;

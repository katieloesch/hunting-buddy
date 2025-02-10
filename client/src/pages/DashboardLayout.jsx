import React, { createContext, useContext, useState } from 'react';
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';

import Wrapper from '../styledComponents/Dashboard';
import { Navbar, Sidebar, SidebarMobile } from '../components';
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

export const loader = () => {
  return customFetch
    .get('/users/current-user')
    .then(({ data }) => data)
    .catch(() => redirect('/login'));
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

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
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;

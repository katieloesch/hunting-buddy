import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Wrapper from '../styledComponents/Dashboard';
import { Navbar, Sidebar, SidebarMobile } from '../components';
import { getThemeFromLS } from '../App';
const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = {
    name: 'Mia',
  };

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
    console.log('logging user out ...');
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
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;

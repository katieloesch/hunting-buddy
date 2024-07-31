import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  // DeleteJob,
  // EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
} from './pages';

export const getThemeFromLS = () => {
  // check localStorage to see if theme was saved there last time website was visited
  // if a theme was saved there, apply it
  const darkThemeActiveLS = localStorage.getItem('darkThemeActive') === 'true';
  document.body.classList.toggle('dark-theme', darkThemeActiveLS);
  return darkThemeActiveLS;
};

getThemeFromLS();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

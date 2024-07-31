import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../styledComponents/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const { darkThemeActive, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {darkThemeActive ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill className='toggle-icon' />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;

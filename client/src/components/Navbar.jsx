import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';

import { Logo, LogoutContainer, ThemeToggle } from '../components';
import Wrapper from '../styledComponents/Navbar';
import { useDashboardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn' onClick={toggleSidebar}>
          <BiMenuAltLeft />
        </button>

        <div className='logo-title-container'>
          <Logo section='navbar' />
          <h4 className='logo-text'>Dashboard</h4>
        </div>

        <div className='btn-container'>
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

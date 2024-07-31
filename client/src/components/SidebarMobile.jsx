import React from 'react';
import { FaTimes } from 'react-icons/fa';

import Wrapper from '../styledComponents/SidebarMobile';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Logo, NavLinks } from '../components';

const SidebarMobile = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar && 'show-sidebar'}`}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo section='sidebar-mobile' />
          </header>
          <NavLinks mobile={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SidebarMobile;

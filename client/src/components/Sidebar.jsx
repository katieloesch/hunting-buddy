import React from 'react';

import Wrapper from '../styledComponents/Sidebar';
import { NavLinks, Logo } from '../components';
import { useDashboardContext } from '../pages/DashboardLayout';

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className={`sidebar-container ${!showSidebar && 'show-sidebar'}`}>
        <div className='content'></div>
        <header>
          <Logo section='sidebar' />
        </header>
        <NavLinks mobile={false} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

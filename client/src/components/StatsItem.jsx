import React from 'react';

import Wrapper from '../styledComponents/StatsItem';

const StatsItem = ({ count, title, icon, color, bg }) => {
  return (
    <Wrapper color={color} bg={bg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>

      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
};

export default StatsItem;

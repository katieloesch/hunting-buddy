import React from 'react';
import {
  FaSuitcaseRolling,
  FaClock,
  FaCalendarCheck,
  FaBug,
} from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import Wrapper from '../styledComponents/StatsContainer';
import StatsItem from './StatsItem';

const StatsContainer = (defaultStats) => {
  const stats = [
    {
      title: 'pending applications',
      count: defaultStats?.pending || 0,
      icon: <FaClock />,
      color: '#647acb',
      bg: '#e0e8f9',
    },
    {
      title: 'interviews scheduled',
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,

      color: '#eeae3e',
      bg: '#fef3c7',
    },
    {
      title: 'jobs declined',
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {stats.map((stat) => (
        <StatsItem key={stat.title} {...stat} />
      ))}
    </Wrapper>
  );
};

export default StatsContainer;

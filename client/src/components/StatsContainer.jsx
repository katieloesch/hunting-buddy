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

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'pending applications',
      count: defaultStats?.pending || 0,
      icon: <FaClock />,
      color: '#44bca6',
      bg: '#e5faf8',
    },
    {
      title: 'interviews scheduled',
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,

      color: '#f0c33c',
      bg: '#fff4e2',
    },
    {
      title: 'jobs declined',
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: '#e66363',
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

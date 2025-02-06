import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgb(241, 246, 255)',
            border: '1px solid rgb(193, 208, 236)',
          }}
          labelStyle={{ color: 'rgb(84, 84, 142)' }}
          itemStyle={{ color: 'rgb(84, 84, 142)' }}
        />

        <Area
          type='monotone'
          dataKey='count'
          stroke='#rgb(84, 84, 142)'
          fill='#bedffd'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;

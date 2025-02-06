import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgb(241, 246, 255)',
            border: '1px solid rgb(193, 208, 236)',
          }}
          labelStyle={{ color: 'rgb(85, 140, 203)' }}
          itemStyle={{ color: 'rgb(85, 140, 203)' }}
        />
        <Bar dataKey='count' fill='rgb(85, 140, 203)' barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

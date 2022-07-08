import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
export default function Bar_Vertical({ ...props }) {
  const data = [
    {
      name: 'Monday',
      WorkingHour: 7.5,
    },
    {
      name: 'Tuesday',
      WorkingHour: 8,
    },
    {
      name: 'Wednesday',
      WorkingHour: 8.2,
    },
    {
      name: 'Thursday',
      WorkingHour: 7.1,
    },
    {
      name: 'Friday',
      WorkingHour: 11,
    },
    {
      name: 'Saturday',
      WorkingHour: 0,
    },
    {
      name: 'Sunday',
      WorkingHour: 0,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.3)' }}>
          <p className="label">{`${label} : ${payload[0].value}`} hours</p>
        </div>
      );
    }
  };
  return (
    <BarChart
      width={700}
      height={400}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar dataKey="WorkingHour" barSize={20} fill="#8884d8" />
    </BarChart>
  );
}

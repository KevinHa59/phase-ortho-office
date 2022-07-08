import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
export default function Chart_Radar({ ...props }) {
  const sampleData = [
    {
      subject: 'Math',
      value: 100,
    },
    {
      subject: 'Chinese',
      value: 50,
    },
    {
      subject: 'English',
      value: 100,
    },
    {
      subject: 'Geography',
      value: 20,
    },
    {
      subject: 'Physics',
      value: 70,
    },
    {
      subject: 'History',
      value: 50,
    },
  ];

  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={props.data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Chart" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

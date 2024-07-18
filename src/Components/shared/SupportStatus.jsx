"use client"
import { Pie, PieChart } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function SupportStatus(){
  const demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';


  return (
    <PieChart width={800} height={400} >
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" labelLine/>
    </PieChart>
  );
}

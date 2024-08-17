"use client"

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

const CustomizedTick = (props)=> {
  console.log(props)
  return (
    <g>
      <text x={8} y={6} fill="#666">
        {props.payload.value}
      </text>
    </g>
  );
}

export default function ExpenseLineChart() {

  const data = [
    { name: 'January', uv: 2000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'June', uv: 2390, pv: 3800, amt: 2524 },
    { name: 'July', uv: 2390, pv: 3800, amt: 2524 },
    { name: 'August', uv: 2290, pv: 4000, amt: 2100 },
    { name: 'September', uv: 3390, pv: 3800, amt: 2500 },
    { name: 'October', uv: 2050, pv: 4200, amt: 2140 },
    { name: 'November', uv: 2021, pv: 4200, amt: 2140 },
    { name: 'December', uv: 2110, pv: 4300, amt: 2200 },
  ];

  return (
    <div>
      <LineChart width={600} height={400} data={data} >

        <Line type="monotone" dataKey="uv" stroke="#0FC136" dot={false} />
        <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="uv"  />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} fontSize={14} />
      </LineChart>
    </div>
  )
}
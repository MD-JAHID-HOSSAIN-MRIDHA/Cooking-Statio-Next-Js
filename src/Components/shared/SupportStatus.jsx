"use client"
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Solve', value: 400 },
  { name: 'Drop', value: 300 },
  { name: 'Pending', value: 300 },
];
const COLORS = ['#5368F0', '#DFDFDF', '#FEAB00'];

export default function SupportStatus() {
  const demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  return (
    <div className='support-status-wrapper'>
      <PieChart width={240} height={240} >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          labelLine
          startAngle={80}
          endAngle={440}
        >
          {
            data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))
          }
        </Pie>
      </PieChart>
      <div className='support-type-container'>
        {
          COLORS.map((color, ind) =><div className='support-type' key={color.name}>
            <span style={{background: color, width: "18px", height: "18px", borderRadius: "5px"}}></span>
            {data[ind]?.name}
            </div>)
        }
      </div>
    </div>
  );
}

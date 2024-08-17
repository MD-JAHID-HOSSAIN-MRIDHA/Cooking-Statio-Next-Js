"use client"
import moment from 'moment';
import { Cell, Pie, PieChart, Sector } from 'recharts';

const data = [
  { name: 'Solve', value: 400 },
  { name: 'Drop', value: 300 },
  { name: 'Pending', value: 300 },
];
const COLORS = ['#5368F0', '#DFDFDF', '#FEAB00'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={0} textAnchor="middle" style={{fontWeight: 600, fontSize: "20px"}} fill="#000">
        {new Date().getDate()}
      </text>
      <text x={cx} y={cy} dy={20} textAnchor="middle" fill="#454459">
        {moment().format("MMM")}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

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
          startAngle={90}
          endAngle={500}
          activeShape={renderActiveShape}
          activeIndex={0}
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

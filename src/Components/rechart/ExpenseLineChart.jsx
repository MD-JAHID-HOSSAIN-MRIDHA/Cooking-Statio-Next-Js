"use client"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", earning: 100, expense: 200 },
  { name: "Feb", earning: 200, expense: 300 },
  { name: "Mar", earning: 250, expense: 100 },
  { name: "Apr", earning: 300, expense: 250 },
  { name: "May", earning: 350, expense: 400 },
  { name: "Jun", earning: 280, expense: 300 },
  { name: "Jul", earning: 400, expense: 100 },
  { name: "Aug", earning: 250, expense: 150 },
  { name: "Sep", earning: 300, expense: 200 },
  { name: "Oct", earning: 350, expense: 250 },
  { name: "Nov", earning: 400, expense: 300 },
  { name: "Dec", earning: 450, expense: 350 },
];

const CustomLineChart = () => {
  const renderLegend = (props) => {
    const { payload } = props;
    console.log(payload)

    return (
      <div style={{
        display: "flex",
        justifyContent: "flex-between",
        padding: "10px",
        fontSize: 12,
        fontWeight: "bold",
      }}>
        <h3 style={{
          color: `rgba(4, 13, 23, 0.80)`,
          fontFamily: "Inter",
          fontSize: "18px",
          fontWeight: 600,
          letterSpacing: "0.18px",
          flex: "1"
        }}>Total Expanse</h3>
        <ul className="d-flex gap-3">

          {
            payload.map((entry, index) => (
              <li key={`item-${index}`} style={{
                color: entry.color,
                fontSize: 14,
                margin: "0 5px",
                padding: "5px 0",
                listStyleType: "none",
                fontWeight: 400,
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px"
              }}>
                <div style={{width: "10px", height: "10px", backgroundColor: entry.color, borderRadius: "50%"}}></div>
                {entry.value}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="#F0F0F0" strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#A0A0A0" }} />
        <YAxis tick={{ fontSize: 12, fill: "#A0A0A0" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "none",
            borderRadius: 10,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          wrapperStyle={{ top: -10, right: 10 }}
          content={renderLegend}
        />
        <Line
          type="monotone"
          dataKey="earning"
          stroke="#28A745"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#17A2B8"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;

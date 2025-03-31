import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "New", value: 22 },
  { name: "Open", value: 6 },
  { name: "Pending", value: 12 },
  { name: "Closed", value: 32 },
];

const COLORS = ["#b8e6fe", "#74d4ff", "#00bcff", "#00bc7d"];

const PieChartComponent = () => {
  return (
      <PieChart width={80} height={80}>
        <Pie
                 startAngle={90}
                 endAngle={-360}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={40}
          innerRadius={20}
          fill="#8884d8"
          dataKey="value"
          // label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
  );
};

export default PieChartComponent;
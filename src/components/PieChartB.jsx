import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Customer", value: 45 },
  { name: "Average", value: 65 },
];

const COLORS = ["#F94C4C", "#eeeeee"];

const PieChartB = () => {
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

export default PieChartB;


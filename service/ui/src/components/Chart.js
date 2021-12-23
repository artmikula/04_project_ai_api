import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const year2021 = [
  { name: "1월", uv: 0 },
  { name: "2월", uv: 0 },
  { name: "3월", uv: 4 },
  { name: "4월", uv: 4 },
  { name: "5월", uv: 6 },
  { name: "6월", uv: 7 },
  { name: "7월", uv: 10 },
  { name: "8월", uv: 10 },
  { name: "9월", uv: 5 },
  { name: "10월", uv: 0 },
  { name: "11월", uv: 2 },
  { name: "12월", uv: 0 },
];

function Chart() {
  // { yearChart, setYearChart }
  return (
    <div className="charts">
      <BarChart
        width={1000}
        height={300}
        data={year2021}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#B92929" />
        <YAxis yAxisId="right" orientation="right" stroke="#B92929" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="감염횟수" fill="#B92929" />
        <Bar yAxisId="right" dataKey="uv" fill="#B92929" />
      </BarChart>
    </div>
  );
}

export default Chart;

import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  CartesianGrid,
  XAxis
} from "recharts";

const sleepData = [
  {
    start: "2019-10-18T20:30",
    end: "2019-10-19T08:30",
    difference: 10,
    bedtime: 8,
    work: 10,
    average: 9
  },
  {
    start: "2019-10-19T23:30",
    end: "2019-10-20T04:30",
    difference: 5,
    bedtime: 9,
    work: 3,
    average: 6
  },
  {
    start: "2019-10-20T22:30",
    end: "2019-10-21T06:30",
    difference: 8,
    bedtime: 8,
    work: 6,
    average: 7
  }
];

const formatXAxis = tick => {
  return moment(tick).format("MMM Do YYYY");
};


export default function SleepGraph(props) {
  return (
    <div>
      <h1>Sleep Graph</h1>
      <LineChart width={600} height={300} data={sleepData}>
        <Line type="monotone" dataKey="difference" stroke="#8884d8" />
        <CartesianGrid stroke="ccc" />
        <XAxis dataKey="end" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

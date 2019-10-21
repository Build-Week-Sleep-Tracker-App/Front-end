import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  Label,
  YAxis,
  Tooltip,
  CartesianGrid,
  XAxis
} from "recharts";

const dummySleepData = [
	{
	  "id": 10,
	  "userID": 4,
	  "start": "2019-5-10 04:50",
	  "end": "2019-5-10 13:50",
	  "hours": 9,
	  "bed_t_rating": "2",
	  "work_t_rating": "4",
	  "average_rating": "4"
	},
	{
	  "id": 42,
	  "userID": 4,
	  "start": "2019-6-11 04:50",
	  "end": "2019-6-11 13:50",
	  "hours": 9,
	  "bed_t_rating": "3",
	  "work_t_rating": "1",
	  "average_rating": "3"
	},
	{
	  "id": 47,
	  "userID": 4,
	  "start": "2019-6-16 04:50",
	  "end": "2019-6-16 15:50",
	  "hours": 11,
	  "bed_t_rating": "2",
	  "work_t_rating": "1",
	  "average_rating": "4"
	},
	{
	  "id": 62,
	  "userID": 4,
	  "start": "2019-7-1 04:50",
	  "end": "2019-7-1 16:50",
	  "hours": 12,
	  "bed_t_rating": "4",
	  "work_t_rating": "4",
	  "average_rating": "4"
	},
	{
	  "id": 63,
	  "userID": 4,
	  "start": "2019-7-2 04:50",
	  "end": "2019-7-2 15:50",
	  "hours": 11,
	  "bed_t_rating": "4",
	  "work_t_rating": "4",
	  "average_rating": "3"
	},
	{
	  "id": 79,
	  "userID": 4,
	  "start": "2019-7-18 04:50",
	  "end": "2019-7-18 18:50",
	  "hours": 14,
	  "bed_t_rating": "2",
	  "work_t_rating": "2",
	  "average_rating": "2"
	},
	{
	  "id": 93,
	  "userID": 4,
	  "start": "2019-8-1 04:50",
	  "end": "2019-8-1 15:50",
	  "hours": 11,
	  "bed_t_rating": "3",
	  "work_t_rating": "1",
	  "average_rating": "4"
	}
  ]

const formatXAxis = tick => {
  return moment(tick).format("MMM Do YYYY");
};

export default function SleepGraph(props) {
  return (
    <div>
      <h1>Sleep Graph</h1>
      <LineChart width={1000} height={400} data={dummySleepData} margin={{ bottom: 20, right: 20}}>
        <Line type="monotone" dataKey="hours" stroke="rgba(29, 161, 242, 1)" />
        <CartesianGrid stroke="ccc" />
        <XAxis dataKey="end" tickFormatter={formatXAxis}>
			<Label value="Date" offset={-20} position="insideBottom"/>
		</XAxis>
        <YAxis>
			<Label value="Hours" offset={0} position="insideLeft" />
		</YAxis>
        <Tooltip />
      </LineChart>
    </div>
  );
}

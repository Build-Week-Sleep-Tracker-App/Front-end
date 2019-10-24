import React, { useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
	LineChart,
	ScatterChart,
	Legend,
	Scatter,
	Line,
	Label,
	YAxis,
	Tooltip,
	CartesianGrid,
	XAxis
} from "recharts";
import * as actionCreators from "../actions/actionCreators";
import MotionTracker from "./MotionTracker";

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

function SleepGraphs({ user, tracking, toggleMotionTracking }) {

	return (
		<section className="graphSection">
			<div className="start_tracking">
				<h1 className="text">Visualize your sleep patterns</h1>
				<h4>As you enter sleep data below, it will display here.</h4>
				<p>Alternatively, visit this page on a mobile device and click the button below to enable
					automated sleep tracking.
				</p>
				<button onClick={e => toggleMotionTracking()}>Start tracking now</button>
			</div>
			{ tracking ? <MotionTracker /> : user.sleepData.length > 0 ? <div className="graph">
				<LineChart width={1000} height={400} data={user.sleepData}>
					<Line type="monotone" dataKey="hours" stroke="rgba(29, 161, 242, 1)" />
					<CartesianGrid stroke="ccc" />
					<XAxis dataKey="end" tickFormatter={formatXAxis}>
						{<Label value="Date" offset={-20} position="insideBottom" /> }
					</XAxis>
					<YAxis>
						 <Label value="Hours" offset={0} position="insideLeft" /> */}
					</YAxis>
					<Tooltip />
				</LineChart>
			</div> : <div className="graph">Not enough data</div>}
			
			{/* 
	  <h1>Average mood score versus hours of sleep</h1>
	  <ScatterChart width={1000} height={400} data={dummySleepData} margin={{ top: 20, bottom: 20, right: 20}}>
		  <CartesianGrid />
		  <XAxis dataKey="hours" name="Hours of sleep" type="number" tickCount="10"/>
		  <YAxis dataKey="average_rating" name="Mood score"/>
		  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
		  <Legend />
		  <Scatter name="Mood Score" data={dummySleepData} fill="rgba(248, 85, 101, 1)" />
	  </ScatterChart>
		 */}
		</section>
	);
}

export default connect(state => state, actionCreators)(SleepGraphs)


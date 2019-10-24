import React, { useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
  LineChart,
  ScatterChart,
  AreaChart,
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
    id: 10,
    userID: 4,
    start: "2019-5-10 04:50",
    end: "2019-5-10 13:50",
    hours: 9,
    bed_t_rating: "2",
    work_t_rating: "4",
    average_rating: "4"
  },
  {
    id: 42,
    userID: 4,
    start: "2019-6-11 04:50",
    end: "2019-6-11 13:50",
    hours: 9,
    bed_t_rating: "3",
    work_t_rating: "1",
    average_rating: "3"
  },
  {
    id: 47,
    userID: 4,
    start: "2019-6-16 04:50",
    end: "2019-6-16 15:50",
    hours: 11,
    bed_t_rating: "2",
    work_t_rating: "1",
    average_rating: "4"
  },
  {
    id: 62,
    userID: 4,
    start: "2019-7-1 04:50",
    end: "2019-7-1 16:50",
    hours: 12,
    bed_t_rating: "4",
    work_t_rating: "4",
    average_rating: "4"
  },
  {
    id: 63,
    userID: 4,
    start: "2019-7-2 04:50",
    end: "2019-7-2 15:50",
    hours: 11,
    bed_t_rating: "4",
    work_t_rating: "4",
    average_rating: "3"
  },
  {
    id: 79,
    userID: 4,
    start: "2019-7-18 04:50",
    end: "2019-7-18 18:50",
    hours: 14,
    bed_t_rating: "2",
    work_t_rating: "2",
    average_rating: "2"
  },
  {
    id: 93,
    userID: 4,
    start: "2019-8-1 04:50",
    end: "2019-8-1 15:50",
    hours: 11,
    bed_t_rating: "3",
    work_t_rating: "1",
    average_rating: "4"
  }
];

const formatXAxis = tick => {
  return moment(tick).format("MMM Do YYYY");
};

const CustomToolTip = props => {
  console.log(props);
  if (props.active) {
    return (
      <div>
        <p style={{width: "100px"}}>{`On ${moment(props.label).format(
          "MMMM Do YYYY"
        )}, you got ${props.payload[0].value} hours of sleep.`}</p>
      </div>
    );
  } else return null;
};

function SleepGraphs({ user, tracking, toggleMotionTracking }) {
  return (
    <section className="graphSection">
      <div className="start_tracking">
        <h1 className="text text-center">Visualize your sleep pattern</h1>
        <button className="button" onClick={e => toggleMotionTracking()}>
          Enable realtime tracking
        </button>
      </div>
      {tracking ? (
        <MotionTracker />
      ) : user.sleepData.length > 0 ? (
        <div className="graph">
          <LineChart
            width={1000}
            height={400}
            data={user.sleepData}
			margin={{ top: 20, right: 10}}
          >
            <Line
              type="monotone"
              dataKey="hours"
			  stroke="rgba(29, 161, 242, 1)"
			  strokeWidth={2}
			  fill="#8884d8"
            />
            <CartesianGrid stroke="ccc" />
            <XAxis dataKey="end" tickFormatter={formatXAxis}></XAxis>
            <YAxis tick={false}>
{              <Label
                value="Hours"
                position="insideLeft"
                style={{ fill: "#76747E" }}
              />}
            </YAxis>
            <Tooltip content={<CustomToolTip />} />
          </LineChart>
        </div>
      ) : (
        <div className="graph">Not enough data</div>
      )}
    </section>
  );
}

export default connect(
  state => state,
  actionCreators
)(SleepGraphs);

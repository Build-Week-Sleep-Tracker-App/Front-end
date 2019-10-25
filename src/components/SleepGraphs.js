import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  Label,
  YAxis,
  Tooltip,
  CartesianGrid,
  XAxis
} from "recharts";
import * as actionCreators from "../actions/actionCreators";
import MotionTracker from "./MotionTracker";

const formatXAxis = tick => {
  return moment(tick).format("MMM Do YYYY");
};

const CustomToolTip = props => {
  if (props.active) {
    const startTime = moment(props.payload[0].payload.start);
    const endTime = moment(props.payload[0].payload.end);
    const preciseDiff = moment(endTime.diff(startTime)).format("h:mm");
    const preciseDiffArr = preciseDiff.split("");
    const minutesArr = [
      preciseDiffArr[preciseDiffArr.length - 2],
      preciseDiffArr[preciseDiffArr.length - 1]
    ].filter(num => num > 0);
    const minutes = minutesArr.join("");
    const hourFormatted = preciseDiffArr[0] > 1 ? "hours" : "hour";
    const minutesFormatted =
      minutes > 1 ? "minutes" : "minute";
    return (
      <div>
        <p style={{ width: "100px" }}>{`On ${moment(props.label).format(
          "MMMM Do YYYY"
        )}, you slept for ${preciseDiffArr[0]} ${hourFormatted}${minutes ? `, ${minutes} ${minutesFormatted}` : ``}.`}</p>
      </div>
    );
  } else return null;
};

function SleepGraphs({ user, tracking, toggleMotionTracking }) {
  return (
    <section className="graphSection">
      <div className="start_tracking">
        <h1 className="text">Visualize your sleep pattern</h1>
        <button className="button" onClick={e => toggleMotionTracking()}>
          {!tracking ? (
            <span>Enable realtime tracking</span>
          ) : (
            <span>Disable realtime tracking</span>
          )}
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
            margin={{ top: 20, right: 10 }}
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
              {
                <Label
                  value="Hours"
                  position="insideLeft"
                  style={{ fill: "#76747E" }}
                />
              }
            </YAxis>
            <Tooltip content={<CustomToolTip />} />
          </LineChart>
        </div>
      ) : (
        <div className="graph">
          <p>Not enough data. Add sleep entries below to see them displayed here!</p>
        </div>
      )}
    </section>
  );
}

export default connect(
  state => state,
  actionCreators
)(SleepGraphs);

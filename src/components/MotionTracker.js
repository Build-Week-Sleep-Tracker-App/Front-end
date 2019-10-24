import React, { useState, useEffect } from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import moment from "moment";
import useEventListener from "@use-it/event-listener";

// this adjusts the sensitivity of the tracker, if set to 0 it will pick up all movement
const DEVICE_MOTION_THRESHOLD = 0.1;

function MotionTracker() {
  // this probably needs refactoring to use redux
  const [motionData, setMotionData] = useState([]);
  const [chartShouldDisplay, setChartToDisplay] = useState(false);
  useEventListener("devicemotion", ({ acceleration, rotationRate }) => {
    const deviceMotionArr = [
      acceleration.x,
      acceleration.y,
      acceleration.z,
      rotationRate.alpha,
      rotationRate.gamma,
      rotationRate.delta
    ];
      if (deviceMotionArr.some(el => el > DEVICE_MOTION_THRESHOLD)) {
        setMotionData([
          ...motionData,
          {
            acceleration:
              Math.abs(acceleration.x) +
              Math.abs(acceleration.y) +
              Math.abs(acceleration.z),
            rotation:
              Math.abs(rotationRate.alpha) +
              Math.abs(rotationRate.gamma) +
              Math.abs(rotationRate.delta),
            time: moment().format(),
            },
        ]);
        console.log(motionData);
      }
  });
/* 
  const renderChartClickHandler = event => {
    setChartToDisplay(!chartShouldDisplay);
  }; */

  return (
    <div className="motion-tracker">
      <MotionChart data={motionData} />
    </div>
  );
}   

const formatXAxis = tick => {
    return moment(tick).format("h:mm:ss");
  };
  
  const MotionChart = ({ data }) => {
    console.log(data.map(motionEntry => motionEntry.acceleration));
    return (
      <ResponsiveContainer>
      <div className="graph">
        <h1>Sleep Motion Graph</h1>
        <LineChart data={data}>
          <Line type="monotone" dataKey="acceleration" stroke="rgba(29, 161, 242, 1)" />
          <CartesianGrid stroke="ccc" />
          <XAxis dataKey="time" tickFormatter={formatXAxis} tick={false}></XAxis>
          <YAxis type="number" domain={[0, 20]} tick={false}></YAxis>
        </LineChart>
      </div> 
      </ResponsiveContainer>
    );
  };

export default MotionTracker;

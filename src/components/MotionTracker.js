import React, { useState, useEffect } from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid } from "recharts";
import moment from "moment";
import useEventListener from "@use-it/event-listener";

// this adjusts the sensitivity of the tracker, if set to 0 it will pick up all movement
const DEVICE_MOTION_THRESHOLD = 0.1;

function MotionTracker() {
  // this probably needs refactoring to use redux
  const [motionData, setMotionData] = useState([]);
  const [isTracking, setTracking] = useState(false);
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
    if (isTracking) {
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
    }
  });

  const startTracking = event => {
    setTracking(!isTracking);
  };

  const renderChartClickHandler = event => {
    setChartToDisplay(!chartShouldDisplay);
  };

  return (
    <div className="motion-tracker">
      <h1>Click the button below to start tracking a new sleep session.</h1>
      <button onClick={startTracking}>Toggle movement tracker</button>
      <button onClick={renderChartClickHandler}>Render sleep chart</button>
      <h3>
        {isTracking === true ? "Tracking movements" : "Not tracking movements"}
      </h3>
      <h3>25</h3>
      {chartShouldDisplay === true ? <MotionChart data={motionData} /> : null}
    </div>
  );
}   

const formatXAxis = tick => {
    return moment(tick).format("h:mm:ss");
  };
  
  const MotionChart = ({ data }) => {
    console.log(data.map(motionEntry => motionEntry.acceleration));
    return (
       <div>
        <h1>Sleep Motion Graph</h1>
        <LineChart width={1000} height={400} data={data}>
          <Line type="monotone" dataKey="acceleration" stroke="rgba(29, 161, 242, 1)" />
          <CartesianGrid stroke="ccc" />
          <XAxis dataKey="time" tickFormatter={formatXAxis}></XAxis>
          <YAxis type="number" domain={[0, 20]}></YAxis>
        </LineChart>
      </div> 
    );
  };

export default MotionTracker;

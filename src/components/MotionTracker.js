import React, { useState } from "react";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid
} from "recharts";
import moment from "moment";
import useEventListener from "@use-it/event-listener";

// this adjusts the sensitivity of the tracker, if set to 0 it will pick up all movement
const DEVICE_MOTION_THRESHOLD = 0.1;

function MotionTracker(props) {
  const [motionData, setMotionData] = useState([]);
  const [deviceCanTrackMotion, setDeviceCanTrackMotion] = useState(true);
  const [isTracking, setTracking] = useState(true)
  useEventListener("devicemotion", ({ acceleration, rotationRate }) => {
    const deviceMotionArr = [
      acceleration.x,
      acceleration.y,
      acceleration.z,
      rotationRate.alpha,
      rotationRate.gamma,
    ];
    if(deviceMotionArr.every(el => el === null)) {setDeviceCanTrackMotion(false)}
    if (deviceMotionArr.some(el => el > DEVICE_MOTION_THRESHOLD)) {
      if (isTracking) {
        setMotionData([
          ...motionData,
          {
            acceleration:
              Math.abs(acceleration.x) +
              Math.abs(acceleration.y) +
              Math.abs(acceleration.z),
            rotation:
              Math.abs(rotationRate.alpha) +
              Math.abs(rotationRate.gamma),
            time: moment().format()
          }
        ]);
        console.log(motionData);
      }
    }
  });
  return deviceCanTrackMotion ? <div>
    <MotionChart data={motionData} isTracking={isTracking} setTracking={setTracking}/>
    </div> : <p className="alignWithHeader">Please visit your dashboard on a mobile device to enable motion tracking.</p>;
}

const formatXAxis = tick => {
  return moment(tick).format("HH:mm:ss");
};

const formatYAxis = tick => {
  return tick
};

const MotionChart = ({ data, isTracking, setTracking }) => {
  const toggleTracking = event => {
    setTracking(!isTracking)
  }

  return (
    <div className="graph" onClick={toggleTracking}>
      <AreaChart width={1000} height={400} data={data} className="motion-chart">
        <Area
          type="monotone"
          dataKey="acceleration"
          stroke="rgba(29, 161, 242, 1)"
          /* fill="rgba(29, 161, 242, 1)" */
        />
        <CartesianGrid stroke="ccc" />
        <XAxis dataKey="time" tickFormatter={formatXAxis}></XAxis>
        <YAxis
          type="number"
          domain={[0, 1.5]}
          tickFormatter={formatYAxis}
        ></YAxis>
      </AreaChart>
    </div>
  );
};

export default MotionTracker;

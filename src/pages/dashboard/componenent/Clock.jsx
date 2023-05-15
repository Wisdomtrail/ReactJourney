import React, { useState, useEffect } from "react";
import "../styles/Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const hourAngle = (hours / 12) * 360;
  const minuteAngle = (minutes / 60) * 360;
  const secondAngle = (seconds / 60) * 360;

  return (
    <div className="mainContainer">
      <div className="clock">
        
        <div
          className="hour-hand"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        />
        
        <div
          className="minute-hand"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        />
        
        <div
          className="second-hand"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        />
      </div>
    </div>
  );
}

export default Clock;

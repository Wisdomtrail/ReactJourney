import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TrackPeriod.css";

function TrackPeriod() {
  const [lastPeriodDate, setLastPeriodDate] = useState(null);
  const [nextPeriodDate, setNextPeriodDate] = useState(null);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
  
    if (selectedDate > today) {
      alert("You cannot select a date in the future.");
      return;
    }
  
    const timeDiffInMs = today - selectedDate;
    const timeDiffInDays = timeDiffInMs / (1000 * 60 * 60 * 24);
    
   
    
  
    setLastPeriodDate(e.target.value);
    setNextPeriodDate(calculateNextPeriodDate(e.target.value));
  };
  

  const calculateNextPeriodDate = (lastPeriodDate) => {
    const oneCycleDurationInDays = 28;
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + oneCycleDurationInDays);

    const currentDate = new Date();
    const daysToNextPeriod = (nextPeriodDate - currentDate) / (1000 * 60 * 60 * 24);

    if (daysToNextPeriod > 60) {
      alert("Your period is taking too long. Please go for a pregnancy test.");
    }

    return nextPeriodDate.toLocaleDateString();
  };

  return (
    <div className="mainContainer">
      <div className="formContainer">
        <center>
        <form>
          <label htmlFor="lastPeriodDate">Last Period Date:</label>
          <input
            type="date"
            id="lastPeriodDate"
            name="lastPeriodDate"
            value={lastPeriodDate}
            max={new Date().toISOString().split("T")[0]}
            onChange={handleDateChange}
          />
          {nextPeriodDate && (
            <p>Next Period Date: {nextPeriodDate}</p>
          )}
        </form>
        <Link className="home" to="/">Home</Link>
        </center>
      </div>
    </div>
  );
}

export default TrackPeriod;

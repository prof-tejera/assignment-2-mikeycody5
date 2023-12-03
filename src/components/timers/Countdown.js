import React, { useState, useEffect, useContext } from "react";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Input from "../timers/shared/input.js"; 
import { GlobalContext } from "../../App.js";

const Countdown = (props) => {
  const index = props.index;
  const [time, setTime] = useState((props.minutes * 60 + props.seconds) * 1000);
  const {
    activeIndex,
    timers,
    setTimers,
    setActiveIndex,
    timerIsRunning,
  } = useContext(GlobalContext);
  const isActive = props.index === activeIndex;

  useEffect(() => {
    let interval;

    if (isActive && time > 0 && timerIsRunning) {
      console.log({ index, activeIndex });
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (isActive && time === 0) {
      console.log({ index, activeIndex });
      setActiveIndex(index + 1);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time, activeIndex, index, isActive, setActiveIndex, timerIsRunning]);

  

  const handleSetMinutes = (mins) => {
    const timerToEdit = timers[props.index];
    const updatedTimer = {
      ...timerToEdit,
      minutes: mins,
    };
    const timersCopy = [...timers];
    timersCopy.splice(props.index, 1, updatedTimer);
    setTimers(timersCopy);
  };

  const handleSetSeconds = (secs) => {
    const timerToEdit = timers[props.index];
    const updatedTimer = {
      ...timerToEdit,
      seconds: secs,
    };
    const timersCopy = [...timers];
    timersCopy.splice(props.index, 1, updatedTimer);
    setTimers(timersCopy);
  };

  return (
    <div className="countdown">
      <Input
        minutes={props.minutes}
        setMinutes={handleSetMinutes}
        seconds={props.seconds}
        setSeconds={handleSetSeconds}
        disabled={isActive}
      />
      <DisplayTime time={time} />
      
    </div>
  );
};

export default Countdown;
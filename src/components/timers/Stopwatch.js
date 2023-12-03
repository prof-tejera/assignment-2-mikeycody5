import React, { useState, useEffect, useContext } from "react";
import Button from "../timers/shared/button.js";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Panel from "../timers/shared/Panel.js";
import { FaFastForward } from "react-icons/fa";
import { GlobalContext } from "../../App.js";

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const { setActiveIndex } = useContext(GlobalContext);
  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  

  return (
    <div className="stopwatch">
      <DisplayTime time={time} />
    </div>
  );
};

export default Stopwatch;
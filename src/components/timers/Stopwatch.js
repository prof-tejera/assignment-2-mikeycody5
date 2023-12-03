import React, { useState, useEffect, useContext } from "react";
import Button from "../timers/shared/button.js";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Panel from "../timers/shared/Panel.js";
import { FaFastForward } from "react-icons/fa";
import { GlobalContext } from "../../App.js";


const Stopwatch = (props) => {
  const [time, setTime] = useState((props.minutes * 60 + props.seconds) * 1000);
  const {
    activeIndex,
    setActiveIndex,
  } = useContext(GlobalContext);
  const isActive = props.index === activeIndex;

//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   const { setActiveIndex } = useContext(GlobalContext);
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, activeIndex]);

  const handleFastForward = () => {
    setActiveIndex(props.index + 1);
    setTime(0);
  };


  return (
    <div className="stopwatch">
      <DisplayTime time={time} />
      <Panel>
      <Button onClick={handleFastForward}>
          <FaFastForward />
        </Button>
      </Panel>
    </div>
  );
};

export default Stopwatch;
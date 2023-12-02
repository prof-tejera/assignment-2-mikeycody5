import React, { useState, useEffect, useContext } from "react";
import Button from "../timers/shared/button.js";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Panel from "../timers/shared/Panel.js";
import Input from "../timers/shared/input.js"; // Adjust the import path
import { FaPlay, FaPause, FaFastForward } from "react-icons/fa"; // Import the fast forward icon
import { GlobalContext } from "../../App.js";

const Countdown = (props) => {
  const minutes = props.minutes
  const seconds = props.seconds
  const index = props.index
  // const [time, setTime] = useState(0);
  
  const [time, setTime] = useState((props.minutes * 60 + props.seconds) * 1000);
  
  const [running, setRunning] = useState(false);
  const { activeIndex, pausedIndex, isPaused, timers, setTimers, setActiveIndex } = useContext(GlobalContext);
  const isActive = props.index === activeIndex;
  const isTimerPaused = props.index === pausedIndex && isPaused; // will need to setRunning(false)


  /* 
useEffect(() => {
  let interval;

  if (running && time > 0) {
    interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);
  } else {
    clearInterval(interval);

    if (time === 0 && onComplete) {
      onComplete();
    }
  }

  return () => clearInterval(interval);
}, [running, time, onComplete]); */

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      console.log(activeIndex);
      debugger
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (isActive && time === 0){
      debugger
      setActiveIndex(index + 1)
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, time, activeIndex]);

  useEffect(() => {
    if (isActive) {
      console.log("THIS IS ACTIVe");
      /*if (!running) {
        if (time === 0) {
          setTime((minutes * 60 + seconds) * 1000);
        }
      setRunning(true);
    }*/
  }
  }, [props, activeIndex]);

  useEffect(() => {
    if (isTimerPaused) {
      console.log("I am paused- timer should stop running");
    }
  }, [props, pausedIndex, isPaused, isTimerPaused]);

  const handleStart = () => {
    /*debugger
    if (!running) {
      if (time === 0) {
        setTime((minutes * 60 + seconds) * 1000);
      }

      setRunning(true);
    }*/
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime((minutes * 60 + seconds) * 1000);
    if (running) {
      setRunning(false);
    }
  };

  const handleFastForward = () => {
    // setActiveIndex(props.index + 1);
    setRunning(false);
    setTime(0);
  };

  const handleSetMinutes = (mins) => {
    const timerToEdit = timers[props.index]
    const updatedTimer = {...timerToEdit, C: <Countdown minutes={mins} seconds={props.seconds} index={props.index} /> }
    const timersCopy = [...timers]
    timersCopy.splice(props.index, 1, updatedTimer);
    setTimers(timersCopy)
  
    console.log({timers, index: props.index, mins, timerToEdit})
  }

  const handleSetSeconds = (secs) => {
    const timerToEdit = timers[props.index]
    const updatedTimer = {...timerToEdit, C: <Countdown minutes={props.minutes} seconds={secs} index={props.index} /> }
    const timersCopy = [...timers]
    timersCopy.splice(props.index, 1, updatedTimer);
    setTimers(timersCopy)
  
    console.log({timers, index: props.index, timerToEdit})
  }
 
  return (
    <div className="countdown">
      <Input
        minutes={props.minutes}
        setMinutes={handleSetMinutes}
        seconds={props.seconds}
        setSeconds={handleSetSeconds}
        disabled={running}
        onStart={handleStart}
      />
      <DisplayTime time={time} />
      <Panel>
        {running ? (
          <Button onClick={handleStop}>
            <FaPause />
          </Button>
        ) : (
          <Button onClick={handleStart}>
            <FaPlay />
          </Button>
        )}
        <Button onClick={handleReset}>RESET</Button>
        <Button onClick={handleFastForward}>
          <FaFastForward />
        </Button>
      </Panel>
    </div>
  );
};

export default Countdown;


/*import React, { useState, useEffect } from "react";
import Button from "../timers/shared/button.js";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Panel from "../timers/shared/Panel.js";
import Input from "../timers/shared/input.js"; 
import { FaPlay, FaPause, FaFastForward } from "react-icons/fa"; 

const Countdown = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  const handleStart = () => {
    if (!running) {
      if (time === 0) {
        setTime((minutes * 60 + seconds) * 1000);
      }
      setRunning(true);
    }
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime((minutes * 60 + seconds) * 1000);
    if (running) {
      setRunning(false);
    }
  };

  const handleFastForward = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="countdown">
      <Input
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        disabled={running}
        onStart={handleStart}
      />
      <DisplayTime time={time} />
      <Panel>
        {running ? (
          <Button onClick={handleStop}>
            <FaPause />
          </Button>
        ) : (
          <Button onClick={handleStart}>
            <FaPlay />
          </Button>
        )}
        <Button onClick={handleReset}>RESET</Button>
        <Button onClick={handleFastForward}>
          <FaFastForward />
        </Button>
      </Panel>
    </div>
  );
};

export default Countdown;*/

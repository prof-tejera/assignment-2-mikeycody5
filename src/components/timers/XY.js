import React, { useState, useEffect, useContext } from "react";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Input from "../timers/shared/input.js"; 
import DisplayRounds from "../timers/shared/DisplayRounds";
import { GlobalContext } from "../../App.js";

const XY = (props) => {
  const rounds = props.rounds;
  const index = props.index;
  const initialTime = (props.minutes * 60 + props.seconds) * 1000;

  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);

  const {
    setActiveIndex,
    activeIndex,
    timers,
    setTimers,
    timerIsRunning,
  } = useContext(GlobalContext);

  const isActive = props.index === activeIndex;

  useEffect(() => {
    let interval;

    if (isActive && time > 0 && timerIsRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => Math.max(0, prevTime - 1000));
      }, 1000);
    } else if (isActive && time === 0) {
      clearInterval(interval);
      setCurrentRound((prevRound) => prevRound + 1);

      if (currentRound >= rounds) {
        setActiveIndex(index + 1);
        setCurrentRound(1);
        setTime(0);
        setRunning(false);
      } else {
        setTime(initialTime);
        setRunning(true);
      }
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, time, initialTime, currentRound, rounds, activeIndex, setActiveIndex,]);

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

  const handleSetRounds = (rnds) => {
    const timerToEdit = timers[index];
    const updatedTimer = {
      ...timerToEdit,
      rounds: rnds,
    };
    const timersCopy = [...timers];
    timersCopy.splice(index, 1, updatedTimer);
    setTimers(timersCopy);
  };

  return (
    <div className="timer">
      <DisplayRounds
        currentRound={currentRound}
        initialRounds={props.rounds}
        onRoundsChange={handleSetRounds}
      />
      <Input
        minutes={props.minutes}
        setMinutes={handleSetMinutes}
        seconds={props.seconds}
        setSeconds={handleSetSeconds}
        disabled={running}
      />
      <div className="display-time">
        <DisplayTime time={time} />
      </div>
    </div>
  );
};

export default XY;

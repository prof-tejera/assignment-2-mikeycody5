import React, { useState, useEffect, useCallback, useContext } from "react";
import Button from "../timers/shared/button.js";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Panel from "../timers/shared/Panel.js";
import Input from "../timers/shared/input.js";
import ProgressBar from "../timers/shared/ProgressBar.js";
import DisplayRounds from "../timers/shared/DisplayRounds";
import { FaFastForward } from "react-icons/fa";
import { GlobalContext } from "../../App.js";

const Tabata = (props) => {
  const minutes = props.minutes;
  const seconds = props.seconds;
  const rounds = props.rounds;
  const index = props.index;

  const [time, setTime] = useState((props.minutes * 60 + props.seconds) * 1000);

  const [running, setRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [progress, setProgress] = useState(0);

  const {
    activeIndex,
    pausedIndex,
    isPaused,
    timers,
    setTimers,
    setActiveIndex,
    timerIsRunning,
  } = useContext(GlobalContext);
  const isActive = props.index === activeIndex;
  const isTimerPaused = props.index === pausedIndex && isPaused;

  useCallback(() => {
    setCurrentRound((prevRound) => prevRound + 1);
    setIsResting(true);
    setTime(initialTime);
    setRunning(true);
  }, [initialTime]);

  const calculateProgress = () => {
    if (isResting) {
      return (time / initialTime) * 100;
    } else {
      return ((initialTime - time) / initialTime) * 100;
    }
  };

  useEffect(() => {
    let interval;

    if (isActive && time > 0 && timerIsRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => Math.max(0, prevTime - 1000));
        // Update progress during the rest period
        if (isResting) {
          const remainingTime = time / initialTime;
          setProgress(1000 - remainingTime * 1000);
        }
      }, 1000);
    } else if (isActive && time === 0) {
      console.log({ index, activeIndex });
      clearInterval(interval);
      if (isResting) {
        setIsResting(false);
        setCurrentRound((prevRound) => prevRound + 1);
        setTime(initialTime);
        setRunning(true);
        setProgress(0); // Reset progress when starting a new round
      } else {
        setIsResting(true);
        setTime(initialTime);
        setRunning(true);
      }

      if (currentRound >= rounds) {
        setCurrentRound(1);
        setIsResting(false);
        setTime(0);
        setRunning(false);
        setProgress(0); // Reset progress when the timer stops
      }
    } else {
      console.log({ index, activeIndex });
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, time, isResting, initialTime, currentRound, rounds, activeIndex]);

  

  const handleFastForward = () => {
    setTime(0);
    setRunning(false);
  };

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
        {isResting ? (
          // If in rest state, display progress bar
          <ProgressBar value={calculateProgress()} max="100" />
        ) : (
          <DisplayTime time={time} />
        )}
      </div>
    </div>
  );
};

export default Tabata;
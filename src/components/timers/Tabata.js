import React, { useState, useEffect, useCallback, useContext } from "react";
import Button from "../timers/shared/button.js";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Panel from "../timers/shared/Panel.js";
import Input from "../timers/shared/input.js";
import ProgressBar from "../timers/shared/ProgressBar.js";
import DisplayRounds from "../timers/shared/DisplayRounds";
import { FaPlay, FaPause, FaFastForward } from "react-icons/fa";
import { GlobalContext } from "../../App.js";

const Tabata = (props) => {
  const minutes = props.minutes
  const seconds = props.seconds
  const rounds = props.rounds
  const index = index
  const [initialTime, setInitialTime] = useState(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [isResting, setIsResting] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useState(0);
  const { activeIndex, pausedIndex, isPaused, timers, setTimers } = useContext(GlobalContext);

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

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => Math.max(0, prevTime - 1000));
        // Update progress during the rest period
        if (isResting) {
          const remainingTime = time / initialTime;
          setProgress(1000 - remainingTime * 1000);
        }
      }, 1000);
    } else if (running && time === 0) {
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
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, time, isResting, initialTime, currentRound, rounds]);

  const handleStart = () => {
    if (!running) {
      if (time === 0) {
        setInitialTime((minutes * 60 + seconds) * 1000);
        setTime((minutes * 60 + seconds) * 1000);
      }
      setIsResting(false);
      setRunning(true);
    }
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setInitialTime((minutes * 60 + seconds) * 1000);
    setTime((minutes * 60 + seconds) * 1000);
    setCurrentRound(1);
    setRunning(false);
    setProgress(0); // Reset progress when the timer is reset
  };

  const handleFastForward = () => {
    setTime(0);
    setRunning(false);
  };

  const handleSetMinutes = (mins) => {
    const timerToEdit = timers[index]
    const updatedTimer = {...timerToEdit, C: <Tabata minutes={mins} seconds={props.seconds} rounds={props.rounds} index={index} /> }
    const timersCopy = [...timers]
    timersCopy.splice(index, 1, updatedTimer);
    setTimers(timersCopy)
  
    console.log({timers, index: index, mins, timerToEdit})
  }

  const handleSetSeconds = (secs) => {
    const timerToEdit = timers[index]
    const updatedTimer = {...timerToEdit, C: <Tabata minutes={props.minutes} seconds={secs} rounds={props.rounds} index={index} /> }
    const timersCopy = [...timers]
    timersCopy.splice(index, 1, updatedTimer);
    setTimers(timersCopy)
  
    console.log({timers, index: index, timerToEdit})
  }

  const handleSetRounds = (rnds) => {
    const timerToEdit = timers[index]
    const updatedTimer = {...timerToEdit, C: <Tabata minutes={props.minutes} seconds={props.seconds} rounds={rnds} index={index} /> }
    const timersCopy = [...timers]
    timersCopy.splice(index, 1, updatedTimer);
    setTimers(timersCopy)
  
    console.log({timers, index: index, timerToEdit})
  }

  return (
    <div className="timer">
      <DisplayRounds
        currentRound={currentRound}
        initialRounds={rounds}
        onRoundsChange={handleSetRounds}
      />
      <Input
        minutes={props.minutes}
        setMinutes={handleSetMinutes}
        seconds={props.seconds}
        setSeconds={handleSetSeconds}
        disabled={running}
        onStart={handleStart}
      />
      <div className="display-time">
        {isResting ? (
          // If in rest state, display progress bar
          <ProgressBar value={calculateProgress()} max="100" />
        ) : (
          <DisplayTime time={time} />
        )}
      </div>
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

export default Tabata;

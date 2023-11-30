// AddView.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/timers/shared/button.js";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TimerGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const Timer = styled.div`
  border: 1px solid gray;
  background-color: black;
  border-radius: 30px;
  margin: 10px;
  padding: 20px;
  font-size: 1.5rem;
  color: darkred;
  width: 100%;
  text-align: center;
`;

const TimerTitle = styled.div`
  font-weight: bold;
`;

const TimerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const AddView = ({ onAddTimer }) => {
  const [timerConfig, setTimerConfig] = useState({});

  const handleAddTimer = (timerConfig, title) => {
    // Pass the configured timer to the parent component
    onAddTimer({ title, C: timerConfig });
    // Reset the timer configuration for the next addition if needed
    setTimerConfig({});
  };

  return (
    <Timers>
      <TimerGroup>
        <Timer key="timer-stopwatch">
          <TimerTitle>Stopwatch</TimerTitle>
          <Stopwatch />
          <TimerButtons>
            <Button onClick={() => handleAddTimer(<Stopwatch />, "Stopwatch")}>
              Add
            </Button>
          </TimerButtons>
        </Timer>
        <Timer key="timer-countdown">
          <TimerTitle>Countdown</TimerTitle>
          <Countdown />
          <TimerButtons>
            <Button onClick={() => handleAddTimer(<Countdown />, "Countdown")}>
              Add
            </Button>
          </TimerButtons>
        </Timer>
      </TimerGroup>
      <TimerGroup>
        <Timer key="timer-tabata">
          <TimerTitle>Tabata</TimerTitle>
          <Tabata />
          <TimerButtons>
            <Button onClick={() => handleAddTimer(<Tabata />, "Tabata")}>
              Add
            </Button>
          </TimerButtons>
        </Timer>
        <Timer key="timer-xy">
          <TimerTitle>XY</TimerTitle>
          <XY />
          <TimerButtons>
            <Button onClick={() => handleAddTimer(<XY />, "XY")}>Add</Button>
          </TimerButtons>
        </Timer>
      </TimerGroup>
    </Timers>
  );
};

export default AddView;

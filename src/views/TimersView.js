import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App.js";
import { FaPlus, FaFastForward } from "react-icons/fa";
import Countdown from "../components/timers/Countdown.js";
import Tabata from "../components/timers/Tabata.js";
import Stopwatch from "../components/timers/Stopwatch.js";
import XY from "../components/timers/XY.js";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledButton = styled.button`
  background-color: darkred;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  background-color: black;
  padding: 25px;
  background-color: #121212; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  background-image: 
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);
  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;
  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;
`;

const TimerGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;


const AddButton = styled(Link)`
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 25px;

  &:hover {
    background-color: darkgreen;
  }
`;
const renderComponent = (timerItem, index) => {
  let component;
  if (timerItem.componentType === "COUNTDOWN") {
    component = (
      <Countdown
        index={index}
        minutes={timerItem.minutes}
        seconds={timerItem.seconds}
      />
    );
  }
  if (timerItem.componentType === "TABATA") {
    component = (
      <Tabata
        index={index}
        minutes={timerItem.minutes}
        seconds={timerItem.seconds}
        rounds={timerItem.rounds}
      />
    );
  }
  if (timerItem.componentType === "STOPWATCH") {
    component = <Stopwatch index={index}
    minutes={timerItem.minutes}
    seconds={timerItem.seconds} />;
  }
  if (timerItem.componentType === "XY") {
    component = <XY 
    index={index}
    minutes={timerItem.minutes}
    seconds={timerItem.seconds}
    rounds={timerItem.rounds} />;
  }
  return component;
};

const TimersView = () => {
  const {
    activeIndex,
    setActiveIndex,
    isPaused,
    setIsPaused,
    setTimerIsRunning,
    timers,
  } = useContext(GlobalContext);

  const handleFastForward = () => {
    setActiveIndex(activeIndex + 1);
    setIsPaused(false);
    setTimerIsRunning(true);
  };

  const handlePausePlay = () => {
    setTimerIsRunning(!setTimerIsRunning);
    setIsPaused(true);
  };

  return (
    <div>
      <ButtonGroup>
        {timers.length > 0 ? (
          <>
            <StyledButton
              onClick={() => {
                setActiveIndex(0);
                setTimerIsRunning(true);
              }}
            >
              Start
            </StyledButton>
            <StyledButton onClick={handleFastForward}>
              <FaFastForward /> 
            </StyledButton>
            <StyledButton onClick={handlePausePlay}>
                  {isPaused ? "Play" : "Pause"}
                </StyledButton>
          </>
        ) : null}
      </ButtonGroup>
      <div></div>
      <TimerGroup>
      <Timers>
        {timers.length > 0 ? (
          timers.map((timer, index) => (
            <Timer key={index}>
              {renderComponent(timer, index)}
            </Timer>
          ))
        ) : (
          <div>Configure your timers!</div>
        )}
        <AddButton to="/add"><FaPlus /></AddButton>
      </Timers>
      </TimerGroup>
    </div>
  );
};

export default TimersView;
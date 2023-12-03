import React, { useContext, useState } from "react";
import styled from "styled-components";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App.js";

const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  background-color: gray;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: darkblue;
  }
`;

const BackButtonIcon = styled(FaArrowLeft)`
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

const StyledRemoveButton = styled.button`
  background-color: Darkred;
  color: red;
  align-items: center;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
  }
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
  margin: 25px;
  font-weight: bold
  font-size:;
`;

const TimerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const AddView = ({ onRemoveTimer }) => {
  const [timerQueue, setTimerQueue] = useState([]);
  const { timers, setTimers } = useContext(GlobalContext);
  const TIMERS = [
    {
      key: "timer-countdown",
      title: "Countdown",
      componentType: "COUNTDOWN",
    },
    { key: "timer-tabata", title: "Tabata", componentType: "TABATA" },
    {
      key: "timer-stopwatch",
      title: "Stopwatch",
      componentType: "STOPWATCH",
    },
    { key: "timer-xy", title: "XY", componentType: "XY" },
  ];
  const handleAddTimer = (timerItem) => {
    // Pass the configured timer to the parent component
    console.log({ timerItem });

    const timersLength = timers.length;
    const index = timersLength;
    const newTimersQueue = [
      ...timers,
      {
        ...timerItem,
        title: timerItem.title,
        index: index,
        key: index,
        minutes: 0,
        seconds: 0,
      },
    ];
    setTimers(newTimersQueue);
  };

  const handleRemoveTimer = (index) => {
    const updatedTimers = [...timerQueue];
    const removedTimer = updatedTimers.splice(index, 1)[0];
    console.log("Updated Timers:", updatedTimers);
    console.log("Removed Timer:", removedTimer);
    onRemoveTimer(updatedTimers, removedTimer);
    setTimerQueue(updatedTimers); // Make sure to update the state with the modified timers
  };


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
      component = <Stopwatch 
      minutes={timerItem.minutes}
      seconds={timerItem.seconds}
      index={index} />;
    }
    if (timerItem.componentType === "XY") {
      component = <XY 
      index={index}
      minutes={timerItem.minutes}
      seconds={timerItem.seconds}
      rounds={timerItem.rounds}
    />;
    }
    return component;
  };

  return (
    <>
      <BackButton to="/">
        <BackButtonIcon />
      </BackButton>
      <ButtonGroup>
        {TIMERS.map((timer) => (
          <StyledButton key={timer.key} onClick={() => handleAddTimer(timer)}>
            {timer.title}
          </StyledButton>
        ))}
      </ButtonGroup>
      <div></div>
      <Timers>
        <TimerGroup>
          {timers.map((queueItem, index) => {
            return (
              <Timer key={queueItem.key}>
                <TimerTitle>{queueItem.title}</TimerTitle>
                {renderComponent(queueItem, index)}
                <TimerButtons>
                  <StyledRemoveButton onClick={() => handleRemoveTimer(index)}>
                    Remove
                  </StyledRemoveButton>
                </TimerButtons>
              </Timer>
            );
          })}
        </TimerGroup>
      </Timers>
    </>
  );
};

export default AddView;
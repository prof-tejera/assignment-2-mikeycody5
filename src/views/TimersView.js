import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App.js";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div``;

const AddButton = styled(Link)`
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const TimersView = () => {
  const { activeIndex, setActiveIndex, isPaused, setIsPaused, setPausedIndex, timers, setTimers } =
  useContext(GlobalContext);
  return (
    <div>
      {timers.length > 0 ? <button onClick={setActiveIndex(0)}>Start</button>:null}
    <Timers>
      {timers.length > 0 ? (
        timers.map((timer, index) => (
          <Timer key={index}>
            <TimerTitle>{timer.title}</TimerTitle>
            {timer.C}
          </Timer>
        ))
      ) : (
        <div>Configure your timers!</div>
      )}
      <AddButton to="/add">Add</AddButton>
    </Timers>
    </div>
  );
};

export default TimersView;

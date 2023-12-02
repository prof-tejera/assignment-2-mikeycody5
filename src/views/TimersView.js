// TimersView.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const TimersView = ({ timers }) => {
  return (
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
  );
};

export default TimersView;

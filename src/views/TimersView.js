// TimersView.js
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  position: relative;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div``;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

const AddButton = styled(Link)`
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%; /* Adjust the width as needed */
  margin-bottom: 20px;
`;

const ControlButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TimersView = ({ timers, onRemoveTimer }) => {
  const [removeMessage, setRemoveMessage] = useState("");

  const handleRemove = (index) => {
    const updatedTimers = [...timers];
    const removedTimer = updatedTimers.splice(index, 1)[0];

    // Call the parent component's remove timer function
    onRemoveTimer(updatedTimers, removedTimer);

    // Display remove message
    setRemoveMessage(
      removedTimer
        ? `Timer "${removedTimer.title}" successfully removed.`
        : "Failed to remove timer."
    );

    // Clear the message after a few seconds
    setTimeout(() => {
      setRemoveMessage("");
    }, 3000);
  };

  return (
    <Timers>
      <ButtonGroup>
        <ControlButton>Pause</ControlButton>
        <ControlButton>Play</ControlButton>
        <ControlButton>Reset</ControlButton>
        <ControlButton>Fast Forward</ControlButton>
      </ButtonGroup>
      {timers.length > 0 ? (
        timers.map((timer, index) => (
          <Timer key={index}>
            <TimerTitle>{timer.title}</TimerTitle>
            {timer.C}
            <RemoveButton onClick={() => handleRemove(index)}>Remove</RemoveButton>
          </Timer>
        ))
      ) : (
        <>
          <div>Configure your timers!</div>
          <AddButton to="/add">Add</AddButton>
        </>
      )}
      {removeMessage && <div>{removeMessage}</div>}
    </Timers>
  );
};

export default TimersView;

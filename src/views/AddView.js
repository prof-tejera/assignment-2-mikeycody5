import React, { useContext, useState } from "react";
import styled from "styled-components";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { FaPlay, FaPause } from "react-icons/fa";
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
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: darkblue;
  }
`;

const BackButtonIcon = styled(FaArrowLeft)`
  margin-right: 7px;
`;


const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledRemoveButton = styled.button`
    background-color: Darkred;
    color: red;
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
  background-color: black;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const PlayPauseContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const PlayPauseButton = styled.button`
  background-color: Darkred;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
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
  font-weight: bold;
`;

const TimerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;


const AddView = ({ onAddTimer, onRemoveTimer }) => {
  const [timerConfig, setTimerConfig] = useState({});
  const [timerQueue, setTimerQueue] = useState([]);
  const { activeIndex, setActiveIndex, isPaused, setIsPaused, setPausedIndex } =
  useContext(GlobalContext);
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
    // handleAddTimer(<Stopwatch />, "Stopwatch")

    let component;

    if (timerItem.componentType === "COUNTDOWN") {
      component = <Countdown />;
    }
    if (timerItem.componentType === "TABATA") {
      component = <Tabata />;
    }
    if (timerItem.componentType === "STOPWATCH") {
      component = <Stopwatch />;
    }
    if (timerItem.componentType === "XY") {
      component = <XY />;
    }
    const timerWithComponent = { ...timerItem, component: component };
    setTimerQueue([...timerQueue, timerWithComponent]);
    onAddTimer({ title: timerItem.title, C: component });
    // Reset the timer configuration for the next addition if needed
    setTimerConfig({});
  };

  
  /*const renderComponent = (componentType, index, userInput, onTimerComplete) => {
    let component;
    if (componentType === "COUNTDOWN") {
      component = (
        <Countdown
          index={index}
          minutes={userInput.minutes}
          seconds={userInput.seconds}
          onComplete={onTimerComplete}
        />
      );
    }*/
  const renderComponent = (componentType, index) => {
    let component;
    if (componentType === "COUNTDOWN") {
      component = <Countdown index={index} />;
    }
    if (componentType === "TABATA") {
      component = <Tabata index={index} />;
    }
    if (componentType === "STOPWATCH") {
      component = <Stopwatch index={index} />;
    }
    if (componentType === "XY") {
      component = <XY index={index} />;
    }
    return component;
  };

  const handleRemoveTimer = (index) => {
    const updatedTimers = [...timerQueue];
    const removedTimer = updatedTimers.splice(index, 1)[0];
    console.log("Updated Timers:", updatedTimers);
    console.log("Removed Timer:", removedTimer);
    onRemoveTimer(updatedTimers, removedTimer);
    setTimerQueue(updatedTimers); // Make sure to update the state with the modified timers
  };;

  /*const handleTimerComplete = () => {
    // Logic to start the next timer in the queue
    setActiveIndex((prevIndex) => prevIndex + 1);
  };*/

  return (
    <>
       <BackButton to="/">
        <BackButtonIcon />
        View Workout
      </BackButton>
      <ButtonGroup>
        {TIMERS.map((timer) => (
          <StyledButton key={timer.key} onClick={() => handleAddTimer(timer)}>
            {timer.title}
          </StyledButton>
        ))}
      </ButtonGroup>
      <div>
      <PlayPauseContainer>
        <PlayPauseButton
          onClick={() => {
            if (isPaused) {
              setPausedIndex(null);
              setIsPaused(false);
              setActiveIndex(activeIndex + 1);
            } else {
              setIsPaused(true);
              setPausedIndex(activeIndex);
            }
          }}
        >
          {isPaused ? <FaPlay /> : <FaPause />}
        </PlayPauseButton>
      </PlayPauseContainer>
      </div>
      <Timers>
        <TimerGroup>
            
            
          {timerQueue.map((queueItem, index) => {
            return (
              <Timer key={queueItem.key}>
                <TimerTitle>{queueItem.title}</TimerTitle>
                {renderComponent(queueItem.componentType, index )} {/* queueItem.userInput,
                handleTimerComplete*/}
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




/*import React, { useState } from "react";
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

const Message = styled.div`
  margin-top: 10px;
  color: green;
  font-weight: bold;
`;

const BackButton = styled(Button)`
  margin-top: 10px;
  background-color: #3498db;
`;

const AddView = ({ onAddTimer, onBackToTimersView }) => {
  const [timerConfig, setTimerConfig] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddTimer = (timerConfig, title) => {
    // Pass the configured timer to the parent component
    onAddTimer({ title, C: timerConfig });
    // Display success message
    setSuccessMessage(`Timer "${title}" successfully added.`);
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
        {successMessage && <Message>{successMessage}</Message>}
      <BackButton onClick={onBackToTimersView}>Back to Timers</BackButton>
      </TimerGroup>
    </Timers>
  );
};

export default AddView;*/

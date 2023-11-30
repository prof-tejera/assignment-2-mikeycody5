// TimerContext.js
import React, { createContext, useReducer, useContext } from "react";

const TimerContext = createContext();

const initialState = {
  timers: [],
  activeTimerIndex: null,
};

const ADD_TIMER = "ADD_TIMER";
const REMOVE_TIMER = "REMOVE_TIMER";
const SET_ACTIVE_TIMER = "SET_ACTIVE_TIMER";

const timerReducer = (state, action) => {
  switch (action.type) {
    case ADD_TIMER:
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
    case REMOVE_TIMER:
      return {
        ...state,
        timers: state.timers.filter((timer, index) => index !== action.payload),
      };
    case SET_ACTIVE_TIMER:
      return {
        ...state,
        activeTimerIndex: action.payload,
      };
    default:
      return state;
  }
};

const TimerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  const addTimer = (timer) => {
    dispatch({ type: ADD_TIMER, payload: timer });
  };

  const removeTimer = (index) => {
    dispatch({ type: REMOVE_TIMER, payload: index });
  };

  const setActiveTimer = (index) => {
    dispatch({ type: SET_ACTIVE_TIMER, payload: index });
  };

  return (
    <TimerContext.Provider
      value={{
        timers: state.timers,
        activeTimerIndex: state.activeTimerIndex,
        addTimer,
        removeTimer,
        setActiveTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};

export { TimerProvider, useTimer };

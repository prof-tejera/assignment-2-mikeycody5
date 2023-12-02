// App.js
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AddView from "./views/AddView";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Timers</Link>
        </li>
        <li>
          <Link to="/docs">Documentation</Link>
        </li>
        <li>
          <Link to="/add">Add Timers</Link>
        </li>
      </ul>
    </nav>
  );
};

export const GlobalContext = createContext(null);

const App = () => {
  const [timers, setTimers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedIndex, setPausedIndex] = useState();
  /*const handleAddTimer = (newTimer) => {
    setTimers([...timers, newTimer]);
  };*/

  const handleRemoveTimer = (updatedTimers, removedTimer) => {
    setTimers(updatedTimers);
    // You can perform additional actions based on the removedTimer if needed
    console.log("Removed Timer:", removedTimer);
  };

  useEffect(() => {
    console.log("global state active index:", activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    console.log("array", timers);
  }, [timers]);


  return (
    <GlobalContext.Provider
      value={{
        timers,
        setTimers,
        activeIndex,
        setActiveIndex,
        isPaused,
        setIsPaused,
        pausedIndex,
        setPausedIndex,
      }}
    >
      <Container>
        <Router>
          <Nav />
          <Routes>
            <Route path="/docs" element={<DocumentationView />} />
            <Route
              path="/"
              element={
                <TimersView />
              }
            />
            <Route
              path="/add"
              element={<AddView onRemoveTimer={handleRemoveTimer}/>}
            />
          </Routes>
        </Router>
      </Container>
    </GlobalContext.Provider>
  );
};

export default App;



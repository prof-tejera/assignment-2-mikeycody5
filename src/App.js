// App.js
import React, { useState } from "react";
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

const App = () => {
  const [timers, setTimers] = useState([]);

  const handleAddTimer = (newTimer) => {
    setTimers([...timers, newTimer]);
  };

  const handleRemoveTimer = (updatedTimers, removedTimer) => {
    setTimers(updatedTimers);
    // You can perform additional actions based on the removedTimer if needed
    console.log("Removed Timer:", removedTimer);
  };

  return (
    <Container>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/docs"
            element={<DocumentationView />}
          />
          <Route
            path="/"
            element={<TimersView timers={timers} onRemoveTimer={handleRemoveTimer} />}
          />
          <Route
            path="/add"
            element={<AddView onAddTimer={handleAddTimer} />}
          />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;

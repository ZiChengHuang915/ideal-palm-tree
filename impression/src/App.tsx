import React from 'react';
import './App.css';
import Start from './components/Start'
import InitialImage from './components/InitialImage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/initial" element={<InitialImage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

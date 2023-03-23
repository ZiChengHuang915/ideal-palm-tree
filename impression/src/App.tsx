import React, { useState } from 'react';
import './App.css';
import Start from './components/Start'
import Image from './components/Image';
import Describe from './components/Describe';
import MultiImage from './components/MultiImage';
import Timer from './components/Timer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  // TODO:
  // - rng select a valid image (in App) and pass it into "/initial"
  // - pass in same image to "/select"
  // - create an OnChange handler for the description page + propagate data back up to App
  // - generate the images
  // - assumption: generating the images takes less than 10s (do actual generation in either MultiImage or in App)
  // MultiImage: Since the selection and result page directly follow each other they
  // do not need to communicate with App to determine any state changes
  // - add a click handler to each of the cards
  // - onClick should check if the card id matches the image (passed from App)
  //   if so it is correct, otherwise guess until correct
  // - Add highlight styling for correctness to the results
  // - create a button after results displayed to circle back to the start page
  const [description, setDescription] = useState("");

  const sendDescription = (txt: string) => {
    setDescription(txt);
    console.log(description);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/initial" element={<Image />} />
          <Route path="/describe" element={<Describe sendDescription={sendDescription}/>} />
          <Route path="/generating" element={<Timer/>} />
          <Route path="/select" element={<MultiImage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


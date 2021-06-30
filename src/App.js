import './App.css';
import DrumPad from './DrumPad';
import React from 'react';

function App() {

  let [displayText, setDisplayText] = React.useState("---");

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{displayText}</div>
        <DrumPad setDisplayText={setDisplayText} sampleName='kick' letter='Q'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='snare' letter='W'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='hihat' letter='E'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='openhat' letter='A'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='808' letter='S'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='perc' letter='D'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='perc' letter='Z'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='clap' letter='X'></DrumPad>
        <DrumPad setDisplayText={setDisplayText} sampleName='rim' letter='C'></DrumPad>
      </div>
      <p>coded by <a href="http://twitter.com/joeyiny">joey iny</a> 2021 😎</p>
    </div>
  );
}

export default App;

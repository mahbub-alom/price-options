import React from 'react';
import "./App.css";
import NavBar from './Components/Navbar/NavBar';
import PriceOptions from './Components/PriceOptions/PriceOptions';
import LineChart from './Components/LineChart/LineChart';
import Phones from './Components/Phones/Phones';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;

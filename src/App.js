import React from "react";
import SearchBar from "./components/SearchBar";
import TodayPanel from "./components/CurrentWeatherPanel/TodayPanel";

import './App.css'

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <TodayPanel/>
    </div>
  );
}

export default App;

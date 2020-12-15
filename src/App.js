import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen"
// import Feed from './screens/Feed/Feed'
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <HomeScreen/>
      <Router />
    </div>
  );
}

export default App;

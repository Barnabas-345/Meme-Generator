import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Meme from "./components/Meme";
import './style.css'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Meme />
    </div> 
  );
}

export default App;

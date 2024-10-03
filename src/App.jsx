import { Toaster } from "sonner";
import React, { useState } from "react";
// import Game from "./components/Game";
import "./App.css";
import TitleScreen from "./components/TitleScreen";

function App() {
  return (
    <div>
      <TitleScreen />
      <Toaster position="bottom-center" className="toaster" />
    </div>
  );
}

export default App;

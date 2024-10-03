import { Toaster } from "sonner";
import { useState } from "react";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div>
      <Game />
      <Toaster position="bottom-center" className="toaster" />
    </div>
  );
}

export default App;

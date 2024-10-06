import { Toaster } from "sonner";
import React, { useState } from "react";
// import Game from "./components/Game";
import "./App.css";
import TitleScreen from "./components/TitleScreen";

function App() {
  const [showMessages, setShowMessages] = useState(true);
  return (
    <div>
      <TitleScreen
        showMessages={showMessages}
        setShowMessages={setShowMessages}
      />
      <Toaster position="bottom-center" className="toaster" />
    </div>
  );
}

export default App;

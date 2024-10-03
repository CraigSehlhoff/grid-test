import React, { useState } from "react";

export default function Settings({ closeSettings }) {
  return (
    <div className="settings-main-container">
      <h2>Settings</h2>
      <label>
        <input type="checkbox" />
        sound effects
      </label>
      <label>
        <input type="checkbox" />
        Music
      </label>

      <button onClick={() => closeSettings()}>Close</button>
    </div>
  );
}

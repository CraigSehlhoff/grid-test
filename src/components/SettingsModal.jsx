import React from "react";

export const SettingsModal = React.forwardRef(({ closeSettings }, ref) => {
  console.log("🪵 | SettingsModal | ref:", ref);
  return (
    <dialog ref={ref}>
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
    </dialog>
  );
});

SettingsModal.displayName = "SettingsModal";

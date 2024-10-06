import React from "react";

export const SettingsModal = React.forwardRef(
  (
    {
      closeSettings,
      setShowMessages,
      showMessages,
      soundEffects,
      setSoundEffects,
    },
    ref
  ) => {
    return (
      <dialog className="settings-dialog" ref={ref}>
        <div className="settings-main-container">
          <h2 className="settings-title">Settings</h2>
          <div className="settings-input-container">
            <label>
              <input
                type="checkbox"
                checked={soundEffects}
                onChange={() => setSoundEffects((prev) => !prev)}
              />
              Sound Effects
            </label>
            <label>
              <input type="checkbox" />
              Music
            </label>
            <label>
              <input
                type="checkbox"
                checked={showMessages}
                onChange={() => setShowMessages(!showMessages)}
              />
              Show Messages
            </label>
          </div>
          <button className="settings-button" onClick={() => closeSettings()}>
            Close
          </button>
        </div>
      </dialog>
    );
  }
);

SettingsModal.displayName = "SettingsModal";

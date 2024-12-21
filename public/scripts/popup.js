// pages/popup.js
import { useState } from "react";

export default function Popup() {
  const [message, setMessage] = useState("");

  const saveMessage = () => {
    chrome.storage.sync.set({ message }, () => {
      alert("Message saved!");
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to the Extension</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
        style={{
          padding: "5px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "3px",
          width: "100%",
        }}
      />
      <button
        onClick={saveMessage}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </div>
  );
}

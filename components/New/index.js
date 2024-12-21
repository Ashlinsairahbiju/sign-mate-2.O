import React, { useState } from 'react';

export default function New({ navigateToPage }) {
  const [message, setMessage] = useState('');

  const saveMessage = () => {
    chrome.storage.sync.set({ message }, () => {
      alert('Message saved!');
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Enter a Message</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something"
        style={{
          padding: '5px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '3px',
          width: '100%',
        }}
      />
      <button
        onClick={saveMessage}
        style={{
          padding: '10px 15px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        Save
      </button>
      <button
        onClick={() => navigateToPage('index')}
        style={{
          padding: '10px 15px',
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        Back to Index
      </button>
    </div>
  );
}

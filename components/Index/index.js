import React from 'react';

export default function Index({ navigateToPage }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to My Extension</h1>
      <p>This is the main page of your extension popup.</p>
      <button
        onClick={() => navigateToPage('new')}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        Go to New Page
      </button>
    </div>
  );
}

import React, { useState } from 'react';

export default function Home() {
  const [activePage, setActivePage] = useState('index');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'index' && (
        <iframe
          src="/popup.html" // Correct path to the popup.html in the public folder
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
          }}
          title="Popup"
        />
      )}
    </>
  );
}

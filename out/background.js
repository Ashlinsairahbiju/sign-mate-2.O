chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "saveData") {
      chrome.storage.sync.set({ key: message.data }, () => {
        console.log("Data saved:", message.data);
        sendResponse({ status: "success" });
      });
      return true; // Keep the message channel open for async response.
    }
  });
  
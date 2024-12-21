chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ extensionEnabled: false });
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "enableExtension") {
      chrome.storage.local.set({ extensionEnabled: true }, () => {
        sendResponse({ success: true });
      });
    }
  
    if (message.action === "disableExtension") {
      chrome.storage.local.set({ extensionEnabled: false }, () => {
        sendResponse({ success: true });
      });
    }
  
    return true; // to indicate the response is asynchronous
  });
  
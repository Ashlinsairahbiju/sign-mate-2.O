let isExtensionEnabled = false;

chrome.storage.local.get("extensionEnabled", (data) => {
  isExtensionEnabled = data.extensionEnabled || false;
});

// Monitor captions and trigger sign language video display
let currentCaptionIndex = 0;

function getCaptions() {
  const videoElement = document.querySelector("video");
  const track = videoElement?.textTracks[0];
  
  if (track && track.cues) {
    const cues = track.cues;
    if (cues[currentCaptionIndex]) {
      let captionText = cues[currentCaptionIndex].text;
      captionText = captionText.split(" "); // Split into words
      captionText.forEach(word => {
        if (isExtensionEnabled) {
          loadSignLanguageVideo(word);  // Show sign for each word
        }
      });
    }
  }
}

// Poll for captions
setInterval(getCaptions, 1000);

function loadSignLanguageVideo(word) {
  chrome.runtime.sendMessage({ action: "loadSignVideo", word: word });
}

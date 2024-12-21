document.getElementById("enableButton").addEventListener("click", () => {
  chrome.runtime.sendMessage(
    { action: "enableExtension" },
    (response) => {
      if (response && response.success) {
        document.getElementById("enableButton").style.display = "none";
        document.getElementById("mascot").style.display = "block";
      } else {
        console.error("Failed to enable extension");
      }
    }
  );
});

chrome.storage.local.get("extensionEnabled", (data) => {
  if (data.extensionEnabled) {
    document.getElementById("enableButton").style.display = "none";
    document.getElementById("mascot").style.display = "block";
  }
});

function loadSignLanguageVideo(word) {
  const videoUrl = `sign_language_videos/${word}.mp4`; // Assuming video files are named based on words
  document.getElementById("signVideo").src = videoUrl;
  document.getElementById("signVideo").play();
}

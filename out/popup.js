document.addEventListener('DOMContentLoaded', function() {
  const enableButton = document.getElementById('enableButton');
  const mascotDiv = document.getElementById('mascot');
  const videoElement = document.getElementById('signVideo');
  
  //let words = ['a', 'hai', 'n', 'nameis'];
  let words = ['hai', 'my', 'nameis', 'a','n','n','a'];
  let currentWordIndex = 0;

  enableButton.addEventListener('click', function() {
      // Show the mascot div and video element
      mascotDiv.style.display = 'block';
      videoElement.style.display = 'block';
      
      // Start playing the sequence
      playNextWord();
  });

  function playNextWord() {
      if (currentWordIndex >= words.length) {
          console.log('Sequence completed');
          currentWordIndex = 0; // Reset for next time
          return;
      }

      const currentWord = words[currentWordIndex];
      const videoUrl = chrome.runtime.getURL(`videos/${currentWord}.mp4`);
      
      console.log(`Playing video for word: ${currentWord}`);
      
      // Set up video for current word
      videoElement.src = videoUrl;
      
      // Play when video is loaded
      videoElement.addEventListener('loadedmetadata', function onLoaded() {
          videoElement.play()
              .catch(error => console.error("Error playing video:", error));
          // Remove listener to avoid duplicates
          videoElement.removeEventListener('loadedmetadata', onLoaded);
      });

      // Set up ended handler for current video
      videoElement.addEventListener('ended', function onEnded() {
          console.log(`Finished playing: ${currentWord}`);
          currentWordIndex++;
          playNextWord();
          // Remove listener to avoid duplicates
          videoElement.removeEventListener('ended', onEnded);
      });

      // Handle errors
      videoElement.addEventListener('error', function onError(e) {
          console.error(`Error playing video for word: ${currentWord}`, e);
          currentWordIndex++;
          playNextWord();
          // Remove listener to avoid duplicates
          videoElement.removeEventListener('error', onError);
      });
  }
});
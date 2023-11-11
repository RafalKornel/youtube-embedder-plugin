chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "targetPageClick") {
    // Trigger a click event on the button in the target page
    const button = document.querySelector(`button.ytp-button`);
    
    if (button) {
      button.click();
    }
  }
});

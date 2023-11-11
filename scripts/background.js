// const button = document.querySelector(`button[aria-keyshortcuts="k"]`);


const YOUTUBE_URL = "https://www.youtube.com";
const YOUTUBE_WATCH_URL = `${YOUTUBE_URL}/watch`;
const YOUTUBE_EMBED_URL = `${YOUTUBE_URL}/embed`;

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(YOUTUBE_WATCH_URL)) {
    const url = new URL(tab.url);

    console.log(url);

    const videoId = url.searchParams.get("v");

    const newUrl = `${YOUTUBE_EMBED_URL}/${videoId}`;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const sourceTabId = tabs[0].id;
      chrome.tabs.sendMessage(sourceTabId, { action: "sourcePageClick" });

      // Create a new tab with the modified URL
      chrome.tabs.create({ active: true, url: newUrl }, (createdTab) => {
        // Send a message to the content script of the target page
        chrome.tabs.sendMessage(createdTab.id, { action: "targetPageClick" });
      });
    });
  }
});

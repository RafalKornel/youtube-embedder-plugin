chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = new URL(tabs[0].url);
    var vParameter = url.searchParams.get("v");
    chrome.tabs.create(
      {
        url: `https://www.youtube.com/embed/${vParameter}`,
      },
      function (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: function () {
            document.querySelector("button.ytp-large-play-button").click();
          },
        });
      }
    );

    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function () {
        document.querySelector("button.ytp-play-button").click();
      },
    });
  });
});

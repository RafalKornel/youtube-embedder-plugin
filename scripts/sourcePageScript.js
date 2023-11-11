const el = new HTMLDialogElement();

el.innerHTML = "THIS IS SOME ELEMENT!";

document.body.appendChild(el);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sourcePageClick") {
    // Trigger a click event on the button in the source page
    const button = document.querySelector(`button[aria-keyshortcuts="k"]`);

    alert("received");

    if (button) {
      button.click();
    }
  }
});

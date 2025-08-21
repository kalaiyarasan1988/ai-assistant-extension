// Extract visible text from the webpage
function extractVisibleText() {
  let bodyText = document.body.innerText || "";
  bodyText = bodyText.trim();

  // Fallback if page has no readable text
  if (!bodyText || bodyText.length < 50) {
    return "This page contains little or no readable content. Provide a generic summary instead.";
  }

  // Limit length for API
  return bodyText.substring(0, 5000);
}

// Listen for messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extractText") {
    const pageText = extractVisibleText();
    sendResponse({ text: pageText });
  }
});

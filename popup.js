document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const context = document.getElementById("context").value;

  // Get text from the page
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const [{ result: pageText }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => document.body.innerText
  });

  // Call Google Gemini API
  const API_KEY = "enter your key here";  // Replace with your key
  const prompt = `Summarize the following webpage text with context: ${context}\n\n${pageText}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    console.log("API Response:", data); // 👈 See exact response in Chrome DevTools

    // Try extracting summary from multiple possible paths
    let summary = "Error: Could not summarize";
    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      summary = data.candidates[0].content.parts[0].text;
    } else if (data?.candidates?.[0]?.output) {
      summary = data.candidates[0].output;
    }

    document.getElementById("result").innerText = summary;
  } catch (err) {
    console.error(err);
    document.getElementById("result").innerText = "Error: " + err.message;
  }
});

# Web Summarizer (Google AI)

A Chrome extension that summarizes any webpage using **Google AI (Gemini API)** with optional **context prompts**.  
You can guide the summary style (e.g., “Explain like I’m 5”, “Business-focused”, “Extract only financial details”).

---

## 🚀 Features
- Summarizes the current webpage text.  
- Lets you add **context** for tailored summaries.  
- Uses **Google Gemini API** for high-quality results.  
- Works inside popup UI (can be extended to show overlay on webpage).  

---

## 📦 Installation
1. Clone or download this repo.  
2. Open **Chrome** → `chrome://extensions/`.  
3. Enable **Developer Mode** (toggle top right).  
4. Click **Load unpacked** and select the extension folder.  
5. You’ll see the **Web Summarizer (Google AI)** icon in your toolbar.  

---

## 🔑 Setup Google AI API Key
1. Go to [Google AI Studio](https://aistudio.google.com/).  
2. Generate a new **API key**.  
3. Open `popup.js` in the extension code.  
4. Replace:
   ```javascript
   const API_KEY = "YOUR_GOOGLE_API_KEY";
   ```
   with your actual API key.  

---

## 🛠 Usage
1. Open any webpage.  
2. Click the **Summarizer Extension** icon.  
3. Enter context (optional), for example:  
   - *"Summarize for kids"*  
   - *"Give me only pros/cons"*  
   - *"Highlight financial details"*  
4. Click **Summarize**.  
5. The summary will appear in the extension popup.  

---

## 📂 Project Structure
```
.
├── manifest.json     # Extension manifest (v3)
├── popup.html        # Popup UI for summarizer
├── popup.js          # Handles summarization + API calls
├── background.js     # Service worker (future use, logging, events)
└── README.md         # Documentation
```

---

## ⚠️ Notes
- Requires a valid **Google Gemini API key**.  
- Free tier has daily quota limits.  
- If summarization fails, check the **Console logs** in popup → Inspect → Console.  
- Tested on latest Chrome with Manifest V3.  

---

## 🧩 Future Improvements
- Show summary in an **overlay panel** on the webpage.  
- Add **local extractive summarizer** as a fallback if API fails.  
- Provide multiple summary styles (bulleted list, TL;DR, detailed).  
- Option to export summaries to **clipboard, PDF, or Markdown**.  
- Dark mode UI for popup.  

---

## 📸 Screenshots / Demo
> Replace the placeholders below with actual screenshots once the extension is running.

### Popup UI
![Popup Screenshot](docs/images/popup.png)

### Example Summary
![Summary Screenshot](docs/images/summary.png)

---

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Sparky assistant logic
function sparkyReply(text) {
  text = text.toLowerCase();

  if (text.includes("hello")) return "Hey ⚡ I’m Sparky.";
  if (text.includes("time")) return new Date().toLocaleTimeString();
  if (text.includes("who are you")) return "I am Sparky — your assistant.";
  if (text.includes("bye")) return "Bye 👋 Stay charged ⚡";

  return "I’m listening… tell me more.";
}

// API endpoint
app.post("/sparky", (req, res) => {
  const userText = req.body.text || "";
  res.json({ reply: sparkyReply(userText) });
});

// Start server
app.listen(3000, () => console.log("⚡ Sparky running on port 3000"));

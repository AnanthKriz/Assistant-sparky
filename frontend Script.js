async function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const text = input.value;
  if (!text) return;

  chat.innerHTML += `You: ${text}<br>`;
  input.value = "";

  try {
    const res = await fetch("http://localhost:3000/sparky", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await res.json();
    chat.innerHTML += `Sparky: ${data.reply}<br>`;
  } catch (e) {
    chat.innerHTML += `Sparky: Error connecting to backend<br>`;
  }

  chat.scrollTop = chat.scrollHeight;
}

// Display current date
document.getElementById("dateDisplay").textContent =
  "📅 " + new Date().toDateString();

let selectedMood = "";

const moodButtons = document.querySelectorAll(".mood-btn");
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedMood = button.dataset.mood;
    moodButtons.forEach(btn => btn.style.opacity = "0.6");
    button.style.opacity = "1";
  });
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const journalText = document.getElementById("journalInput").value;
  const today = new Date().toDateString();

  if (!selectedMood || !journalText.trim()) {
    alert("Please select a mood and write something.");
    return;
  }

  const output = `
    <h3>🌟 Mood Entry for ${today}</h3>
    <p><strong>Mood:</strong> ${selectedMood}</p>
    <p><strong>Journal:</strong> ${journalText}</p>
  `;

  document.getElementById("outputEntry").innerHTML = output;

  // Optional: clear after submit
  document.getElementById("journalInput").value = "";
  selectedMood = "";
  moodButtons.forEach(btn => btn.style.opacity = "1");
});
function saveJournal() {
  const text = document.getElementById("journalText").value;
  if (text.trim() === "") {
    alert("Please write something before saving!");
  } else {
    alert("✅ Your entry has been saved (locally for now).");
    console.log("Journal entry:", text);
    document.getElementById("journalText").value = "";
  }
}
const quotes = [
  "🌟 Believe in yourself. You are enough.",
  "🌸 Every day is a fresh start.",
  "✨ Your feelings are valid.",
  "💪 You’re stronger than you think.",
  "🦋 Growth takes time. Be gentle with yourself."
];

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("dailyQuote").textContent = quote;
}

showRandomQuote();

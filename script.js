document.getElementById("saveBtn").addEventListener("click", () => {
  const date = document.getElementById("date").value;
  const mood = document.getElementById("mood").value;
  const text = document.getElementById("journal").value;

  if (!date || !mood || !text) {
    alert("Please fill all fields!");
    return;
  }

  const entry = { date, mood, text };
  let entries = JSON.parse(localStorage.getItem("moodJournalEntries")) || [];
  entries.unshift(entry); // newest first
  localStorage.setItem("moodJournalEntries", JSON.stringify(entries));
  document.getElementById("journal").value = "";
  renderEntries();
});

function renderEntries() {
  const container = document.getElementById("entriesContainer");
  container.innerHTML = "";
  const entries = JSON.parse(localStorage.getItem("moodJournalEntries")) || [];

  if (entries.length === 0) {
    container.innerHTML = "<p>No entries yet.</p>";
    return;
  }

  entries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <strong>${entry.date} — ${entry.mood}</strong>
      <p>${entry.text}</p>
    `;
    container.appendChild(div);
  });
}

window.onload = renderEntries;



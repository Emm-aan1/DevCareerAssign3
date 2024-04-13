function redactText() {
  const originalText = document.getElementById("originalText").value;
  const scrambleWords = document.getElementById("scrambleWords").value.split(",");
  let redactedText = originalText;
  let wordsMatched = 0;

  // Scramble each word
  for (const word of scrambleWords) {
    const loweredWord = word.toLowerCase();
    const replacement = "😶‍🌫️".repeat(word.length);

    // Loop to replace all occurrences (case-insensitive)
    while (redactedText.includes(loweredWord)) {
      redactedText = redactedText.replace(loweredWord, replacement);
      wordsMatched++;
    }
  }

  document.getElementById("redactedText").innerText = redactedText;
  document.getElementById("wordsMatched").textContent = wordsMatched;
}

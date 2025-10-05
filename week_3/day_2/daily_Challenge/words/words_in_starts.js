function wordsInFrame() {
  const input = "Enter several words separated by commas"
  const words = input.split(" ").map(word => word.trim());
  
  const maxLength = Math.max(...words.map(word => word.length));
  const border = "*".repeat(maxLength + 4);
  
  console.log(border);
  for (let word of words) {
    console.log(`* ${word.padEnd(maxLength, " ")} *`);
  }
  console.log(border);
}

wordsInFrame();

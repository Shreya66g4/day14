function lookAndSay(start, n) {
    const sequence = [start.toString()]; // Initialize the sequence with the starting term as a string
  
    for (let i = 1; i < n; i++) {
      const prevTerm = sequence[i - 1];
      let currentTerm = ''; // Store the next term as a string
  
      let count = 1;
      for (let j = 0; j < prevTerm.length; j++) {
        // Count the consecutive repeating digits
        if (prevTerm[j] === prevTerm[j + 1]) {
          count++;
        } else {
          // Append the count and digit to the current term
          currentTerm += count.toString() + prevTerm[j];
          count = 1; // Reset the count for the next digit
        }
      }
  
      sequence.push(currentTerm);
    }
  
    return sequence.map(Number); 
  }
  
  console.log(lookAndSay(1, 7)); 
  console.log(lookAndSay(123, 4)); 
  console.log(lookAndSay(70, 5)); 
  
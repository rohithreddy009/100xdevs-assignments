function countVowels(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  const lowerCaseStr = str.toLowerCase();

  // Initialize a counter for vowels
  let vowelCount = 0;

  // Loop through each character in the string
  for (let i = 0; i < lowerCaseStr.length; i++) {
      // Check if the character is a vowel
      if (lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {
          // Increment the vowel count if it's a vowel
          vowelCount++;
      }
  }

  // Return the final count of vowels
  return vowelCount;
}

// Test the function
const testString = "Hello, World!";
console.log(countVowels(testString)); // Output: 3

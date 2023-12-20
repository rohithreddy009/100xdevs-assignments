function countVowels(str) {
  const lowerCaseStr = str.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;

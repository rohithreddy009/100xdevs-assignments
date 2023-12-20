function isPalindrome(str) {
  // Remove spaces and punctuation marks and convert the string to lowercase
  const cleanedStr = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

  // Initialize pointers for the start and end of the cleaned string
  let start = 0;
  let end = cleanedStr.length - 1;

  // Loop until the start pointer is less than the end pointer
  while (start < end) {
    // If characters at the current positions are not equal, it's not a palindrome
    if (cleanedStr[start] !== cleanedStr[end]) {
      return false;
    }

    // Move the pointers towards the center
    start++;
    end--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

module.exports = isPalindrome;

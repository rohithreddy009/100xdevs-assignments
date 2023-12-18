function isPalindrome(str) {
  // Convert the string to lowercase to make it case-insensitive
  const lowerCaseStr = str.toLowerCase();

  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = lowerCaseStr.length - 1;

  // Loop until the start pointer is less than the end pointer
  while (start < end) {
      // If characters at the current positions are not equal, it's not a palindrome
      if (lowerCaseStr[start] !== lowerCaseStr[end]) {
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





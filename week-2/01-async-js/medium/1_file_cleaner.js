const fs = require('fs');

// Function to clean extra spaces from a string
function cleanSpaces(text) {
  // Use regular expression to replace multiple spaces with a single space
  return text.replace(/\s+/g, ' ').trim();
}

// Function to read a file, clean extra spaces, and write it back
function cleanFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Clean extra spaces from the content
    const cleanedContent = cleanSpaces(data);

    // Write the cleaned content back to the same file
    fs.writeFile(filename, cleanedContent, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
        return;
      }

      console.log('File cleaned successfully.');
    });
  });
}

// Specify the file name you want to clean
const filename = 'v.txt';

// Clean the file
cleanFile(filename);
